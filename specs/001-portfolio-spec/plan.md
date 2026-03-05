# 実装計画: aKnow2 ポートフォリオ v2（LP / Mostly Harmless Outputs）

**ブランチ**: `001-portfolio-spec` | **日付**: 2026-02-06 | **仕様**: [specs/001-portfolio-spec/spec.md](specs/001-portfolio-spec/spec.md)
**入力**: `/specs/001-portfolio-spec/spec.md` の仕様

**注記**: このテンプレートは `/speckit.plan` コマンドで生成されています。実行フローは `.specify/templates/commands/plan.md` を参照してください。

## 概要

aKnow2 のポートフォリオ向けに、ヒーロータイトルと上部SNSリンク（GitHub / X / Instagram）を備えた静的なAstroサイトを構築する。JSONで定義されたカードを「Mostly Harmless Outputs」セクションに表示し、カード自体はクリック不可で、タイトル下のリンクアイコンから新しいタブで遷移する。カードはプレビュー画像（失敗時はフォールバック）を表示し、ガラス風オーバーレイはカード全体にかかる。デザインはDuolingo風の柔らかなカード、紫→緑のグラデーション背景、手書き風ウェーブ区切りを採用する。

## 技術コンテキスト

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**言語/バージョン**: Astro 5（JS/TS） on Node.js 18+  
**主要依存**: Astro  
**ストレージ**: リポジトリ内JSON（静的コンテンツ）  
**テスト**: 手動の視覚/操作検証・リンク検証（自動テストは指定なし）  
**ターゲット**: GitHub Pagesの静的サイト
**プロジェクト種別**: Web（静的）
**性能目標**: 静的配信の高速化（目標: LCP < 2s）  
**制約**: 静的出力のみ、外部リンクは新しいタブ、アクセシブルなラベル/代替テキスト  
**規模/範囲**: 単一ページのポートフォリオ（カードグリッド）

## 憲章チェック

*GATE: フェーズ0の調査前に必須。フェーズ1の設計後に再確認。*

**GATE**: 要更新 — 以下の憲章ゲートに準拠していることを確認する

- Astroベストプラクティス遵守
- Reactベストプラクティス遵守（React使用時）
- アクセシビリティ準拠（WCAG 2.1 AA相当）

## プロジェクト構成

### ドキュメント（本機能）

```text
specs/[###-feature]/
├── plan.md              # 本ファイル（/speckit.plan の出力）
├── research.md          # フェーズ0の出力（/speckit.plan）
├── data-model.md        # フェーズ1の出力（/speckit.plan）
├── quickstart.md        # フェーズ1の出力（/speckit.plan）
├── contracts/           # フェーズ1の出力（/speckit.plan）
└── tasks.md             # フェーズ2の出力（/speckit.tasks。/speckit.planでは作成しない）
```

### ソースコード（リポジトリ直下）
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
src/
├── assets/
├── components/
├── layouts/
├── pages/
├── data/            # 予定されるJSONカタログ（release-catalog.json）

public/
```

**構成の決定**: 既存のAstro単一プロジェクト構成を用い、カード内容のために `src/data/` にJSONカタログを追加する。

## 複雑性トラッキング

> **憲章チェックに違反がある場合のみ記入**

| 違反内容 | 必要な理由 | 単純な代替案を却下した理由 |
|-----------|------------|-------------------------------------|
| [例: 4つ目のプロジェクト] | [現在の必要性] | [なぜ3プロジェクトでは不足か] |
| [例: リポジトリパターン] | [具体的な問題] | [なぜDB直アクセスでは不十分か] |

## フェーズ0: 調査

- 出力: [specs/001-portfolio-spec/research.md](specs/001-portfolio-spec/research.md)
- 主要決定:
  - JSONベースのカードカタログをリポジトリに保存
  - プレビュー画像はJSONで明示し、取得不可時はプレースホルダー
  - 静的のみのランタイム、Copilot SDKは開発ツール用途のみ

## フェーズ1: 設計と契約

- データモデル: [specs/001-portfolio-spec/data-model.md](specs/001-portfolio-spec/data-model.md)
- コントラクト:
  - [specs/001-portfolio-spec/contracts/release-catalog.schema.json](specs/001-portfolio-spec/contracts/release-catalog.schema.json)
  - [specs/001-portfolio-spec/contracts/README.md](specs/001-portfolio-spec/contracts/README.md)
- クイックスタート: [specs/001-portfolio-spec/quickstart.md](specs/001-portfolio-spec/quickstart.md)

### エージェントコンテキスト更新

- `.specify/scripts/bash/update-agent-context.sh copilot` を実行

### 憲章の再確認（設計後）

**GATE**: 要更新 — 以下の憲章ゲートに準拠していることを再確認する

- Astroベストプラクティス遵守
- Reactベストプラクティス遵守（React使用時）
- アクセシビリティ準拠（WCAG 2.1 AA相当）

## フェーズ2: 計画（高レベルタスク）

1. `src/data/` に Release Items と Social Links のJSONカタログを作成
2. タイトル、SNSアイコン（GitHub / X / Instagram）、英語ラベルを持つヒーローを作成
3. ウェーブ区切りとカードグリッドを持つ「Mostly Harmless Outputs」セクションを作成
4. カードのプレビュー画像とフォールバックを実装
5. グラデーション背景、Duolingo風カード、ホバーエフェクト、アクセシビリティラベルを適用
6. 外部リンクが新しいタブで開くこと、リンクアイコンのみがクリック可能であることを検証
