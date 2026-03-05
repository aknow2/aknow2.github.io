# Feature Specification: aKnow2 ポートフォリオ v2（LP / Mostly Harmless Outputs）

**Feature Branch**: `001-portfolio-spec`  
**Created**: 2026-02-05  
**Status**: Draft  
**Input**: User description: "specと画像の情報から仕様書の生成をお願いします"

## Clarifications

### Session 2026-02-06

- Q: “Mostly Harmless Outputs” はどこに表示する？ → A: 成果物一覧セクションの見出しのみ（ヒーローには表示しない）
- Q: 外部リンクはどのタブで開く？ → A: すべて新しいタブ（またはウィンドウ）で開く
- Q: カード一覧の表示順はどう決める？ → A: 手動固定（データの並び順どおり）
- Q: カードのクリック可能領域は？ → A: カード全体がクリック可能
- Q: UI文言の表示言語は？ → A: 英語
- Q: カード表示内容はどう管理する？ → A: JSONで定義可能

### Session 2026-02-07

- Q: カードのクリック可能領域は？ → A: カード自体は選択不可、リンクアイコンのみクリック可能
- Q: ガラスレイヤーの表示範囲は？ → A: ガラス部分はカード全体に広げる
- Q: カード内リンクは？ → A: 1枚のカードに複数リンクを設定し、タイトル下にSNSアイコンで表示

## User Scenarios & Testing *(mandatory)*

<!--
  IMPORTANT: User stories should be PRIORITIZED as user journeys ordered by importance.
  Each user story/journey must be INDEPENDENTLY TESTABLE - meaning if you implement just ONE of them,
  you should still have a viable MVP (Minimum Viable Product) that delivers value.
  
  Assign priorities (P1, P2, P3, etc.) to each story, where P1 is the most critical.
  Think of each story as a standalone slice of functionality that can be:
  - Developed independently
  - Tested independently
  - Deployed independently
  - Demonstrated to users independently
-->

### User Story 1 - ヒーローから作者情報に到達する (Priority: P1)

初めて訪れた閲覧者として、ページ上部で作者名を理解し、GitHub / X / Instagram のいずれかへ迷わず遷移したい。

**Why this priority**: 最初の接点で「誰の何のサイトか」と「次に取る行動」を即時に提供し、離脱を減らすため。

**Independent Test**: トップ（ヒーロー）部分だけ実装されていても、閲覧者が作者情報を理解し外部リンクへ遷移できる。

**Acceptance Scenarios**:

1. **Given** 新規訪問者がページを開いている, **When** ファーストビューを見る, **Then** 作者名（aKnow2）が読み取れる
2. **Given** 新規訪問者がページ上部にいる, **When** GitHub / X / Instagram のいずれかを選択する, **Then** 選択した宛先が新しいタブ（またはウィンドウ）で開く

---

### User Story 2 - Mostly Harmless Outputs から成果物を探して開く (Priority: P2)

閲覧者として、Mostly Harmless Outputs セクションのカード一覧から興味のある成果物を見つけ、リンクを開いて詳細を確認したい。

**Why this priority**: ポートフォリオの価値（実績・作品）を最短距離で提示する中心機能のため。

**Independent Test**: Mostly Harmless Outputs セクションだけ実装されていても、閲覧者はカード一覧から任意の成果物へ遷移できる。

**Acceptance Scenarios**:

1. **Given** 閲覧者が Mostly Harmless Outputs セクションを表示している, **When** カード一覧をスクロールして閲覧する, **Then** 各カードのタイトルと概要が読み取れる
2. **Given** 閲覧者が任意のカードを選択する, **When** タイトル下のリンクアイコンをクリックする, **Then** 対象ページが新しいタブ（またはウィンドウ）で開く
3. **Given** 閲覧者がカードを表示している, **When** タイトル/画像/余白をクリックする, **Then** カード自体は選択されず遷移しない
4. **Given** 運用者が成果物データを配列順で定義している, **When** 閲覧者がカード一覧を見る, **Then** カードは配列の順序どおりに並んで表示される
5. **Given** 運用者がJSONで成果物カード定義を用意している, **When** 閲覧者がページを見る, **Then** JSONの定義どおりにカードが表示される

---

### User Story 3 - プレビュー画像で内容を素早く把握する (Priority: P3)

閲覧者として、カードにプレビュー画像がある場合は内容を素早く把握したい。

**Why this priority**: 一覧での比較・選択を容易にするため。

**Independent Test**: プレビュー画像を持つカード1枚を表示できれば、仕様が単体で検証できる。

**Acceptance Scenarios**:

1. **Given** プレビュー画像が設定されたカードが表示されている, **When** 閲覧者がカードを見る, **Then** プレビュー画像が表示される

---

[Add more user stories as needed, each with an assigned priority]

### Edge Cases

<!--
  ACTION REQUIRED: The content in this section represents placeholders.
  Fill them out with the right edge cases.
-->

- リンク先のプレビュー画像が取得できない／提供されない場合でも、カードが崩れずにタイトルと説明で代替表示される
- 長いタイトル・説明（改行、絵文字、記号を含む）でもレイアウトが破綻せず、重要情報が読み取れる
- 画面幅が狭い（スマホ）場合でも、カードが1列で読みやすく表示される
- 外部リンクが一時的に不達の場合でも、ユーザーが状況を理解できる（少なくともリンク自体は提示され続ける）

