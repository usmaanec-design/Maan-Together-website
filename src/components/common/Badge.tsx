import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "neutral" | "orange" | "dark" | "outline" | "success";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  size = "md",
  className = "",
}) => {
  const baseStyles = "inline-flex items-center font-medium rounded-md select-none tracking-tight";

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
  }[size];

  const variantStyles = {
    neutral: "bg-slate-100 text-slate-700 border border-slate-200/80",
    orange: "bg-orange-50 text-orange-700 border border-orange-200/90",
    dark: "bg-[#0A0C10] text-slate-100 border border-slate-800",
    outline: "bg-white text-slate-700 border border-slate-300",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200/80",
  }[variant];

  return (
    <span className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}>
      {children}
    </span>
  );
};
