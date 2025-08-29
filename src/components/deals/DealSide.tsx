import {
  Mail,
  Phone,
  CalendarDays,
  ClipboardCopy,
  CircleDollarSign,
  Building2,
} from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

interface DealSideProps {
  title: string;
  details: IDealDetails;
  tone?: "supplier" | "client";
}

export default function DealSide({
  title,
  details,
  tone = "supplier",
}: DealSideProps) {
  const isSupplier = tone === "supplier";
  const borderColor = isSupplier ? "border-sky-500" : "border-emerald-500";
  const headerColor = isSupplier ? "text-sky-500" : "text-emerald-500";

  return (
    <div
      className={`rounded-xl border-2 ${borderColor} bg-gray-800 p-6 shadow-2xl`}
    >
      <h3 className={`font-bold text-xl mb-4 ${headerColor}`}>{title}</h3>

      <div className="space-y-4 text-sm text-gray-300">
        <Row
          icon={<Building2 size={18} />}
          label="الشركة"
          value={details.companyName}
          isBold
        />
        <Row
          icon={<Mail size={18} />}
          label="البريد الإلكتروني"
          value={details.companyEmail}
          copyable
        />
        <Row
          icon={<Phone size={18} />}
          label="رقم الهاتف"
          value={details.companyPhone}
          copyable
        />
        {/* <Row
          icon={<Package size={18} />}
          label="الكمية"
          value={`${details.quantity}`}
        /> */}
        <Row
          icon={<CircleDollarSign size={18} />}
          label="السعر"
          value={`${details.price} `}
        />
        <Row
          icon={<CalendarDays size={18} />}
          label="تاريخ الاتفاق"
          value={format(new Date(details.dealDoneAt), "yyyy-MM-dd")}
        />
        <Row
          icon={<CalendarDays size={18} />}
          label="تاريخ التسليم"
          value={format(new Date(details.dateOfDelivered), "yyyy-MM-dd")}
        />
      </div>
    </div>
  );
}

interface RowProps {
  label?: string;
  value: string | number;
  icon?: React.ReactNode;
  copyable?: boolean;
  isBold?: boolean;
}

function Row({ label, value, icon, copyable, isBold }: RowProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(String(value));
    toast.success("تم النسخ بنجاح!");
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-gray-700 pb-2">
      <div className="flex items-center gap-1.5 overflow-hidden">
        {icon && <span className="text-gray-500">{icon}</span>}
        <span
          className={`flex-shrink-0 text-gray-400 ${
            isBold ? "font-semibold" : ""
          }`}
        >
          {label}
        </span>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto">
        <span className="truncate flex-grow text-white text-sm">{value}</span>
        {copyable && (
          <button
            onClick={handleCopy}
            className="text-gray-500 hover:text-white transition-colors duration-200"
          >
            <ClipboardCopy size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
