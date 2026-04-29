export const dynamic = "force-dynamic";

const CHANNEL_ID = "UCy7UQNSLZVLJaiFkvMw7ufA";

export async function GET() {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
      { cache: "no-store" }
    );
    const xml = await res.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];

    const parsed = entries.slice(0, 5).map((entry) => {
      const content = entry[1];
      const videoId = content.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1];
      const title = content.match(/<title>(.*?)<\/title>/)?.[1];
      const link = content.match(/<link[^>]+href="([^"]+)"/)?.[1] ?? "";
      const isShort = link.includes("/shorts/");
      return { videoId, title, link, isShort };
    });

    return Response.json({
      status: res.status,
      entryCount: entries.length,
      parsed,
      xmlSnippet: xml.slice(0, 500),
    });
  } catch (err) {
    return Response.json({ error: String(err) }, { status: 500 });
  }
}
