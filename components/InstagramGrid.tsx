import Image from "next/image";

const posts = [
  "/images/community-friends.jpg",
  "/images/hero.jpg",
  "/images/community-hug.jpg",
  "/images/lifestyle-mirror.jpg",
  "/images/community-group.jpg",
  "/images/lifestyle-hallway.jpg",
];

export default function InstagramGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
      {posts.map((src, index) => (
        <a
          key={src}
          href="https://instagram.com/thescrunchlab"
          target="_blank"
          rel="noreferrer"
          className="group relative aspect-square overflow-hidden rounded-2xl bg-blush-50"
        >
          <Image
            src={src}
            alt="The ScrunchLab on Instagram"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(min-width: 768px) 30vw, 45vw"
            priority={index === 0}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-clay-900/0 transition-colors duration-300 group-hover:bg-clay-900/30">
            <span className="text-sm font-medium text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              @thescrunchlab
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
