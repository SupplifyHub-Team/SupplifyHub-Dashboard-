export function jsonToFormData(
  data: Record<string, any>,
  formData: FormData = new FormData(),
  parentKey?: string
): FormData {
  Object.entries(data).forEach(([key, value]) => {
    const formKey = parentKey ? `${parentKey}[${key}]` : key;

    if ((value === null && formKey !== "image") || value === undefined) {
      return;
    }
    if (formKey === "image" && value === null) {
      formData.append(formKey, value);
      return;
    } else if (value instanceof File || value instanceof Blob) {
      formData.append(formKey, value);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        jsonToFormData({ [index]: item }, formData, formKey);
      });
    } else if (typeof value === "object") {
      jsonToFormData(value, formData, formKey);
    } else {
      formData.append(formKey, String(value));
    }
  });

  return formData;
}
