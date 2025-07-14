import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/forms-fields/FormInput";
import { Mail } from "lucide-react";
import FormPassword from "@/components/forms-fields/FormPassword";
import { loginSchema } from "@/schemas/loginSchema";
import useLogin from "@/hooks/useLogin";
import Spinner from "@/components/Spinner";

export default function LoginPage() {
  // form hook
  const form = useForm<loginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const { isValid } = form.formState;
  const { mutate, isPending } = useLogin();
  function onSubmit(values: loginSchema) {
    mutate(values);
  }
  return (
    <Form {...form}>
      <div className="flex items-center justify-center min-h-screen bg-accent-foreground">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md bg-[#1d1f2b]  border border-gray-700 rounded-xl px-6 py-10 text-center shadow-lg"
        >
          <div className="flex justify-center mb-6">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-20 h-20 rounded-full"
            />
          </div>
          <h2 className="text-white text-2xl font-semibold">مرحبًا بعودتك</h2>
          <p className="text-gray-400 text-sm mt-3">
            قم بتسجيل الدخول إلى حساب لوحة إدارة B2B الخاصة بك.
          </p>

          <FormInput<loginSchema>
            control={form.control}
            name="email"
            label="البريد الإلكتروني"
            placeholder="ادخل البريد الإلكتروني"
            Icon={
              <Mail className="size-4 text-gray-400 absolute inset-y-9 end-3 flex items-center justify-center" />
            }
            labelClassName="mb-1 text-white"
            className="mt-6 bg-[#2c2f3a] border border-gray-600 text-white placeholder:text-gray-400 rounded-full h-11 pl-10 pr-4"
          />

          <FormPassword<loginSchema>
            control={form.control}
            name="password"
            label="كلمة المرور"
            placeholder="ادخل كلمة المرور"
            className="mt-4 bg-[#2c2f3a] border border-gray-600 text-white placeholder:text-gray-400 rounded-full h-11 pl-10 pr-4"
          />

          <Button
            disabled={isPending}
            size="lg"
            type="submit"
            className={`w-full mt-6 h-11 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-colors ${
              !isValid
                ? "opacity-30 cursor-not-allowed hover:bg-indigo-500"
                : ""
            }`}
          >
            {isPending ? <Spinner /> : "تسجيل الدخول"}
          </Button>
        </form>
      </div>
    </Form>
  );
}
