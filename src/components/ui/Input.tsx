import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className = "", type, ...props }, ref) => {
    const inputClasses = `
      flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base
      ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium
      placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed
      disabled:opacity-50 md:text-sm ${className}
    `
      .replace(/\s+/g, " ")
      .trim();

    return <input type={type} className={inputClasses} ref={ref} {...props} />;
  }
);
Input.displayName = "Input";

export { Input };
