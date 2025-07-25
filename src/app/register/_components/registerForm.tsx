"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertCircleIcon,
  BrainIcon,
  CheckCircleIcon,
  EyeIcon,
  EyeOffIcon,
  ShieldIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRegisterForm } from "./hook";

export function RegisterForm() {
  const { details, setDetails, mutate, isPending } = useRegisterForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submitRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    mutate(details);
  };

  return (
    <div className="relative z-10 w-full">
      {/* Logo and branding - compact */}
      <div className="text-center mb-2">
        <div className="inline-flex items-center justify-center rounded-xl mb-2">
          <picture>
            <img src="/images/kiara_logo.png" alt="Kiara Logo" className="size-20" />
          </picture>
        </div>
        <h1 className="text-2xl font-bold text-kiara-gradient mb-1 font-sans">Kiara AI</h1>
        <p className="text-muted-foreground text-sm">Intelligent. Powerful. Seamless.</p>
      </div>

      <Card className="border-border/50 bg-card/95 backdrop-blur-xl shadow-xl shadow-primary/5">
        <CardHeader className="space-y-1 text-center pb-2 px-4">
          <CardTitle className="text-lg font-bold text-foreground font-sans">Create Account</CardTitle>
          <CardDescription className="text-muted-foreground text-xs">Sign up to start your AI journey</CardDescription>
        </CardHeader>

        <CardContent className="space-y-3 px-4">
          <form onSubmit={submitRegister} className="space-y-3">
            {/* Name Field */}
            <div className="space-y-1">
              <Label htmlFor="name" className="text-foreground font-medium font-sans text-xs">
                Full Name
              </Label>
              <div className="relative">
                <Input
                  id="name"
                  type="text"
                  value={details.name}
                  onChange={(e) => {
                    setDetails((prevValue) => ({
                      ...prevValue,
                      name: e.target.value,
                    }));
                  }}
                  className={`h-9 bg-background border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-xs ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your full name"
                  disabled={isPending}
                />
                {errors.name && (
                  <div className="mt-1">
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircleIcon className="h-3 w-3" />
                      {errors.name}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <Label htmlFor="email" className="text-foreground font-medium font-sans text-xs">
                Email Address
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={details.email}
                  onChange={(e) =>
                    setDetails((prevValue) => ({
                      ...prevValue,
                      email: e.target.value,
                    }))
                  }
                  className={`h-9 bg-background border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-xs ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your email address"
                  disabled={isPending}
                />
                {errors.email && (
                  <div className="mt-1">
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircleIcon className="h-3 w-3" />
                      {errors.email}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <Label htmlFor="password" className="text-foreground font-medium font-sans text-xs">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={details.password}
                  onChange={(e) =>
                    setDetails((prevValue) => ({
                      ...prevValue,
                      password: e.target.value,
                    }))
                  }
                  className={`pr-8 h-9 bg-background border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-xs ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Create a secure password"
                  disabled={isPending}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 hover:bg-muted p-0"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isPending}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-3 w-3 text-muted-foreground" />
                  ) : (
                    <EyeIcon className="h-3 w-3 text-muted-foreground" />
                  )}
                </Button>
                {errors.password && (
                  <div className="mt-1">
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircleIcon className="h-3 w-3" />
                      {errors.password}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-1">
              <Label htmlFor="confirmPassword" className="text-foreground font-medium font-sans text-xs">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={details.confirmPassword}
                  onChange={(e) =>
                    setDetails((prevValue) => ({
                      ...prevValue,
                      confirmPassword: e.target.value,
                    }))
                  }
                  className={`pr-8 h-9 bg-background border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-xs ${
                    errors.confirmPassword ? "border-red-500" : ""
                  }`}
                  placeholder="Confirm your password"
                  disabled={isPending}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 hover:bg-muted p-0"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={isPending}
                >
                  {showConfirmPassword ? (
                    <EyeOffIcon className="h-3 w-3 text-muted-foreground" />
                  ) : (
                    <EyeIcon className="h-3 w-3 text-muted-foreground" />
                  )}
                </Button>
                {details.confirmPassword && details.password === details.confirmPassword && !errors.confirmPassword && (
                  <div className="mt-1">
                    <p className="text-xs text-green-500 flex items-center gap-1">
                      <CheckCircleIcon className="h-3 w-3" />
                      Passwords match
                    </p>
                  </div>
                )}
                {errors.confirmPassword && (
                  <div className="mt-1">
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircleIcon className="h-3 w-3" />
                      {errors.confirmPassword}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-2">
              <input
                id="terms"
                type="checkbox"
                className="mt-0.5 h-3 w-3 text-primary focus:ring-primary border-gray-300 rounded"
                disabled={isPending}
              />
              <label htmlFor="terms" className="text-xs text-muted-foreground">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Error Messages */}
            {errors.general && (
              <div className="p-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg">
                <p className="flex items-center gap-1">
                  <AlertCircleIcon className="h-3 w-3" />
                  {errors.general}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-9 bg-kiara-gradient hover:opacity-90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-200 font-sans text-xs"
              disabled={isPending}
            >
              {isPending ? (
                <div className="flex items-center justify-center space-x-1">
                  <div className="h-3 w-3 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                  <p className="text-xs">Creating Account...</p>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-1">
                  <SparklesIcon className="w-3 h-3" />
                  <p className="text-xs">Create Account</p>
                </div>
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-2 pt-2 px-4">
          <div className="text-center text-xs text-muted-foreground font-sans">
            {"Already have an account? "}
            <Link href="/login">
              <Button
                variant="link"
                className="px-0 text-primary hover:text-primary/80 font-semibold font-sans text-xs h-auto p-0"
              >
                Sign in
              </Button>
            </Link>
          </div>

          {/* AI Features showcase - compact */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-6 h-6 bg-primary/10 rounded-md mb-1 group-hover:bg-primary/20 transition-colors">
                <ZapIcon className="w-3 h-3 text-primary" />
              </div>
              <p className="text-[10px] text-muted-foreground font-medium font-sans">Lightning Fast</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-6 h-6 bg-accent/10 rounded-md mb-1 group-hover:bg-accent/20 transition-colors">
                <BrainIcon className="w-3 h-3 text-accent" />
              </div>
              <p className="text-[10px] text-muted-foreground font-medium font-sans">AI Powered</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-6 h-6 bg-primary/10 rounded-md mb-1 group-hover:bg-primary/20 transition-colors">
                <ShieldIcon className="w-3 h-3 text-primary" />
              </div>
              <p className="text-[10px] text-muted-foreground font-medium font-sans">Enterprise Secure</p>
            </div>
          </div>

          <div className="text-center text-[10px] text-muted-foreground font-sans leading-relaxed">
            By signing up, you agree to our{" "}
            <Button variant="link" className="px-0 text-[10px] text-primary hover:text-primary/80 h-auto p-0 font-sans">
              Terms of Service
            </Button>
            {" and "}
            <Button variant="link" className="px-0 text-[10px] text-primary hover:text-primary/80 h-auto p-0 font-sans">
              Privacy Policy
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

// Legacy export for backward compatibility
export default RegisterForm;
