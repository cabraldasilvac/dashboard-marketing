export default function MetricCard({
  title,
  value,
  change,
  icon,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}) {
  const isPositive = change.startsWith("+");

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-xs sm:text-sm font-medium text-gray-500">
          {title}
        </h3>
        <div className="p-1 sm:p-2 rounded-lg bg-gray-50">{icon}</div>
      </div>
      <div className="mt-2 sm:mt-4">
        <p className="text-xl sm:text-2xl font-semibold text-gray-900">
          {value}
        </p>
        <p
          className={`mt-1 text-xs sm:text-sm ${isPositive ? "text-green-600" : "text-red-600"}`}
        >
          {change} vs último período
        </p>
      </div>
    </div>
  );
}
