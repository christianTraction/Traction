interface FeatureItemProps {
  title: string;
  body: string;
}

export default function FeatureItem({ title, body }: FeatureItemProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-slate-50">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{body}</p>
    </div>
  );
}

