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
  const form = useForm<loginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useLogin();
  function onSubmit(values: loginSchema) {
    mutate(values);
  }
  return (
    <div className="flex   items-center justify-center min-h-screen bg-black">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" bg-card w-[clamp(300px,93vw,600px)] shadow-2xl border-gray-700 rounded-xl px-6 py-10 text-center  space-y-6">
          <div className="flex flex-col justify-center items-center gap-4 mb-6">
            <img src="/Logo.webp" alt="Logo" className=" " />
            <h2 className="text-white text-2xl font-semibold">مرحبًا بعودتك</h2>
            <p className="text-gray-400 text-sm ">
              قم بتسجيل الدخول إلى حساب لوحة إدارة SuppliFy الخاصة بك.
            </p>
          </div>

          <FormInput<loginSchema>
            control={form.control}
            name="email"
            label="البريد الإلكتروني"
            placeholder="ادخل البريد الإلكتروني"
            Icon={<Mail className="size-4 text-gray-400" />}
            labelClassName="mb-1 text-white"
            className=" bg-[#2c2f3a] border border-gray-600 text-white placeholder:text-gray-400 "
          />

          <FormPassword<loginSchema>
            control={form.control}
            name="password"
            label="كلمة المرور"
            placeholder="ادخل كلمة المرور"
            labelClassName="mb-1 text-white"
            className=" bg-[#2c2f3a] border border-gray-600 text-white placeholder:text-gray-400"
          />

          <Button
            disabled={isPending}
            size="lg"
            type="submit"
            className={`w-full mt-6 h-11 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-colors`}>
            {isPending ? <Spinner /> : "تسجيل الدخول"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
