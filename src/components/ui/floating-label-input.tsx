"use client";
import React, { useState, useId } from 'react';
import { cn } from '@/lib/utils';
import { Input, type InputProps } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FloatingLabelInputProps extends InputProps {
  label: string;
}

export const FloatingLabelInput = React.forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ label, id, className, value: controlledValue, onChange, onBlur, onFocus, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(props.defaultValue || '');
    
    const currentValue = controlledValue !== undefined ? controlledValue : internalValue;
    const hasValue = currentValue !== undefined && currentValue !== null && String(currentValue).length > 0;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (controlledValue === undefined) {
        setInternalValue(e.target.value);
      }
      if (onChange) onChange(e);
    };

    return (
      <div className="relative">
        <Input
          ref={ref}
          id={inputId}
          value={currentValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className={cn("pt-6 peer glassmorphism-panel !bg-transparent focus:!bg-background/50", className)}
          placeholder=" " 
          {...props}
        />
        <Label
          htmlFor={inputId}
          className={cn(
            "absolute left-3 transition-all duration-300 ease-in-out pointer-events-none",
            "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base",
            "peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs",
            (isFocused || hasValue) ? "top-2 -translate-y-0 text-xs" : "top-1/2 -translate-y-1/2 text-base",
            isFocused ? "text-primary" : "text-muted-foreground"
          )}
        >
          {label}
        </Label>
      </div>
    );
  }
);
FloatingLabelInput.displayName = 'FloatingLabelInput';


interface FloatingLabelTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const FloatingLabelTextarea = React.forwardRef<HTMLTextAreaElement, FloatingLabelTextareaProps>(
  ({ label, id, className, value: controlledValue, onChange, onBlur, onFocus, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(props.defaultValue || '');

    const currentValue = controlledValue !== undefined ? controlledValue : internalValue;
    const hasValue = currentValue !== undefined && currentValue !== null && String(currentValue).length > 0;

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (controlledValue === undefined) {
        setInternalValue(e.target.value);
      }
      if (onChange) onChange(e);
    };
    
    return (
      <div className="relative">
        <textarea
          ref={ref}
          id={textareaId}
          value={currentValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className={cn(
            "pt-6 peer w-full min-h-[120px] rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 glassmorphism-panel !bg-transparent focus:!bg-background/50",
            className
          )}
          placeholder=" "
          {...props}
        />
        <Label
          htmlFor={textareaId}
          className={cn(
            "absolute left-3 transition-all duration-300 ease-in-out pointer-events-none",
            "peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base",
            "peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs",
            (isFocused || hasValue) ? "top-2 -translate-y-0 text-xs" : "top-6 -translate-y-1/2 text-base",
            isFocused ? "text-primary" : "text-muted-foreground"
          )}
        >
          {label}
        </Label>
      </div>
    );
  }
);
FloatingLabelTextarea.displayName = 'FloatingLabelTextarea';
