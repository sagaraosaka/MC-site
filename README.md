# Event MC Website（地域イベントMC紹介サイト）

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=flat&logo=google&logoColor=white)
![Google Forms](https://img.shields.io/badge/Google%20Forms-7248B9?style=flat&logo=googleforms&logoColor=white)

---

## 概要

和歌山市を中心に活動する地域密着型イベントMCの紹介サイトです。
お祭り・商業施設イベント・マルシェ・交流イベントなどにおいて、
「参加しやすい空気づくり」と「現場を整える進行」を強みとしています。

本サイトはLP（シングルページ）構成で、
世界観・写真・コピーを重視した設計になっています。

---

## サイトの目的

- イベントMCのサービス内容を分かりやすく伝える
- 「地域密着 × 盛り上げ力」を直感的に感じてもらう
- 日程の仮確認・問い合わせへの導線をシンプルに用意する
- 将来的な実績追加・WordPress化を見据えた構造にする

---

## 技術スタック

| 技術 | 用途 |
|------|------|
| HTML5（セマンティックタグ） | マークアップ |
| CSS3（CSS変数による設計） | スタイリング |
| JavaScript（最小限） | UI制御のみ |
| Google Fonts（Noto Sans JP / Playfair Display） | フォント |
| Google Forms | 問い合わせフォーム |

フレームワークは使用せず、静的サイトとして軽量に構成しています。

---

## ディレクトリ構成

```text
/
├─ index.html
└─ assets/
   ├─ css/
   │  └─ style.css
   ├─ js/
   │  └─ main.js
   └─ images/
      ├─ hero-wakayama-local-event.jpg
      ├─ value-event-mc-speaking.jpg
      ├─ engagement-participation-moment.jpg
      └─ scenes-family-community-event.jpg
```

---

## ローカルで確認する方法

フレームワーク不要の静的サイトです。以下のいずれかで確認できます。

```bash
# macOS の場合
open index.html

# Python が使える場合（推奨：フォントや画像の読み込みを正確に確認できる）
python3 -m http.server 8000
# → http://localhost:8000 をブラウザで開く
```

---

## ページ構成

| セクション | 役割 |
|-----------|------|
| Hero | キャッチコピーと世界観写真で、サービスの印象を一瞬で伝える |
| About | MCとしての考え方・姿勢を説明 |
| Value | 提供できる価値（安心感・機転・現場配慮） |
| Scenes | 対応可能なイベントシーンの例 |
| Works | 過去の実績（公開可能な範囲で掲載） |
| Process | 依頼から当日までの流れ |
| Contact | Googleフォームへの導線（仮日程確認可） |

---

## 写真の考え方

写真はすべて「役割」を持って配置しています。

| 配置箇所 | 意図 |
|---------|------|
| Hero | 会場の引き・地域性・空気感 |
| Value | 落ち着いた登壇・信頼感 |
| 盛り上げ設計 | 参加が生まれる瞬間 |
| Scenes | 地域・ファミリー・入りやすさ |

※ 写真はすべて実際の現場写真を使用する想定です。

---

## 実績の扱いについて

- 過去に対応したイベントのみを掲載します
- イベント名が出せない場合は「イベント種別＋規模＋担当内容」で表記します
- 今後のイベントも、同じルールで随時追加します

---

## 料金・サービス範囲について

- 料金は「目安レンジ」または「最低料金」を掲載予定
- 最終金額は以下の要素により決定します
  - イベント規模
  - 稼働時間
  - 事前準備（台本作成等）の有無
- 詳細は問い合わせ後に個別調整します

---

## 問い合わせについて

- Googleフォームを使用
- 回答があった場合、管理者にメール通知が届く設定
- 通常1〜2営業日以内に返信します

---

## 更新・運用ルール

- 文言・実績追加はHTMLを直接編集
- デザイン変更はCSSで一元管理
- JavaScriptは極力増やさない方針
- 大きな改修時はREADMEも更新します

---

## 今後の拡張予定（想定）

- 実績の定期追加
- 料金表の明確化
- WordPress化（静的構成を流用予定）
- フォーム自動返信・通知の高度化

---

## 備考

本サイトは「派手さ」よりも「安心感」「信頼感」「入りやすさ」を重視して設計されています。
