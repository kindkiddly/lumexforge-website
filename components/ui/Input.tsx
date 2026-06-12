import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-2">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-foreground-secondary"
      >
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-foreground placeholder:text-foreground-muted transition-all duration-300 focus:border-accent-primary/40 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-accent-primary/20",
          error && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20",
          className
        )}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
