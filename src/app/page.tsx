import Image from "next/image";
import Link from "next/link";

const featuredEpisode = {
  label: "Featured",
  title: "What Have We Wrought?",
  videoId: "f5X202BrAio",
  url: "https://www.youtube.com/watch?v=f5X202BrAio",
};

const recentEpisodes = [
  { number: 10, title: "Me vs. We", url: "https://www.youtube.com/@asynchronypodcast" },
  { number: 9, title: "By Any Other Name", url: "https://www.youtube.com/@asynchronypodcast" },
  { number: 8, title: "Are You a Fascist?", url: "https://www.youtube.com/@asynchronypodcast" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <Link href="https://www.asynchronypodcast.com">
          <Image
            src="/logo_black.png"
            alt="Asynchrony logo"
            width={140}
            height={48}
            className="rounded-xl"
            priority
          />
        </Link>
        <div className="flex items-center gap-3 text-sm font-medium text-zinc-400">
          <Link href="#episodes" className="hover:text-white transition-colors px-2">Episodes</Link>
          <Link href="#about" className="hover:text-white transition-colors px-2">About</Link>
          <Link
            href="https://www.youtube.com/@asynchronypodcast"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-500 transition-colors text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            YouTube
          </Link>
          <Link
            href="https://podcasts.apple.com/us/podcast/asynchrony/id1870719257"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#872EC4] hover:bg-[#9b3de0] transition-colors text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 1 1 0 15A7.5 7.5 0 0 1 12 4.5zm0 1.5a6 6 0 1 0 0 12A6 6 0 0 0 12 6zm0 1.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
            </svg>
            Apple Podcasts
          </Link>
          <Link
            href="https://open.spotify.com/show/3ROTAHhiQoW1JI9gz2Zzvh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] transition-colors text-black px-4 py-2 rounded-full text-sm font-semibold"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Spotify
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
        <div className="flex flex-col md:flex-row gap-6">

          {/* Featured video */}
          <Link
            href={featuredEpisode.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-[2] rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all bg-white/5"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={`https://img.youtube.com/vi/${featuredEpisode.videoId}/maxresdefault.jpg`}
                alt={featuredEpisode.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/60 flex items-center justify-center backdrop-blur-sm group-hover:bg-red-600/80 transition-colors">
                  <svg className="w-6 h-6 text-white translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-5">
              <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">{featuredEpisode.label}</span>
              <h3 className="mt-1 text-lg font-bold text-white group-hover:text-zinc-100">{featuredEpisode.title}</h3>
            </div>
          </Link>

          {/* Recent episodes list */}
          <div className="flex-1 flex flex-col gap-3">
            {recentEpisodes.map((ep) => (
              <Link
                key={ep.number}
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 hover:border-white/25 transition-all bg-white/5 hover:bg-white/8 p-5"
              >
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/40 transition-colors">
                  <svg className="w-4 h-4 text-red-400 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-zinc-500 font-mono">EP. {String(ep.number).padStart(2, "0")}</span>
                  <h3 className="font-semibold text-white group-hover:text-zinc-100 leading-tight">{ep.title}</h3>
                </div>
              </Link>
            ))}
            <Link
              href="https://www.youtube.com/@asynchronypodcast"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm text-zinc-400 hover:text-white transition-colors underline underline-offset-4 text-center pt-2"
            >
              View all episodes →
            </Link>
          </div>

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
