import React, { type InputHTMLAttributes } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";
import { type Control, type FieldValues, type Path } from "react-hook-form";
import { Input } from "../ui/input";

interface FormInputProps<TFormValues extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "defaultValue"> {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  label?: string;
  description?: string;
  Icon?: React.ReactNode;
  labelClassName?: string;
  defaultValue?: string;
  isEditing?: boolean;
}

export default function FormInput<TFormValues extends FieldValues>({
  control,
  label,
  name,
  Icon,
  description,
  className,
  labelClassName,
  isEditing = true, 
  ...inputProps
}: FormInputProps<TFormValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel htmlFor={name} className={cn("sr-only", labelClassName)}>
              {label}
            </FormLabel>
          )}

          <FormControl>
            {isEditing ? (
              <div className="relative h-fit">
                {Icon && <div>{Icon}</div>}
                <Input
                  id={name}
                  {...field}
                  {...inputProps}
                  className={cn("h-11 py-3 pr-4", Icon && "pl-10", className)}
                />
              </div>
            ) : (
              <p className="text-sm text-gray-800 py-2 px-1 min-h-[2.75rem] border rounded-md bg-gray-50">
                {field.value || "-"}
              </p>
            )}
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
