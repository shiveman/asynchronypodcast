import Image from "next/image";
import Link from "next/link";

const episodes = [
  { number: 10, title: "Me vs. We" },
  { number: 9, title: "By Any Other Name" },
  { number: 8, title: "Are You a Fascist?" },
  { number: 7, title: "What Have We Wrought?" },
  { number: 6, title: "I'm Good" },
  { number: 5, title: "The Identity" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <Image
          src="/logo_black.png"
          alt="Asynchrony logo"
          width={140}
          height={48}
          className="rounded-xl"
          priority
        />
        <div className="flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="#episodes" className="hover:text-white transition-colors">Episodes</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link
            href="https://www.youtube.com/@asynchronypodcast"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-500 transition-colors text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch on YouTube
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative w-full aspect-[3/1] max-h-[420px]">
          <Image
            src="/banner.png"
            alt="Asynchrony Podcast banner"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0d14]/40 to-[#0a0d14]" />
        </div>
        <div className="relative -mt-20 px-8 pb-16 text-center">
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A bleeding-heart liberal and a three-time Trump voter sit down together —
            not to fight, but to <span className="text-white font-medium">find out where they diverge and where they connect</span>.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="https://www.youtube.com/@asynchronypodcast"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 transition-colors text-white px-6 py-3 rounded-full font-semibold"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch Now
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 transition-colors text-white px-6 py-3 rounded-full font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center gap-0 px-8 mb-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50" />
        <div className="mx-4 w-2 h-2 rounded-full bg-white/30" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
      </div>

      {/* Episodes */}
      <section id="episodes" className="px-8 pb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight mb-8">Latest Episodes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {episodes.map((ep) => (
            <Link
              key={ep.number}
              href="https://www.youtube.com/@asynchronypodcast"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-end rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all bg-white/5 hover:bg-white/8 p-6 min-h-[140px]"
            >
              <div className="absolute top-4 right-4">
                <span className="text-xs text-zinc-500 font-mono">EP. {String(ep.number).padStart(2, "0")}</span>
              </div>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-red-400 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-white group-hover:text-zinc-100 leading-tight">{ep.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="https://www.youtube.com/@asynchronypodcast"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-white transition-colors underline underline-offset-4"
          >
            View all episodes on YouTube →
          </Link>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 pb-24 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-bold tracking-tight mb-4">About the Show</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Asynchrony is a podcast featuring regular discussions between a bleeding-heart liberal
              and a three-time Trump voter. We explore where our perspectives diverge and where they come together.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              If you are expecting name calling and acrimony, this might not be for you. If you want to better
              understand the divisions causing so much stress in our world today, you might feel right at home.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Politics", "Dialogue", "Liberal", "Conservative", "United States"].map((tag) => (
                <span key={tag} className="text-xs bg-white/10 text-zinc-300 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 min-w-[180px]">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-600/10 p-5 text-center">
              <span className="text-3xl font-bold text-blue-400">48</span>
              <span className="text-xs text-zinc-500 mt-1">Episodes</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-red-600/10 p-5 text-center">
              <span className="text-3xl font-bold text-red-400">231</span>
              <span className="text-xs text-zinc-500 mt-1">Subscribers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-8 py-8 text-center text-sm text-zinc-600">
        <p>© {new Date().getFullYear()} Asynchrony Podcast · <Link href="https://www.youtube.com/@asynchronypodcast" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">YouTube</Link></p>
      </footer>
    </div>
  );
}
