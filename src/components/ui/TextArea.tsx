import * as React from "react";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className = "", ...props }, ref) => {
  const textareaClasses = `
      flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
      ring-offset-white placeholder:text-gray-400 focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2
      disabled:cursor-not-allowed disabled:opacity-50 ${className}
    `
    .replace(/\s+/g, " ")
    .trim();

  return <textarea className={textareaClasses} ref={ref} {...props} />;
});
Textarea.displayName = "Textarea";

export { Textarea };
