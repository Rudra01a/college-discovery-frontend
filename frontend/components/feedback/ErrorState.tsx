import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn'; interface ErrorStateProps { title?: string; message?: string; onRetry?: () => void; className?: string;
} export function ErrorState({ title = 'Something went wrong', message = 'We encountered an error while loading this content. Please try again.', onRetry, className,
}: ErrorStateProps) { return ( <div className={cn( 'flex flex-col items-center justify-center text-center py-16 px-6', className )} > <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-4"> <AlertCircle className="h-8 w-8 text-red-500 " /> </div> <h3 className="text-lg font-semibold text-[#111111] mb-1">{title}</h3> <p className="text-sm text-[#6b7280] max-w-sm mb-6">{message}</p> {onRetry && ( <Button variant="outline" size="sm" leftIcon={<RefreshCw className="h-4 w-4" />} onClick={onRetry}> Try Again </Button> )} </div> );
}
