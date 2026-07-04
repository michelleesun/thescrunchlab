type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export default function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl2 bg-white/70 p-8 shadow-card ring-1 ring-clay-100">
      <p className="font-serif text-lg leading-relaxed text-clay-900">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-100 font-serif text-sm text-blush-600">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium text-clay-900">{name}</p>
          <p className="text-xs text-clay-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
