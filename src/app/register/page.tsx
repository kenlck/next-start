import { RegisterForm } from "./_components/registerForm";

export default function RegisterPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-background relative overflow-hidden px-4">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-kiara-gradient opacity-10" />

      {/* Animated background elements - smaller sizes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-3/4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/3 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      {/* Grid pattern - responsive sizes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:16px_16px] sm:bg-[size:24px_24px] opacity-20" />

      {/* Responsive container */}
      <div className="w-full max-w-sm sm:max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
}
