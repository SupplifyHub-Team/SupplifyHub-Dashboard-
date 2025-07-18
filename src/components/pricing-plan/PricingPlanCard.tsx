export default function PricingPlanCard({ plan }: { plan: IPlan }) {
  return (
    <div className=" w-full h-full mx-auto  ">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 h-full">
        <h2 className="text-xl text-gray-800 font-bold mb-4 text-center">
          {plan.planName}
        </h2>
        <p className="text-lg text-gray-800  mb-4 ">{plan.description}</p>
        <p className="text-xl font-semibold text-center mb-4">
          <span className="text-indigo-500">${plan.price}</span> /
          {plan.duration} {"شهر "}
        </p>
        <p></p>

        {/* access buttons */}
        <div className="mt-10 flex justify-evenly items-center gap-4">
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
}
