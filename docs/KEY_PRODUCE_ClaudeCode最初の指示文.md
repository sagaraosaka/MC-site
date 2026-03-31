# Claude Codeへの指示文｜KEY PRODUCE サイト制作

---

## 最初にやること

docs/ フォルダ内の以下の設計書を読んでください。

```
docs/KEY_PRODUCE_設計書_Step1.md
docs/KEY_PRODUCE_設計書_Step2.md
docs/KEY_PRODUCE_設計書_Step3.md
docs/KEY_PRODUCE_設計書_Step4_ClaudeCode用.md
```

読み終えたら、以下の指示に従って実装を進めてください。

---

## プロジェクト概要

- サービス名：KEY PRODUCE（キー・プロデュース）
- 副題：紀州のイベントをつくる
- 技術：HTML / CSS / JS（静的サイト）
- リポジトリ：sagaraosaka/MC-site

---

## 実装の前提

- フォームはGoogle Formを使用（URLは後から差し替え）
- 写真は既存の公開済み画像を使用（assets/images/ に集約）
- ニックネームは【ニックネーム】のプレースホルダーで実装（後から差し替え）
- 既存のindex.htmlをベースにTOPページを発展させる

---

## 最初の指示｜フォルダ構成の整理

まず以下のフォルダ構成に整理してください。
既存ファイルはできるだけ活かしながら、
不足しているフォルダ・ファイルを追加してください。

```
key-produce/
├── index.html          # TOP（既存LPをベースに発展）
├── service/
│   └── index.html      # サービス・料金ページ（新規）
├── profile/
│   └── index.html      # プロフィールページ（新規）
├── contact/
│   └── index.html      # お問い合わせページ（新規）
├── works/              # Phase2用（今は空でOK）
│   └── index.html
├── css/
│   ├── style.css       # 共通スタイル
│   └── components.css  # コンポーネント用スタイル
├── js/
│   └── main.js         # 共通JS
├── assets/
│   └── images/         # 画像素材
└── docs/               # 設計書（触らない）
```

フォルダ構成が整ったら報告してください。
次の指示（共通コンポーネントの作成）に進みます。
