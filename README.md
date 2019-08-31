# Heavybit extension for English learners

<a href="https://chrome.google.com/webstore/detail/heavybit-extension-for-en/ahfgdgmheoejjllbgnkegimdiajihbee" target="_blank"><img src="./_assets/ChromeWebStore_BadgeWBorder_v2_496x150.png" width="248" height="75" alt="Available in the Chrome Web Store"></a>

[JAMstack Radio](https://www.heavybit.com/library/podcasts/jamstack-radio/)などのテック系ポッドキャスト番組を配信している[Heavybit Podcasts](https://www.heavybit.com/library/podcasts)のエピソードページに、英語学習教材として使う際に便利な機能の追加・UIの改変をします。

# 機能

1. 再生スピードの変更（`1x, 1.5x, 2x`　→　`0.7x, 0.8x, 1x`）
2. 話者の色分け
3. キー割当
  | Key             | Function                         |
  |:----------------|:---------------------------------|
  | `[Space]`       | 再生・一時停止                     |
  | `[Left Arrow]`  | 7秒巻き戻し                       |
  | `[Right Arrow]` | 7秒早送り                         |
  | `s`             | イントロをスキップ（50秒時点から再生） |

機能追加の要望は[`feature request`ラベルを付きのIssue](https://github.com/noracast/heavybit-extension/issues?q=is%3Aissue+is%3Aopen+label%3A%22feature+request%22)で受け付けます。

# 使い方

1. インストール
    - [Chrome Web Store](https://chrome.google.com/webstore/detail/heavybit-extension-for-en/ahfgdgmheoejjllbgnkegimdiajihbee)
    - 手動の場合は[この辺](https://support.google.com/chrome/a/answer/2714278?hl=ja)を参考に
2. [JAMstack Radioのエピソードページ](https://www.heavybit.com/library/podcasts/jamstack-radio/ep-1-introducing-jamstack-radio/)を開く
3. 機能が使えるはずです！
    - 再生スピードの変更処理は条件により失敗することもあるので駄目な時はリロードを試してください
    - JAMstack Radio 以外の番組でも有効です

# 開発

```sh
# パッケージインストール
yarn

# buildディレクトリに書き出し
yarn build

# 開発用（file watchして自動build）
yarn start

# distディレクトリにzipファイル書き出し
# zipファイルのversionはpackage.jsonから取得するので、manifest.jsonに揃えるように注意！
yarn zip
```