import Image from "next/image";
import Link from "next/link";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

function EmailIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-sage-400">
      <path
        d="M5 19C5 12 9 5 19 5C19 15 12 19 5 19Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M5 19C9 15 12 12 17 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function NeedleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blush-400">
      <path d="M4 20L15 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="17.5" cy="6.5" r="2.3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 20C4 20 6 20.5 7.5 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-clay-100 bg-clay-50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-6">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="The ScrunchLab logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-serif text-xl text-clay-900">The ScrunchLab</span>
            </div>
            <p className="mt-4 max-w-xs font-serif text-lg italic leading-snug text-clay-500">
              &ldquo;Let&rsquo;s stitch the change together; it starts with yours.&rdquo;
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base text-clay-900">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-clay-500">
              <li><Link href="/" className="hover:text-clay-900">Home</Link></li>
              <li><Link href="/shop" className="hover:text-clay-900">Shop</Link></li>
              <li><Link href="/about" className="hover:text-clay-900">About</Link></li>
              <li><Link href="/learn" className="hover:text-clay-900">Learn</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base text-clay-900">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-clay-500">
              <li>
                <a
                  href="https://instagram.com/thescrunchlab"
                  className="flex min-w-0 items-center gap-2.5 hover:text-clay-900"
                >
                  <InstagramIcon />
                  <span className="min-w-0 break-words">@thescrunchlab</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:thescrunchlab.contact@gmail.com"
                  className="flex min-w-0 items-start gap-2.5 hover:text-clay-900"
                >
                  <EmailIcon className="mt-0.5" />
                  <span className="min-w-0 break-words">thescrunchlab.contact@gmail.com</span>
                </a>
              </li>
              <li><Link href="/contact" className="hover:text-clay-900">Get in touch</Link></li>
            </ul>

            <div className="mt-5 flex items-center gap-3 border-t border-clay-100 pt-5">
              <Image
                src="/images/logo.png"
                alt="The ScrunchLab badge"
                width={28}
                height={28}
                className="rounded-full opacity-90"
              />
              <NeedleIcon />
              <LeafIcon />
            </div>
          </div>

          <div>
            <h3 className="font-serif text-base text-clay-900">Our Mission</h3>
            <p className="mt-4 text-sm leading-relaxed text-clay-500">
              Teaching sewing, reducing textile waste, and making sustainability
              accessible, one scrunchie at a time.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-clay-100 pt-8 text-xs text-clay-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} The ScrunchLab. All rights reserved.</p>
          <p>Made from rescued fabric, with love.</p>
        </div>
      </div>
    </footer>
  );
}
