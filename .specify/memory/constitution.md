<!--
Sync Impact Report
- Version change: N/A → 1.0.0
- Modified principles: [PRINCIPLE_1_NAME–5_NAME] → I–V (Astro/React/Accessibility/Content/Performance)
- Added sections: Quality Standards, Development Workflow
- Removed sections: None
- Templates requiring updates:
	- ✅ .specify/templates/plan-template.md
	- ✅ .specify/templates/spec-template.md
	- ✅ .specify/templates/tasks-template.md
	- ⚠ .specify/templates/commands/*.md (directory not found)
- Follow-up TODOs: None
-->

# aKnow2 Portfolio Constitution

## Core Principles

### I. Astro Best Practices First
Astro実装は公式ベストプラクティスに必ず従う。静的ファーストで構成し、
不要なクライアントJSは追加しない。インタラクティブ要素のみ明示的に
アイランド化し、データ取得はビルド時を基本とする。

### II. React Best Practices (When React Is Used)
Reactを使用する場合は関数コンポーネントとHooksのルールを遵守し、
副作用は明確に分離する。不要な再レンダリングを避け、状態は最小限に保つ。

### III. Accessibility by Default (Non-Negotiable)
すべてのUIはアクセシビリティを最優先とする。セマンティックHTML、
キーボード操作、フォーカス表示、代替テキスト、十分なコントラストを
必ず提供し、WCAG 2.1 AA相当を満たす。

### IV. Data-Driven Content & Contracts
表示内容はデータ定義から構成し、UIのハードコードを避ける。
データ構造は明確なスキーマで管理し、変更は破壊的影響を検討する。

### V. Simplicity & Performance
複雑さは最小限に保ち、パフォーマンスを損なう追加依存は避ける。
静的配信で十分な場合はランタイム機能を導入しない。

## Quality Standards

- すべてのUI変更はアクセシビリティチェックを通過しなければならない。
- Astro/Reactの公式推奨に反する実装は例外なく修正する。
- 主要ユーザーフローは手動検証で確認されなければならない。
- 静的配信に適合しない構成は採用しない。

## Development Workflow

- 仕様 → 計画 → タスクの順に更新し、各段階で憲章適合性を確認する。
- PR/レビューでは憲章の各原則への適合を明示する。
- 依存追加・構造変更は「Simplicity & Performance」に照らして妥当性を説明する。

## Governance

- 本憲章はすべての設計・実装ルールより優先される。
- 変更は変更理由・影響範囲・移行手順を明記して提案する。
- バージョンはセマンティックバージョニングに従う。
	- MAJOR: 原則の削除/再定義など後方互換性のない変更
	- MINOR: 原則/セクションの追加や大幅拡張
	- PATCH: 文言修正・明確化など非破壊的変更
- すべてのレビューで憲章遵守を確認する。

**Version**: 1.0.0 | **Ratified**: 2026-02-06 | **Last Amended**: 2026-02-06
