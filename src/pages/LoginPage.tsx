import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { z } from "zod";

import { useForm } from "react-hook-form";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/forms-fields/FormInput";
import { Mail } from "lucide-react";
import FormPassword from "@/components/forms-fields/FormPassword";

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormInput
          control={form.control}
          name="username"
          label="userneam"
          placeholder="enter username"
          Icon={<Mail />}
        />
        <FormPassword
          control={form.control}
          name="username"
          label="userneam"
          placeholder="enter username"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
