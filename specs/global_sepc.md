# aKnow2 Portfolio 仕様書 v2.0（確定版）

## 1. コンセプト

### テーマ

* **Mostly Harmless Outputs**
* 遊び心 × 技術 × 軽さ
* **Duolingo風UI**をベースにした親しみやすいポートフォリオ

### ビジュアル方針

* 背景：**紫 → 緑の弱いグラデーション**

  * 上部：紫寄り
  * 下部（カード領域）：緑寄り
* セクション境界：

  * **黒の手書き風ウェーブボーダー**
* カード：

  * **Duolingo風の丸み・柔らかい影**
  * 明るいパステル調

---

## 2. レイアウト構造

### 上部ヒーロー

```
aKnow2
Mostly Harmless Outputs

[ GitHub ] [ Twitter ] [ Email ]
```

#### 仕様

* 中央寄せ
* タイトル：太字・大サイズ
* サブタイトル：細字グレー
* SNS：

  * 丸アイコン＋ラベル
  * 横並び

---

### セクション区切り

```
~~~~~~~~~~~~~~
  Release Links
~~~~~~~~~~~~~~
```

#### 仕様

* **黒色・手書き風**
* SVG or CSS border-image 推奨
* 軽いゆらぎを持たせる

---

### カード一覧

#### グリッド

* PC：2列
* タブレット：2列
* スマホ：1列
* Gap：24px

---

## 3. カードデザイン

### 共通スタイル

* border-radius：**20px**
* box-shadow：**Duolingo風ソフト影**
* padding：**20px**
* hover：

  * translateY(-4px)
  * shadow強化
  * 0.15s ease

---

### カード構成

```
[Icon]  Title
        Description

⭐ Stars   Forks
```

または

```
[Icon]  Title
        OGP preview（SNS系）
```

---

### 種類ごとの違い

#### GitHub系

* Stars / Forks 表示
* 淡い黄色・青・紫背景

#### SNS系

* **OGP画像サムネ**
* メトリクスなし

---

## 4. カラーパレット

### 背景

* 紫：`#8B5CF6`
* 緑：`#22C55E`
* グラデーション弱め

```css
background: linear-gradient(
  180deg,
  #8b5cf6 0%,
  #a78bfa 25%,
  #86efac 70%,
  #22c55e 100%
);
```

---

### カード色（例）

| 種類     | 色       |
| ------ | ------- |
| GitHub | #FDE68A |
| SNS    | #BAE6FD |
| Tool   | #DDD6FE |
| Blog   | #BBF7D0 |

---

### ボーダー

* 手書き線：**#000**
* 太さ：2〜3px

---

## 5. 技術スタック

### フレームワーク

* **Astro**
* Static Export → **GitHub Pages**

理由：

* 軽い
* SEO強い
* OGP取得しやすい
* 将来MD追加も簡単

---

### OGP取得

#### 方法

* ビルド時取得（推奨）

```
astro build 時に fetch
→ JSONキャッシュ
→ カード表示
```

#### 対応対象

* GitHub repo
* Instagram
* Qiita
* X(Twitter)

---

## 6. ファイル構造

```
src/
  components/
    Hero.astro
    SocialLinks.astro
    ReleaseGrid.astro
    Card/
      GithubCard.astro
      OgpCard.astro
      BaseCard.astro
  data/
    links.ts
  pages/
    index.astro
```

---

## 7. 将来拡張

### 追加予定

* タグフィルター
* ダークモード
* 年別アーカイブ
* アニメーション強化（Framer Motion）

---

## 8. デザイン要点まとめ（最重要）

### 必須条件

* Duolingo風カードUI
* 紫→緑の**弱い**背景グラデーション
* **黒の手書きウェーブ境界**
* SNSはOGPカード
* Mostly Harmless Outputs を軸

