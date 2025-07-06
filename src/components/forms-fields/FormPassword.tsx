import { useState, type InputHTMLAttributes } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import FormInput from "./FormInput";
import { Control, FieldValues, Path } from "react-hook-form";

interface FormPasswordProps<TFormValues extends FieldValues>
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "name" | "defaultValue" | "type"
  > {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  label?: string;
  description?: string;
}

export default function FormPassword<TFormValues extends FieldValues>({
  control,
  name,
  label,
  description,
  className,
  ...inputProps
}: FormPasswordProps<TFormValues>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormInput
      control={control}
      name={name}
      label={label}
      description={description}
      type={showPassword ? "text" : "password"}
      className={className}
      {...inputProps}
      Icon={
        <div className="absolute inset-y-9 end-1 flex items-center justify-center">
          <Button
            variant="link"
            className="text-gray-400 p-0 hover:text-white "
            size="icon"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Eye className="w-4 h-4" />
            ) : (
              <EyeOff className="w-4 h-4" />
            )}
          </Button>
        </div>
      }
    />
  );
}
