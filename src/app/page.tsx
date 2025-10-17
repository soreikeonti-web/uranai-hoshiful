import { client } from "@/sanity/client";

interface Fortune {
  _id: string;
  date: string;
  content: string;
  author?: string;
}

async function getFortune(): Promise<Fortune | null> {
  const query = `*[_type == "fortune"] | order(date desc)[0]`;
  return await client.fetch<Fortune | null>(query);
}

export default async function Home() {
  const fortune = await getFortune();

  return (
    <>
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
        今日の運勢
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl text-white mb-12">
        あなたの未来を覗いてみませんか？
      </p>

      <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 mb-12">
        🔮 今日の運勢を見る ✨
      </button>

      {fortune ? (
        <div className="bg-black/40 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border-2 border-white/30 mb-8 w-full max-w-2xl mx-auto">
          <div className="text-2xl text-yellow-300 font-bold mb-6">
            🌟 {fortune.date} 🌟
          </div>
          <p className="text-lg sm:text-xl text-white whitespace-pre-wrap leading-relaxed mb-6">
            {fortune.content}
          </p>
          {fortune.author && (
            <p className="text-sm text-gray-300 italic">占い師: {fortune.author}</p>
          )}
        </div>
      ) : (
        <div className="bg-black/40 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border-2 border-white/30 mb-8 w-full max-w-2xl mx-auto">
          <p className="text-xl text-gray-300 mb-2">
            まだ今日の運勢が届いていないようです。
          </p>
          <p className="text-sm text-gray-400">
            しばらくしてから再度お試しください。
          </p>
        </div>
      )}

      <footer className="mt-12 text-center text-sm text-gray-400">
        ✨ 毎日新しい運勢をお届けします ✨
      </footer>
    </>
  );
}
