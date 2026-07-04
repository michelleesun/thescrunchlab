export type Product = {
  slug: string;
  name: string;
  price: number;
  currency: string;
  tagline: string;
  description: string;
  sustainabilityNote: string;
  image: string;
  gallery: string[];
  bullets: string[];
  faqs: { question: string; answer: string }[];
};

export const products: Product[] = [
  {
    slug: "sustainable-scrunchie",
    name: "Sustainable Scrunchie",
    price: 5.5,
    currency: "CAD",
    tagline: "One-of-a-kind, made from rescued fabric.",
    description:
      "Every Sustainable Scrunchie starts as an offcut, a remnant, or a donated piece of fabric that would have otherwise ended up in a landfill. We wash, press, cut, and sew each one by hand in small batches, which means no two scrunchies are ever quite the same. Soft on your hair, easy on the planet.",
    sustainabilityNote:
      "This scrunchie was hand-sewn from rescued textile fabric, diverting material from landfill and giving it a second life you can wear every day.",
    image: "/images/product-scrunchie.jpg",
    gallery: [
      "/images/product-scrunchie.jpg",
      "/images/community-hug.jpg",
      "/images/lifestyle-mirror.jpg",
    ],
    bullets: [
      "Made from 100% rescued fabric",
      "Hand-sewn in small batches",
      "Gentle on hair, no creases",
      "Every piece is one-of-a-kind",
    ],
    faqs: [
      {
        question: "Where does the fabric come from?",
        answer:
          "We source deadstock and donated fabric from local partners, including thrifted textiles, so nothing new needs to be produced for your scrunchie.",
      },
      {
        question: "Will I get the exact scrunchie shown in photos?",
        answer:
          "Because our fabric supply changes constantly, prints and colors vary. You'll receive a scrunchie made in the same spirit, but it may look slightly different, and that's the whole point.",
      },
      {
        question: "How do I care for it?",
        answer:
          "Hand wash cold and lay flat to dry to keep the fabric and elastic in great shape for years of wear.",
      },
    ],
  },
  {
    slug: "diy-scrunchie-kit",
    name: "DIY Scrunchie Kit",
    price: 7.0,
    currency: "CAD",
    tagline: "Learn to sew your very own scrunchie, start to finish.",
    description:
      "Our DIY Scrunchie Kit comes with everything you need to make your first (or fiftieth) scrunchie: pre-cut rescued fabric, elastic, a needle, thread, and step-by-step instructions. Pair it with our private tutorial video and you'll have a finished scrunchie in under 30 minutes, even if you've never touched a needle before.",
    sustainabilityNote:
      "Each kit uses offcut and rescued fabric paired with a video tutorial, so you're not just reducing waste. You're learning a skill that helps you keep reducing it long after the kit is gone.",
    image: "/images/product-diy-kit.jpg",
    gallery: [
      "/images/product-diy-kit.jpg",
      "/images/lifestyle-hallway.jpg",
      "/images/community-friends.jpg",
    ],
    bullets: [
      "Pre-cut rescued fabric + elastic + needle + thread",
      "Private step-by-step tutorial video included",
      "No sewing experience required",
      "Finish your first scrunchie in under 30 minutes",
    ],
    faqs: [
      {
        question: "Do I need my own sewing machine?",
        answer:
          "Nope. Every kit is designed to be sewn entirely by hand, so all you need is what's inside the box.",
      },
      {
        question: "Is the tutorial video really included?",
        answer:
          "Yes! Every kit comes with access to a private video walking you through each stitch, at your own pace.",
      },
      {
        question: "Can beginners really finish this?",
        answer:
          "Absolutely. The kit was designed for first-time sewists. If you can hold a needle, you can finish a scrunchie.",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
