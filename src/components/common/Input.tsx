import { cva } from "class-variance-authority";
import clsx from "clsx";
import React, { ComponentPropsWithoutRef } from "react";

export type InputElement = Omit<
  ComponentPropsWithoutRef<"input">,
  "suffix" | "prefix"
>;

export interface InputProps extends InputElement {
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}

const wrapper = cva(
  clsx(
    "flex flex-row gap-2 items-center",
    "border border-zinc-800 py-2 px-3 rounded-lg bg-white focus-within:ring-1 ring-zinc-500 transition-all",
    "text-black w-full",
    "overflow-relative"
  )
);

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, suffix, prefix, ...rest } = props;
  return (
    <div className={wrapper({ className })}>
      {prefix &&
        React.cloneElement(prefix as JSX.Element, {
          disabled: rest.disabled,
        })}
      <input
        ref={ref}
        className="w-full border-none bg-transparent outline-none placeholder:text-sm placeholder:text-[#C4C4C4]"
        {...rest}
      />
      {suffix && suffix}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
