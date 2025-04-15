export default function DashboardCard({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm ${className}`}>
      <h2 className="text-lg font-medium text-gray-900 mb-4">{title}</h2>
      {children}
    </div>
  );
}
