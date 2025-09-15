import FormInput from "@/components/forms-fields/FormInput";
import { Button } from "@/components/ui/button";
import { useFieldArray, useFormContext } from "react-hook-form";
import { pricingPlanSchema } from "@/schemas/pricingPlanSchema";
export default function PricingPlanPros() {
  const form = useFormContext<pricingPlanSchema>();

  const {
    fields: prosFields,
    append: appendPros,
    remove: removePros,
  } = useFieldArray({
    control: form.control,
    //@ts-expect-error i know this is a string array
    name: "pros",
  });

  return (
    <div className="space-y-2">
      <label className="block text-white font-medium mb-1">مميزات الخطة</label>

      {prosFields.map((field, index) => (
        <div key={field.id} className="flex items-center gap-2">
          <FormInput<pricingPlanSchema>
            control={form.control}
            name={`pros.${index}`}
            placeholder={`ميزة ${index + 1}`}
          />
          <Button
            type="button"
            variant="destructive"
            onClick={() => removePros(index)}>
            حذف
          </Button>
        </div>
      ))}

      <Button
        type="button"
        variant="default"
        onClick={() => {
          appendPros("ميزة جديدة");
        }}
        className="mt-2">
        + إضافة ميزة
      </Button>
    </div>
  );
}
