'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useCallback, useState } from 'react';
import { X, ChevronDown, ChevronUp, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/cn';
import { COLLEGE_CATEGORIES, COLLEGE_TYPES, INDIAN_STATES, FEES_RANGES } from '@/lib/constants';

const FilterSection = ({
  id,
  label,
  activeCount = 0,
  isOpen,
  onToggle,
  children,
}: {
  id: string;
  label: string;
  activeCount?: number;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => (
  <div className="border-b border-gray-200 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full text-sm font-bold text-[#111111] mb-3 hover:text-black transition-colors"
    >
      <div className="flex items-center gap-2">
        {label}
        {activeCount > 0 && (
          <span className="w-5 h-5 flex items-center justify-center bg-gray-100 text-[#111111] rounded-full text-2xs font-bold border border-gray-200">
            {activeCount}
          </span>
        )}
      </div>
      {isOpen ? (
        <ChevronUp className="h-4 w-4 text-gray-400" />
      ) : (
        <ChevronDown className="h-4 w-4 text-gray-400" />
      )}
    </button>
    {isOpen && (
      <div className="space-y-2.5 p-1">
        {children}
      </div>
    )}
  </div>
);

const Checkbox = ({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: () => void;
}) => (
  <label className="flex items-start gap-3 cursor-pointer group py-1">
    <div
      onClick={onChange}
      className={cn(
        'w-4.5 h-4.5 rounded-[4px] border flex items-center justify-center transition-all mt-0.5 shrink-0',
        checked
          ? 'bg-[#111111] border-[#111111]'
          : 'bg-white border-gray-300 group-hover:border-gray-500'
      )}
    >
      {checked && (
        <svg className="w-3 h-3 text-white" viewBox="0 0 10 10" fill="none">
          <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
    <span
      onClick={onChange}
      className={cn(
        'text-sm transition-colors',
        checked
          ? 'text-[#111111] font-semibold'
          : 'text-[#444444] hover:text-[#111111]'
      )}
    >
      {label}
    </span>
  </label>
);

export function FilterSidebar({ className }: { className?: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [groups, setGroups] = useState<Record<string, boolean>>({
    category: true,
    type: true,
    fees: true,
    rating: true,
    location: false,
  });

  const toggleGroup = (key: string) =>
    setGroups((g) => ({ ...g, [key]: !g[key] }));

  const updateParam = useCallback(
    (key: string, value: string, multi = true) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', '1');

      if (multi) {
        const existing = params.getAll(key);
        if (existing.includes(value)) {
          params.delete(key);
          existing.filter((v) => v !== value).forEach((v) => params.append(key, v));
        } else {
          params.append(key, value);
        }
      } else {
        if (params.get(key) === value) {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      }
      router.replace(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams]
  );

  const clearAll = () => {
    router.replace(pathname);
  };

  const hasFilters =
    searchParams.has('category') ||
    searchParams.has('type') ||
    searchParams.has('fees') ||
    searchParams.has('rating') ||
    searchParams.has('location');

  const selectedCategories = searchParams.getAll('category');
  const selectedTypes = searchParams.getAll('type');
  const selectedFees = searchParams.get('fees');
  const selectedRating = searchParams.get('rating');
  const selectedLocations = searchParams.getAll('location');

  return (
    <aside className={cn('w-full', className)}>
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4.5 w-4.5 text-[#111111]" />
          <h2 className="text-base font-bold text-[#111111]">Filters</h2>
        </div>
        {hasFilters && (
          <button
            onClick={clearAll}
            className="text-xs text-red-600 hover:underline font-semibold"
          >
            Clear all
          </button>
        )}
      </div>

      <FilterSection id="category" label="Category" activeCount={selectedCategories.length} isOpen={groups['category']} onToggle={() => toggleGroup('category')} >
        {COLLEGE_CATEGORIES.map((cat) => (
          <Checkbox key={cat.value} label={`${cat.icon} ${cat.label}`} checked={selectedCategories.includes(cat.value)} onChange={() => updateParam('category', cat.value)} />
        ))}
      </FilterSection>

      <FilterSection id="type" label="College Type" activeCount={selectedTypes.length} isOpen={groups['type']} onToggle={() => toggleGroup('type')} >
        {COLLEGE_TYPES.map((t) => (
          <Checkbox key={t.value} label={t.label} checked={selectedTypes.includes(t.value)} onChange={() => updateParam('type', t.value)} />
        ))}
      </FilterSection>

      <FilterSection id="fees" label="Annual Fees" activeCount={selectedFees ? 1 : 0} isOpen={groups['fees']} onToggle={() => toggleGroup('fees')} >
        {FEES_RANGES.map((range) => {
          const val = `${range.min}-${range.max}`;
          return (
            <Checkbox key={val} label={range.label} checked={selectedFees === val} onChange={() => updateParam('fees', val, false)} />
          );
        })}
      </FilterSection>

      <FilterSection id="rating" label="Minimum Rating" activeCount={selectedRating ? 1 : 0} isOpen={groups['rating']} onToggle={() => toggleGroup('rating')} >
        {[4.5, 4.0, 3.5, 3.0].map((r) => (
          <Checkbox key={r} label={`${r}+ ⭐`} checked={selectedRating === String(r)} onChange={() => updateParam('rating', String(r), false)} />
        ))}
      </FilterSection>

      <FilterSection id="location" label="State" activeCount={selectedLocations.length} isOpen={groups['location']} onToggle={() => toggleGroup('location')} >
        {INDIAN_STATES.map((state) => (
          <Checkbox key={state} label={state} checked={selectedLocations.includes(state)} onChange={() => updateParam('location', state)} />
        ))}
      </FilterSection>
    </aside>
  );
}
