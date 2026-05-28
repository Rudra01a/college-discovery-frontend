'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { GraduationCap, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuthStore } from '@/features/auth/authStore';
import { LoginCredentials } from '@/types/auth';
import toast from 'react-hot-toast';

const loginSchema = z.object({
  email: z.string().email('Enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginCredentials) => {
    try {
      await login(data);
      toast.success('Welcome back! 👋');
      router.push('/');
    } catch {
      // Error already set in store
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12 bg-gray-50">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 bg-[#111111] rounded-2xl flex items-center justify-center shadow-lg">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
        </div>

        <div className="card p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#111111] mb-1">Welcome back</h1>
            <p className="text-sm text-[#6b7280]">Sign in to your CollegeDiscover account</p>
          </div>

          {/* Demo credentials hint */}
          <div className="mb-6 p-3 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-xs text-[#111111] font-medium mb-1">Demo credentials</p>
            <p className="text-xs text-[#111111]">Email: demo@example.com</p>
            <p className="text-xs text-[#111111]">Password: password123</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              id="login-email"
              label="Email address"
              type="email"
              placeholder="you@example.com"
              leftIcon={<Mail className="h-4 w-4" />}
              error={errors.email?.message}
              {...register('email')}
            />

            <Input
              id="login-password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              leftIcon={<Lock className="h-4 w-4" />}
              error={errors.password?.message}
              {...register('password')}
            />

            <div className="flex justify-end">
              <Link
                href="/auth/forgot-password"
                className="text-xs text-[#111111] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              fullWidth
              isLoading={isLoading}
              rightIcon={<ArrowRight className="h-4 w-4" />}
              id="login-submit-btn"
            >
              Sign In
            </Button>
          </form>

          <p className="text-center text-sm text-[#6b7280] mt-6">
            Don&apos;t have an account?{' '}
            <Link href="/auth/signup" className="text-[#111111] font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
