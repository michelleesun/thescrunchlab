import Button from "./Button";

export default function HowToOrder({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-xl2 bg-blush-50 p-6 ring-1 ring-blush-100 ${className}`}>
      <h3 className="font-serif text-lg text-clay-900">How to Order</h3>
      <p className="mt-2 text-sm leading-relaxed text-clay-700">
        To order, send us a message on Instagram or email us.
      </p>
      <p className="mt-1 text-xs text-clay-500">
        We&rsquo;ll confirm details and availability with you.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button
          href="https://instagram.com/thescrunchlab"
          variant="primary"
        >
          DM on Instagram
        </Button>
        <Button href="mailto:thescrunchlab.contact@gmail.com" variant="secondary">
          Email Us
        </Button>
      </div>
    </div>
  );
}