## Requirements *(mandatory)*

<!--
  ACTION REQUIRED: The content in this section represents placeholders.
  Fill them out with the right functional requirements.
-->

### Functional Requirements

- **FR-001**: ページは作者名「aKnow2」をファーストビュー内で表示しなければならない
- **FR-002**: ページ上部に GitHub / X / Instagram の外部導線を表示しなければならない
- **FR-003**: 上部導線はアイコンを含み、かつ各導線の宛先が判別できるラベル（または同等のテキスト）を持たなければならない
- **FR-004**: 成果物一覧セクションは、セクション見出し「Mostly Harmless Outputs」を明確に表示しなければならない
- **FR-005**: 「Mostly Harmless Outputs」の見出しは、手書き風のウェーブ区切り線（黒系）により上下（または周辺）と視覚的に区切られていなければならない

- **FR-006**: ページ背景は上部が紫寄り・下部が緑寄りの弱いグラデーションでなければならない
- **FR-007**: 成果物カード一覧は、画面サイズに応じて可読性を保つグリッドで表示されなければならない（目標: PC/タブレットは2列、スマホは1列）
- **FR-008**: 各カードは、角丸・柔らかい影を持つ「親しみやすい（Duolingo風）」外観でなければならない
- **FR-009**: カードはホバー可能な環境では、浮き上がり（軽い上方向移動）と影の強調によりインタラクティブであることを示さなければならない

- **FR-010**: 各カードは少なくとも「タイトル」「短い説明」「1つ以上のリンクアイコン（クリックで遷移できる）」を提供しなければならない
- **FR-011**: プレビュー画像が利用できる場合、カードは画像を表示しなければならない
- **FR-012**: プレビュー画像が利用できない場合、カードは代替の視覚要素（プレースホルダー）またはテキスト中心の表示へ自動的に切り替わらなければならない
- **FR-013**: ガラス風のオーバーレイはカード全体に表示されなければならない

- **FR-014**: カードの背景色はパステル調で、複数種類（例: 黄色/水色/紫/緑）を許容し、一覧として楽しい印象を損なってはならない
- **FR-015**: すべての外部リンクは、ユーザーが意図せず別導線を押さないよう、クリック可能領域が明確でなければならない

- **FR-019**: すべての外部リンク（上部導線、各カードのリンクアイコン）は、新しいタブ（またはウィンドウ）で開かなければならない
- **FR-020**: 成果物カード一覧の表示順は、JSON配列の順序どおりに表示されなければならない
- **FR-021**: 各成果物カードは、カード自体がクリック不可であり、リンクアイコンのみが遷移先を持たなければならない

- **FR-022**: UI上のラベル文言（上部導線ラベル、セクション見出し、カード内の主要ラベル）は英語で表示されなければならない

- **FR-023**: 成果物カード一覧は、JSON形式の定義データから構成できなければならない

- **FR-016**: 重要テキスト（タイトル、説明、見出し）は背景に対して十分なコントラストを維持し、WCAG 2.1 AA相当の読みやすさを満たさなければならない
- **FR-017**: プレビュー画像には、内容が伝わる代替テキスト（同等の説明）を提供しなければならない
- **FR-018**: キーボード操作のみでも主要導線（上部リンク、カードリンク）へ到達・遷移できなければならない

### Key Entities *(include if feature involves data)*

- **Social Link**: ページ上部の外部導線（属性例: ラベル, 宛先URL, アイコン）
- **Release Item**: Mostly Harmless Outputs に表示する1件の成果物（属性例: タイトル, 説明, 複数リンク, 表示用画像）
- **Release Link**: 成果物カード内のリンク（属性例: ラベル, 宛先URL, アイコン）
- **Release Catalog (JSON)**: Release Item の配列を保持するJSON定義（属性例: items[], スキーマバージョン任意）
- **Preview Media**: Release Item に紐づくプレビュー（属性例: 画像URL, 代替テキスト, 取得可否）

## Success Criteria *(mandatory)*

<!--
  ACTION REQUIRED: Define measurable success criteria.
  These must be technology-agnostic and measurable.
-->

### Measurable Outcomes

- **SC-001**: 新規訪問者がページ表示後30秒以内に GitHub / X / Instagram のいずれかをクリックして遷移できる
- **SC-002**: 新規訪問者がページ表示後60秒以内に Mostly Harmless Outputs 内の任意のリンクアイコンを1つ開ける
- **SC-003**: 主要画面幅（スマホ/タブレット/PC）で、カードのタイトルが1画面内で識別できる状態が維持される（文字の欠けや重なりがない）
- **SC-004**: プレビュー画像が利用できないカードでも、閲覧者がタイトルと説明のみで内容を判断しリンクを開ける

## Assumptions

- ページは「ポートフォリオのトップページ（LP）」として機能し、閲覧者の主目的は外部リンクへの遷移である
- Mostly Harmless Outputs に表示するカード内容（タイトル/説明/リンク）は運用者が管理・更新する
- X は名称変更があり得るため、表示ラベルは運用者の意図に合わせて変更可能とする（例: Twitter / X）

## Out of Scope

- ユーザーアカウント作成、ログイン、コメント等の双方向機能
- カード内容の自動生成や、閲覧者がカード一覧を編集する機能

## Dependencies

- 外部リンク先（GitHub、SNS、記事等）の可用性
- プレビュー画像や指標の提供可否（提供されない場合はフォールバック表示で満たす）
