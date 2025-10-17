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
    <main className="flex flex-col items-center justify-center min-h-screen text-center py-12">
      <div className="w-full max-w-4xl mx-auto">

        {/* タイトル */}
        <h1 className="mystical-text text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          今日の運勢
        </h1>
        <p className="mystical-subtitle text-xl sm:text-2xl md:text-3xl font-medium mb-12">
          あなたの未来を覗いてみませんか？
        </p>

        {/* メインボタン */}
        <div className="mb-12 flex justify-center">
          <button className="main-fortune-button mystical-button rounded-full flex items-center gap-3 font-bold text-lg sm:text-xl h-14 sm:h-16 px-8 sm:px-10 shadow-2xl">
            <span className="text-2xl">🔮</span>
            <span>今日の運勢を見る</span>
            <span className="text-2xl">✨</span>
          </button>
        </div>

        {/* 占い結果 */}
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
            <p className="text-xl text-gray-300 mb-2">
              まだ今日の運勢が届いていないようです。
            </p>
            <p className="text-sm text-gray-400">しばらくしてから再度お試しください。</p>
          </div>
        )}

        {/* サブボタン */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button className="mystical-button rounded-full flex items-center justify-center gap-2 font-semibold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto">
            <span className="text-lg">🔮</span> 新しい運勢を取得
          </button>
          <button className="mystical-button rounded-full flex items-center justify-center gap-2 font-semibold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto">
            <span className="text-lg">📚</span> 過去の運勢を見る
          </button>
        </div>

        {/* フッター */}
        <footer className="mt-12 text-center">
          <p className="text-sm text-gray-400 mb-2">✨ 毎日新しい運勢をお届けします ✨</p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
            <span>🔮 水晶占い</span>
            <span>🌟 星座占い</span>
            <span>🌙 月のリズム</span>
          </div>
        </footer>

      </div>
    </main>
  );
}
