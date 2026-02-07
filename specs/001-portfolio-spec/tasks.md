# タスク: aKnow2 ポートフォリオ v2（LP / Mostly Harmless Outputs）

**入力**: `/specs/001-portfolio-spec/` の設計ドキュメント
**前提**: plan.md（必須）、spec.md（ユーザーストーリー必須）、research.md、data-model.md、contracts/

**テスト**: 指定なし（quickstart.mdに従った手動検証）

**構成**: タスクはユーザーストーリー単位で整理し、各ストーリーが独立して実装・検証できるようにする。

## フェーズ1: セットアップ（共通インフラ）

**目的**: プロジェクト初期化と基本構造の準備

- [x] T001 src/data/social-links.json と src/data/release-catalog.json のためのJSONデータディレクトリと初期ファイルを作成
- [x] T002 [P] public/placeholder.svg にプレビュー画像のプレースホルダーを追加

---

## フェーズ2: 基盤（前提ブロッカー）

**目的**: すべてのユーザーストーリー実装前に完了すべき中核基盤

- [x] T003 src/data/types.ts に SocialLink / ReleaseItem の型定義を作成
- [x] T004 src/data/catalog.ts にカタログの読み込み（JSON配列順で表示）を実装
- [x] T005 src/styles/global.css を作成し、src/layouts/Layout.astro に読み込みを追加
- [x] T006 src/layouts/Layout.astro のベース構造を更新し、ページコンテナ（グラデ背景・セクション間隔）を用意

**チェックポイント**: 基盤完了 - ユーザーストーリー実装を開始可能

---

## フェーズ3: ユーザーストーリー1 - ヒーローから作者情報に到達する (Priority: P1) 🎯 MVP

**目的**: 訪問者が作者名を確認し、上部SNSリンク（GitHub / X / Instagram）を利用できる。

**独立テスト**: ヒーローと上部リンクのみを表示し、英語ラベルと新規タブ遷移を確認する。

### 実装

- [x] T007 [P] [US1] src/components/Hero.astro に "aKnow2" のみを表示するヒーローコンポーネントを作成
- [x] T008 [P] [US1] src/data/social-links.json を読み込む src/components/SocialLinks.astro を作成
- [x] T009 [US1] src/pages/index.astro に Hero と SocialLinks を組み込む
- [x] T010 [US1] src/components/SocialLinks.astro で外部リンクの新規タブ遷移とアクセシブルなラベルを保証

**チェックポイント**: ユーザーストーリー1が独立して機能する

---

## フェーズ4: ユーザーストーリー2 - Mostly Harmless Outputs から成果物を探して開く (Priority: P2)

**目的**: 訪問者がカードグリッドを閲覧し、タイトル下のリンクアイコンから任意のリンクを開ける。

**独立テスト**: JSONからカードを描画し、表示順とリンクアイコンの遷移挙動を確認する。

### 実装

- [x] T011 [P] [US2] 手書き風のウェーブ区切りコンポーネントを src/components/WaveDivider.astro に作成
- [x] T012 [P] [US2] カード本体はクリック不可でリンクアイコンのみクリック可能なベースカードを src/components/Card/BaseCard.astro に作成
- [x] T013 [US2] カタログを読み込みグリッド描画する src/components/ReleaseGrid.astro を作成
- [x] T014 [US2] src/pages/index.astro に WaveDivider + ReleaseGrid を使って Mostly Harmless Outputs セクションを追加
- [x] T015 [US2] src/components/ReleaseGrid.astro のレスポンシブグリッドとリンクアイコン用のカード基本スタイルを追加

**チェックポイント**: ユーザーストーリー2が独立して機能する

---

## フェーズ5: ユーザーストーリー3 - プレビュー画像が正しく見える (Priority: P3)

**目的**: カードにプレビュー画像（フォールバックあり）を表示する。

**独立テスト**: プレビュー画像を持つカード1枚を表示し、プレビュー（またはプレースホルダー）を確認する。

### 実装

- [x] T016 [P] [US3] src/assets/github.svg にGitHubアイコンアセットを追加
- [x] T017 [P] [US3] src/components/Card/GithubCard.astro にGitHubカードコンポーネントを作成
- [x] T018 [P] [US3] src/components/Card/OgpCard.astro にプレビューカード（プレースホルダー付き）を作成
- [x] T019 [US3] src/components/ReleaseGrid.astro を更新し、カタログからカードを描画する
- [x] T020 [US3] src/components/Card/OgpCard.astro でプレビュー画像のalt処理を追加（JSONの `previewAlt` または安全な代替）

**チェックポイント**: ユーザーストーリー3が独立して機能する

---

## フェーズ6: 仕上げ・横断的対応

**目的**: 複数ストーリーにまたがる改善

- [x] T021 [P] src/styles/global.css にグラデーション背景とタイポグラフィ調整を適用
- [x] T022 [P] src/styles/global.css にホバーの持ち上げと focus-visible のスタイルを追加
- [x] T023 [P] src/components/Hero.astro / src/components/SocialLinks.astro / src/components/Card/OgpCard.astro のコントラスト確認とARIA/alt不足の補完
- [x] T025 [P] キーボード操作で主要導線（上部リンク/カード）へ到達・遷移できることを確認し、必要なら修正
- [x] T026 [P] Astro/ReactベストプラクティスとWCAG 2.1 AA相当の適合レビューを実施し、指摘があれば修正
- [x] T024 パスや挙動変更があれば specs/001-portfolio-spec/quickstart.md の検証手順を更新

---

## 依存関係と実行順序

### フェーズ依存

- **セットアップ（フェーズ1）**: 依存なし、即開始可能
- **基盤（フェーズ2）**: セットアップ完了に依存。全ユーザーストーリーの前提
- **ユーザーストーリー（フェーズ3+）**: 基盤完了に依存
- **仕上げ（フェーズ6）**: 必要なユーザーストーリー完了に依存

### ユーザーストーリー依存

- **ユーザーストーリー1（P1）**: 基盤（フェーズ2）完了後に開始可能
- **ユーザーストーリー2（P2）**: 基盤（フェーズ2）完了後に開始可能
- **ユーザーストーリー3（P3）**: 基盤（フェーズ2）完了後に開始可能

### 並列化の余地

- T002 は T001 と並列実行可能
- T007 と T008 は並列実行可能
- T011 と T012 は並列実行可能
- T016 / T017 / T018 は並列実行可能
- T021 / T022 / T023 は並列実行可能

---

## 並列実行の例

### ユーザーストーリー1

- [ ] T007 [P] [US1] src/components/Hero.astro にヒーローコンポーネントを作成
- [ ] T008 [P] [US1] src/components/SocialLinks.astro にSNSリンクコンポーネントを作成

### ユーザーストーリー3

- [ ] T016 [P] [US3] src/assets/github.svg にGitHubアイコンを追加
- [ ] T017 [P] [US3] src/components/Card/GithubCard.astro にGitHubカードを作成
- [ ] T018 [P] [US3] src/components/Card/OgpCard.astro にプレビューカード（プレースホルダー付き）を作成

---

## 実装戦略

### MVP優先（ユーザーストーリー1のみ）

1. フェーズ1（セットアップ）を完了
2. フェーズ2（基盤）を完了
3. フェーズ3（ユーザーストーリー1）を完了
4. ユーザーストーリー1を独立検証

### 段階的デリバリー

1. セットアップ + 基盤を完了
2. ユーザーストーリー1を実装 → 独立検証
3. ユーザーストーリー2を実装 → 独立検証
4. ユーザーストーリー3を実装 → 独立検証
5. 仕上げフェーズのタスクを適用
