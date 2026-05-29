import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  link?: string;
  isIcon?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, link, isIcon, className, type = "button", disabled }) => {
  return (
    <>
      {link ? (
        <Link href={link} target="_blank" className="w-10 h-10 cursor-pointer">
          <ButtonBody className={className} isIcon={isIcon}>
            {children}
          </ButtonBody>
        </Link>
      ) : (
        <ButtonBody className={className} isIcon={isIcon} type={type} disabled={disabled}>
          {children}
        </ButtonBody>
      )}
    </>
  );
};

interface ButtonBodyProps {
  children: ReactNode;
  isIcon?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const ButtonBody: FC<ButtonBodyProps> = ({ children, isIcon, className, type = "button", disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "cursor-pointer flex-none w-auto h-full",
        "flex items-center justify-center gap-2 bg-primary-background rounded-full select--none whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-white/[0.1] transition-colors duration-100",
        disabled && "opacity-50 pointer-events-none",
        className,
        isIcon ? "h-10 w-10" : "h-full w-max px-3 py-2"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
