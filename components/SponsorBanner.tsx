import Image from "next/image";

export default function SponsorBanner() {
  return (
    <div className="flex flex-col items-center gap-6 rounded-xl2 bg-sage-50 px-8 py-10 text-center ring-1 ring-sage-100 sm:flex-row sm:justify-between sm:text-left">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-500">
          Proudly supported by
        </p>
        <h3 className="mt-2 font-serif text-2xl text-clay-900">
          Plato&rsquo;s Closet Markham
        </h3>
        <p className="mt-2 max-w-md text-sm text-clay-500">
          Our fabric-rescue partner, helping us divert pre-loved textiles from
          landfill and into your next favorite scrunchie.
        </p>
      </div>
      <div className="relative h-16 w-40 shrink-0 sm:h-20 sm:w-52">
        <Image
          src="/images/sponsor-platos-closet.png"
          alt="Plato's Closet Markham logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
