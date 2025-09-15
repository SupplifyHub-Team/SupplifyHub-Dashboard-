import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormMessage,
  FormItem,
} from "../ui/form";
import { Button } from "../ui/button";
import Spinner from "../ui/Spinner";
import FormInput from "../forms-fields/FormInput";
import { Input } from "../ui/input";
import { useAddEvent } from "@/hooks/advs/useAddEvent";
import { addEventSchema, AddEventSchemaType } from "@/schemas/eventSchema";

interface AddEventFormProps {
  onCloseDialog: () => void;
}

export default function AddEventForm({ onCloseDialog }: AddEventFormProps) {
  const { mutate: addEvent, isPending: isAdding } = useAddEvent();

  const form = useForm<AddEventSchemaType>({
    resolver: zodResolver(addEventSchema),
    defaultValues: {
      title: "",
      endDate: "",
      targetUrl: "",
    },
  });

  function onSubmit(data: AddEventSchemaType) {
    const formData = new FormData();
    formData.append("Title", data.title);
    formData.append("EndDate", new Date(data.endDate).toISOString());
    formData.append("ImageFile", data.imageFile);
    if (data.targetUrl) {
      formData.append("TargetUrl", data.targetUrl);
    }

    addEvent(formData, {
      onSuccess: () => {
        form.reset();
        onCloseDialog();
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 items-center justify-between w-full flex-wrap"
      >
        <div className="flex items-center gap-3 flex-wrap">
          <FormInput
            control={form.control}
            name="title"
            type="text"
            placeholder="عنوان الإعلان"
            className="min-w-44"
          />

          <FormInput
            control={form.control}
            name="endDate"
            type="date"
            placeholder="تاريخ النهاية"
            className="min-w-44"
          />

          <FormField
            control={form.control}
            name="imageFile"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file);
                    }}
                  />
                </FormControl>
                <FormMessage /> 
              </FormItem>
            )}
          />

          <FormInput
            control={form.control}
            name="targetUrl"
            type="url"
            placeholder="الرابط المستهدف (اختياري)"
            className="min-w-44"
          />
        </div>
        <Button type="submit" disabled={!form.formState.isDirty || isAdding}>
          {isAdding ? <Spinner /> : "إضافة"}
        </Button>
      </form>
    </Form>
  );
}
