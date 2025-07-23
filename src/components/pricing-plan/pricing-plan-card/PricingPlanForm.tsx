import FormInput from "@/components/forms-fields/FormInput";
import FormTextArea from "@/components/forms-fields/FormTextArea";
import { Form } from "@/components/ui/form";
import { pricingPlanSchema } from "@/schemas/pricingPlanSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PricingPlanPros from "./PricingPlanPros";
import useUpdatePlan from "@/hooks/plans/useUpdatePlan";
import { Button } from "@/components/ui/button";
import PricingPlanCons from "./PricingPlanCons";

export default function PricingPlanForm({
  plan,
  setIsEditing,
}: {
  plan: IPlan;
  setIsEditing?: (isEditing: boolean) => void;
}) {
  const { mutate } = useUpdatePlan();

  const form = useForm<pricingPlanSchema>({
    resolver: zodResolver(pricingPlanSchema),
    defaultValues: {
      planName: plan?.planName || "",
      description: plan?.description || "",
      price: plan?.price.toString() || "0",
      duration: plan?.duration.toString() || "1",
      pros: plan.pros ? plan.pros : [""],
      cons: plan.cons ? plan.cons : [""],
    },
  });

  const isDirty = form.formState.isDirty;

  function onSubmit(values: pricingPlanSchema) {
    console.log(values);
    mutate({ ...values, id: plan.id });
    if (setIsEditing) setIsEditing(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormInput<pricingPlanSchema>
          name="planName"
          control={form.control}
          placeholder="ادخل اسم الخطة"
          label="اسم الخطة"
        />
        <FormTextArea<pricingPlanSchema>
          name="description"
          control={form.control}
          placeholder="ادخل وصف الخطة"
          label="وصف الخطة"
        />
        <PricingPlanPros />
        <PricingPlanCons />

        <div className="grid grid-cols-2 gap-4">
          <FormInput<pricingPlanSchema>
            name="price"
            control={form.control}
            placeholder="ادخل السعر"
            label="السعر"
            type="number"
          />
          <FormInput<pricingPlanSchema>
            name="duration"
            control={form.control}
            placeholder="ادخل المدة بالأشهر"
            label="المدة (شهر)"
            type="number"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button disabled={!isDirty} type="submit" className="">
            {"حفظ التغييرات"}
          </Button>
          <Button
            type="button"
            onClick={() => setIsEditing?.(false)}
            className=""
            variant={"outline"}>
            الغاء
          </Button>
        </div>
      </form>
    </Form>
  );
}
