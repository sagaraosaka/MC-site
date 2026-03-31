# README更新｜Claude Codeへの指示文

---

## 指示文（そのままClaude Codeに貼り付けて使う）

---

既存のREADME.mdを以下の内容に更新してください。
既存の内容は一度確認した上で、必要な情報を残しつつ更新してください。

---

## 更新内容

```markdown
# KEY PRODUCE

> 紀州のイベントをつくる

和歌山市を拠点としたイベントMC・イベント企画のWebサイトです。
LPとして公開していたサイトを、マルチページのWebサイトへ移行しました。

---

## サイト概要

| 項目 | 内容 |
|---|---|
| サービス名 | KEY PRODUCE（キー・プロデュース） |
| 副題 | 紀州のイベントをつくる |
| 拠点 | 和歌山市 |
| 事業 | イベントMC・司会（将来的にイベント企画・運営全般へ拡張予定） |

---

## 技術スタック

| 項目 | 内容 |
|---|---|
| 実装 | HTML / CSS / JS（静的サイト） |
| フォーム | Google Form |
| ホスティング | GitHub Pages |

---

## ページ構成

| ページ | URL | フェーズ |
|---|---|---|
| TOP | / | Phase1 |
| サービス・料金 | /service/ | Phase1 |
| プロフィール | /profile/ | Phase1 |
| お問い合わせ | /contact/ | Phase1 |
| 実績・事例 | /works/ | Phase2（写真が増えたら追加） |
| ブログ・お知らせ | /news/ | Phase3（将来的に） |

---

## フォルダ構成

```
key-produce/
├── index.html          # TOP
├── service/
│   └── index.html      # サービス・料金
├── profile/
│   └── index.html      # プロフィール
├── contact/
│   └── index.html      # お問い合わせ
├── works/              # Phase2
│   └── index.html
├── css/
│   ├── style.css       # 共通スタイル
│   └── components.css  # コンポーネント用スタイル
├── js/
│   └── main.js         # 共通JS
├── assets/
│   └── images/         # 画像素材
└── docs/               # 設計書
```

---

## 設計書

詳細な設計はdocs/フォルダを参照してください。

| ファイル | 内容 |
|---|---|
| KEY_PRODUCE_設計書_Step1.md | 仕様整理メモ・サイト構成案 |
| KEY_PRODUCE_設計書_Step2.md | ページごとの要件定義 |
| KEY_PRODUCE_設計書_Step3.md | 意思決定論点・優先順位付きTODO |
| KEY_PRODUCE_設計書_Step4_ClaudeCode用.md | Claude Code用設計書 |

---

## 更新履歴

| 日付 | 内容 |
|---|---|
| 2025年 | LPをマルチページWebサイトへ移行・KEY PRODUCEとしてリニューアル |
```

---

## 注意事項

- 既存のREADME.mdがある場合は内容を確認してから上書きしてください
- README.mdがない場合は新規作成してください
- 更新後にプレビューを確認してください
