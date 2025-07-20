import FormInput from "@/components/forms-fields/FormInput";
import { Button } from "@/components/ui/button";
import { useFieldArray, useFormContext } from "react-hook-form";
import { pricingPlanSchema } from "@/schemas/pricingPlanSchema";
export default function PricingPlanCons() {
  const form = useFormContext<pricingPlanSchema>();

  const {
    fields: ponsFields,
    append: appendPons,
    remove: removePons,
  } = useFieldArray({
    control: form.control,
    //@ts-expect-error i know this is a string array
    name: "pons",
  });

  return (
    <div className="space-y-2">
      <label className="block font-medium mb-1">عيوب الخطة الخطة</label>

      {ponsFields.map((field, index) => (
        <div key={field.id} className="flex items-center gap-2">
          <FormInput<pricingPlanSchema>
            control={form.control}
            name={`cons.${index}`}
            placeholder={`عيب ${index + 1}`}
          />
          <Button
            type="button"
            variant="destructive"
            onClick={() => removePons(index)}>
            حذف
          </Button>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={() => {
          console.log("click");
          appendPons("عيب جديد");
        }}
        className="mt-2">
        + إضافة عيب
      </Button>
    </div>
  );
}
