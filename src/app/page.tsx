import { client } from "@/sanity/client";

interface Fortune {
  _id: string;
  date: string;
  content: string;
}

async function getFortune() {
  const query = `*[_type == "fortune"] | order(date desc)[0]`;
  const data = await client.fetch<Fortune>(query);
  return data;
}

export default async function Home() {
  const fortune = await getFortune();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-center relative z-10">
      <div className="w-full max-w-3xl">
        {/* メインタイトル */}
        <div className="mb-12">
          <h1 className="mystical-text text-5xl sm:text-6xl md:text-7xl font-bold mb-6 relative">
            今日の運勢
          </h1>
          <p className="mystical-subtitle text-xl sm:text-2xl md:text-3xl font-medium relative">
            あなたの未来を覗いてみませんか？
          </p>
        </div>

        {/* メインボタン - 最も目立つ位置に配置 */}
        <div className="mb-12">
          <button className="main-fortune-button mystical-button rounded-full transition-all duration-300 flex items-center justify-center text-white gap-3 font-bold text-lg sm:text-xl h-14 sm:h-16 px-8 sm:px-10 mx-auto shadow-2xl">
            <span className="text-2xl">🔮</span>
            <span>今日の運勢を見る</span>
            <span className="text-2xl">✨</span>
          </button>
          <p className="text-sm text-gray-400 mt-3 animate-pulse">
            クリックして神秘の扉を開く...
          </p>
        </div>
        
        {/* 占い結果表示エリア */}
        {fortune ? (
          <div className="bg-black/40 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border-2 border-white/30 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-2xl">🌟</span>
                <p className="text-xl sm:text-2xl md:text-3xl text-yellow-300 font-bold">
                  {fortune.date}
                </p>
                <span className="text-2xl">🌟</span>
              </div>
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-2xl border border-white/20 mb-6">
                <p className="text-lg sm:text-xl text-white whitespace-pre-wrap leading-relaxed">
                  {fortune.content}
                </p>
              </div>
              {fortune.author && (
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl">🔮</span>
                  <p className="text-sm text-gray-300 italic">
                    占い師: {fortune.author}
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-black/40 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border-2 border-white/30 mb-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🌙</div>
              <p className="text-xl text-gray-300 mb-2">
                まだ今日の運勢が届いていないようです。
              </p>
              <p className="text-sm text-gray-400">
                しばらくしてから再度お試しください。
              </p>
            </div>
          </div>
        )}

        {/* サブボタン */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button className="mystical-button rounded-full transition-all duration-300 flex items-center justify-center text-white gap-2 font-semibold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto">
            <span className="text-lg">🔮</span>
            <span>新しい運勢を取得</span>
          </button>
          <button className="mystical-button rounded-full transition-all duration-300 flex items-center justify-center text-white gap-2 font-semibold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto">
            <span className="text-lg">📚</span>
            <span>過去の運勢を見る</span>
          </button>
        </div>

        {/* フッター情報 */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400 mb-2">
            ✨ 毎日新しい運勢をお届けします ✨
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
            <span>🔮 水晶占い</span>
            <span>🌟 星座占い</span>
            <span>🌙 月のリズム</span>
          </div>
        </div>
      </div>
    </main>
  );
}