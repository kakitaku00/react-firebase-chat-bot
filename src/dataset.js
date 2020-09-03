const defaultDataset = {
  init: {
    answers: [
      { content: "仕事を依頼したい", nextId: "job_offer" },
      {
        content: "エンジニアのキャリアについて相談したい",
        nextId: "consultant",
      },
      { content: "学習コミュニティについて知りたい", nextId: "community" },
      { content: "お付き合いしたい", nextId: "dating" },
    ],
    question: "こんにちは！ご用件はなんでしょうか？",
  },
  job_offer: {
    answers: [
      { content: "Webサイトを制作してほしい", nextId: "website" },
      { content: "Webアプリを開発してほしい", nextId: "webapp" },
      { content: "自動化ツールを作ってほしい", nextId: "automation_tool" },
      { content: "その他", nextId: "other_jobs" },
    ],
    question: "どのようなお仕事でしょうか？",
  },
  website: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "Webサイト細作についてですね。コチラからお問い合わせできます。",
  },
  webapp: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
  },
  automation_tool: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "自動化ツール開発についてですね。コチラからお問い合わせできます。",
  },
  other_jobs: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "その他についてですね。コチラからお問い合わせできます。",
  },
  consultant: {
    answers: [
      {
        content: "動画を見る",
        nextId: "https://www.youtube.com/",
      },
      { content: "コミュニティについて知りたい", nextId: "community" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "キャリアについて発信しています。エンジニア向けコミュニティ内でも相談に乗っていますよ。",
  },
  community: {
    answers: [
      { content: "どんな活動をしているの？", nextId: "community_activity" },
      {
        content: "コミュニティに参加したい",
        nextId: "/",
      },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "コミュニティを始めました！プログラミングを教えたりキャリアの相談に乗っています。",
  },
  community_activity: {
    answers: [
      {
        content: "さらに詳細を知りたい",
        nextId: "/",
      },
      {
        content: "コミュニティに参加したい",
        nextId: "/",
      },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "フロントエンド向けの教材の提供、紹介をしています。",
  },
  dating: {
    answers: [
      { content: "DMする", nextId: "/" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "まずは一緒にランチでもいかがですか？",
  },
};

export default defaultDataset;
