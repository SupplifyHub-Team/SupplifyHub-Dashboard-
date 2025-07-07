import { FC, ReactNode } from "react";
import clsx from "clsx";

type Palette = "pink" | "blue" | "green" | "purple" | "yellow";

interface StatCardProps {
  title: string;
  titleColor?: string;
  value: string | number;
  change: string;
  changeDirection?: "up" | "down";
  icon: ReactNode;
  color?: Palette;
  className?: string;
}

const palette: Record<Palette, { bg: string; border: string; accent: string }> =
  {
    pink: {
      bg: "bg-pink-50",
      border: "border-pink-100",
      accent: "text-pink-500",
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-100",
      accent: "text-blue-500",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-100",
      accent: "text-green-500",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-100",
      accent: "text-purple-500",
    },
    yellow: {
      bg: "bg-yellow-50",
      border: "border-yellow-100",
      accent: "text-yellow-500",
    },
  };

export const StatCard: FC<StatCardProps> = ({
  title,
  value,
  change,
  changeDirection = "up",
  icon,
  color = "pink",
  className,
}) => {
  const { bg, border, accent } = palette[color];
  const arrow = changeDirection === "up" ? "▲" : "▼";
  const changeColor =
    changeDirection === "up" ? "text-green-600" : "text-red-600";

  return (
    <div
      className={clsx(
        "w-full rounded-xl p-4 shadow-sm flex justify-between items-start gap-2 text-sm text-gray-800 border",
        bg,
        border,
        className
      )}
    >
      {/* النصوص */}
      <div className="flex flex-col">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className={clsx("mt-1 text-xs", changeColor)}>
          {arrow} {change}  
        </p>
      </div>

      {/* الأيقونة */}
      <div className={clsx("text-xl", accent)}>{icon}</div>
    </div>
  );
};
