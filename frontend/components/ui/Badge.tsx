import { cn } from '@/lib/cn'; type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'outline';
type BadgeSize = 'sm' | 'md'; interface BadgeProps { variant?: BadgeVariant; size?: BadgeSize; className?: string; children: React.ReactNode;
} const variantStyles: Record<BadgeVariant, string> = { default: 'bg-gray-100 text-[#111111] border border-gray-200 ' + ' ', primary: 'bg-brand-100 text-brand-800 border border-brand-200 ' + ' ', success: 'bg-green-100 text-green-800 border border-green-200 ' + ' ', warning: 'bg-amber-100 text-amber-800 border border-amber-200 ' + ' ', danger: 'bg-red-100 text-red-800 border border-red-200 ' + ' ', info: 'bg-sky-100 text-sky-800 border border-sky-200 ' + ' ', outline: 'border border-gray-200 text-[#444444] bg-white ' + ' ',
}; const sizeStyles: Record<BadgeSize, string> = { sm: 'px-2 py-0.5 text-2xs', md: 'px-2.5 py-0.5 text-xs',
}; export function Badge({ variant = 'default', size = 'md', className, children }: BadgeProps) { return ( <span className={cn( 'inline-flex items-center gap-1 rounded-full font-semibold', variantStyles[variant], sizeStyles[size], className )} > {children} </span> );
}
