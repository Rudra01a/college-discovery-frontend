'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/cn';

interface DropdownOption<T = string> {
  label: string;
  value: T;
  icon?: React.ReactNode;
}

interface DropdownProps<T = string> {
  options: DropdownOption<T>[];
  value: T;
  onChange: (value: T) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  triggerClassName?: string;
}

export function Dropdown<T extends string>({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  label,
  className,
  triggerClassName,
}: DropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className={cn('relative', className)}>
      {label && (
        <span className="block text-xs font-medium text-[#6b7280] mb-1">
          {label}
        </span>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'flex items-center justify-between gap-2 w-full',
          'h-10 px-3 rounded-xl border border-gray-200',
          'bg-white text-sm text-[#444444]',
          'hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#111111]',
          'transition-colors duration-150',
          triggerClassName
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2 min-w-0">
          {selected?.icon}
          <span className="truncate">{selected ? selected.label : placeholder}</span>
        </span>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-[#6b7280] shrink-0 transition-transform duration-150',
            open && 'rotate-180'
          )}
        />
      </button>
      {open && (
        <ul
          role="listbox"
          className={cn(
            'absolute z-30 mt-1 w-full min-w-[10rem]',
            'bg-white border border-gray-200',
            'rounded-xl shadow-card-lg py-1 animate-fade-in'
          )}
        >
          {options.map((option) => (
            <li
              key={String(option.value)}
              role="option"
              aria-selected={option.value === value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={cn(
                'flex items-center justify-between gap-2 px-3 py-2 cursor-pointer',
                'text-sm transition-colors duration-100 rounded-lg mx-1',
                option.value === value
                  ? 'bg-gray-100 text-[#111111]'
                  : 'text-[#444444] hover:bg-gray-50'
              )}
            >
              <span className="flex items-center gap-2">
                {option.icon}
                {option.label}
              </span>
              {option.value === value && (
                <Check className="h-3.5 w-3.5 text-[#111111]" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
