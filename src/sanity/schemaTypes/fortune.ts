import { defineType, defineField } from "sanity";

export default defineType({
  name: "fortune",
  title: "今日の占い",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "日付",
      type: "date",
      description: "占いの日付（自動生成されます）",
    }),
    defineField({
      name: "sign",
      title: "星座",
      type: "string",
      options: {
        list: [
          "おひつじ座", "おうし座", "ふたご座", "かに座", "しし座", "おとめ座",
          "てんびん座", "さそり座", "いて座", "やぎ座", "みずがめ座", "うお座",
        ],
      },
    }),
    defineField({
      name: "content",
      title: "占いの内容",
      type: "text",
      description: "AIが生成した運勢の本文",
    }),
    defineField({
      name: "affirmation",
      title: "ポジティブアファメーション",
      type: "text",
      description: "1日の前向きな言葉",
    }),
    defineField({
      name: "quote",
      title: "偉人の言葉",
      type: "text",
      description: "今日のための名言",
    }),
    defineField({
      name: "rank",
      title: "今日の運勢ランキング",
      type: "number",
      description: "12星座中の順位（1〜12）",
    }),
    defineField({
      name: "luckyItem",
      title: "ラッキーアイテム",
      type: "string",
    }),
    defineField({
      name: "author",
      title: "占い作成者",
      type: "string",
      initialValue: "AI占い師ホシフル",
    }),
  ],
});
