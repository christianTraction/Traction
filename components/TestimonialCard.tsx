interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export default function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <p className="text-slate-200 text-lg leading-relaxed mb-4">&ldquo;{quote}&rdquo;</p>
      <div className="pt-4 border-t border-slate-800">
        <p className="font-semibold text-slate-50">{name}</p>
        <p className="text-sm text-slate-400">{role}</p>
      </div>
    </div>
  );
}

