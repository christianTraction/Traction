interface MetricProps {
  label: string;
  value: string;
}

export default function Metric({ label, value }: MetricProps) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-emerald-400 mb-2">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}

