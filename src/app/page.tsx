import { client } from "@/sanity/client";

interface Fortune {
  _id: string;
  date: string;
  content: string;
  author?: string;
}

async function getFortune() {
  const query = `*[_type == "fortune"] | order(date desc)[0]`;
  return await client.fetch<Fortune>(query);
}

export default async function Home() {
  const fortune = await getFortune();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="max-w-4xl mx-auto w-full text-center">

        <h1 className="mystical-text text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          今日の運勢
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-12">
          あなたの未来を覗いてみませんか？
        </p>

        <div className="mb-12 flex justify-center">
          <button className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-white font-bold text-xl shadow-lg hover:scale-105 transition">
            🔮 今日の運勢を見る ✨
          </button>
        </div>

        {fortune ? (
          <div className="bg-black/40 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-2 border-white/30 mb-8 text-center">
            <p className="text-2xl text-yellow-300 font-bold mb-6">🌟 {fortune.date} 🌟</p>
            <p className="text-lg sm:text-xl text-white leading-relaxed whitespace-pre-wrap mb-6">
              {fortune.content}
            </p>
            {fortune.author && (
              <p className="text-sm text-gray-300 italic">🔮 占い師: {fortune.author}</p>
            )}
          </div>
        ) : (
          <div className="bg-black/40 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-2 border-white/30 mb-8 text-center">
            <p className="text-6xl mb-4">🌙</p>
            <p className="text-xl text-gray-300 mb-2">まだ今日の運勢が届いていないようです。</p>
            <p className="text-sm text-gray-400">しばらくしてから再度お試しください。</p>
          </div>
        )}

        <footer className="mt-12 text-center text-gray-400 text-sm">
          ✨ 毎日新しい運勢をお届けします ✨
        </footer>
      </div>
    </main>
  );
}
