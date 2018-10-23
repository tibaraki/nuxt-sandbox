# ディレクトリ構成

## Vueコンポ関連

Vueコンポーネントの粒度・配置ルール
AtomicDesignっぽく

### components/atoms

UI上の最小単位

- コンポーネント利用: 不可(pureHTML要素のみ)
- Vuex利用: 不可(ドメインに依存しないように書く)
- 例: 入力制約を付加したテキストフィールド等

### components/molecules

atomやpureHTMLを組み合わせてドメイン色のないUI機能を表現するもの

- コンポーネント利用: atomのみ可
- Vuex利用: 不可(ドメインに依存しないように書く)
- 例: カラーピッカー等

### components/organisms

ドメインに強く依存するデータを扱うまとまった単位

- コンポーネント利用: atom/molecule/organisms可
- Vuex利用: 可
- 例: アイテム一覧リスト、アイテム編集フォーム、複数ページで共有するヘッダー等

organismからorganismを利用する場合はコンポーネントをグループ化すること
下記のように整理することで、ItemListRowはItemListのみから利用されることが明示的になる
>例:
>
>organisms/ItemList/ItemList.vue
>
>organisms/ItemList/ItemListRow.vue

### components/pages

各コンポーネントを組み合わせて表示されるページを構成する
ドメインに依存せざるを得ないが、業務ロジックは極力organismsに投げて薄く書く
ページ遷移処理は基本的にpagesにのみ書く

- コンポーネント利用: atom/molecule/organisms可
- Vuex利用: 可

### components/layouts

複数pageでヘッダーやフッターを共有する場合、layoutを作成し、pageからlayoutを呼ぶ

- コンポーネント利用: atom/molecule/organisms可
- Vuex利用: 不可

## assets

js(ts)/css/imageなど
packされる

## static

faviconやrobotsなど
packされない

## store

Vuex用。moduleで書く

## plugins

一度だけ読まれてほしいものを書く。大きいライブラリの初期化やグローバル設定など

## middleware

ルーティング前のフック処理を書く。認証など

## locales

i18n用
