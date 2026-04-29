export const dynamic = "force-dynamic";

const CHANNEL_ID = "UCy7UQNSLZVLJaiFkvMw7ufA";

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=5&order=date&type=video&key=${apiKey}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return Response.json({ status: res.status, data });
  } catch (err) {
    return Response.json({ error: String(err) }, { status: 500 });
  }
}
