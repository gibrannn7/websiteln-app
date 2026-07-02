import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-light/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gold-dark text-zinc-50 hover:bg-gold-light hover:text-zinc-950 transition-colors duration-200",
        outline:
          "border border-gold-dark/30 text-gold-light bg-transparent hover:bg-gold-dark/10 hover:border-gold-light/50 transition-colors duration-200",
        secondary:
          "bg-zinc-900 text-zinc-100 hover:bg-zinc-800 border border-zinc-800 transition-colors duration-200",
        ghost: "hover:bg-zinc-900/50 text-zinc-400 hover:text-zinc-100 transition-colors duration-200",
        link: "text-gold-light underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
