import { Check, X } from "lucide-react";

interface PricingPlanCardProps {
  title: string;
  price: string;
  duration: string;
  advantages: string[];
  disadvantages: string[];
}

export const PricingPlanCard: React.FC<PricingPlanCardProps> = ({
  title,
  price,
  duration,
  advantages,
  disadvantages,
}) => {
  return (
    <div className="py-10 w-full h-full mx-auto px-4">
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="text-xl text-gray-800 font-bold mb-4 text-center">
          {title}
        </h2>
        <p className="text-xl font-semibold text-center mb-4">
          <span className="text-indigo-500">${price}</span> / {duration}
        </p>
        <ul className="list-disc list-inside leading-10 tracking-tight">
          {advantages.map((advantage, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <Check size={12} color="#fff" fontWeight={600} />
              </span>
              {advantage}
            </li>
          ))}
        </ul>
        <ul className="list-disc list-inside leading-10 tracking-tight">
          {disadvantages.map((disadvantage, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="grid size-5 place-content-center rounded-full bg-gray-200 text-sm text-gray-600">
                <X size={14} fontWeight={600} color="#666" />
              </span>
              {disadvantage}
            </li>
          ))}
        </ul>

        {/* access buttons */}
        <div className="mt-10 flex justify-evenly items-center">
          {/* edit button */}
          <button className="px-4 py-2 cursor-pointer bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            تعديل الخطة
          </button>
          {/* delete button */}
          <button className="ml-4 px-4 py-2 cursor-pointer bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
            حذف الخطة
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlanCard;
