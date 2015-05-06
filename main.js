/**
 * Copyright 2014-2015 daiz, griddlesJS project.
 * Code licensed under the MIT License.
 * Documentation licensed under CC BY 3.0.
 */

var griddleCardsTag;

/**
 * `griddles-cards-ready`イベントは、
 * <griddle-cards> のDOM構築が完了し、
 * プログラムからアクセス可能になったときに発火します。
 */
window.addEventListener("griddle-cards-ready", function() {
  griddleCardsTag = document.querySelector("griddle-cards");
  // カードを表示するデモを実行します。
  demoMakeCards();
}, false);

/**
 * `griddles-cards-click`イベントは、
 * <griddle-cards> タグに与えられたすべてのカードを
 * 表示し終えたときに発火します。
 */
window.addEventListener("griddle-cards-end", function() {
  console.info('griddle-cards: 表示完了');
  // 表示されているカードを取得するデモを実行します。
  demoGetAllCards();
}, false);

/**
 * `griddles-cards-click`イベントは、
 * カードコンテンツがクリックされたときに発火します。
 */
window.addEventListener("griddles-cards-click", function() {
  // クリックされたカードの情報は
  // <griddle-cards> の lastClickedCard メンバにアクセスすることで
  // 取得できます。
  var clickedCard = griddleCardsTag.lastClickedCard;
  console.log(clickedCard);
}, false);

/**
 * <griddle-cards> でカードコンテンツを表示する
 * 簡単なデモです。
 */
var demoMakeCards = function() {
  // 配列photos内の写真をカードで表示します。
  var photos = [
    'photos/0.jpg', 'photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg',
    'photos/4.jpg'
  ];
  var cards = [];
  for(var i = 0; i < photos.length; i++) {
    // オブジェクト card は表示するカード一枚分の情報を保持しています。
    var card = {
      "src": photos[i],
      "text": [(i+1) + '枚目のサンプル写真', 'block'],
      "dataset": {
        "shadowZ": i % 4,
        "foo": "foo!"
      }
    };
    cards.push(card);
  }
  // これまでに表示したカードを消去したい場合は
  // <griddle-cards> の clearStreams関数を実行します。
  griddleCardsTag.clearStreams();
  // <griddle-cards> の setCards関数を呼び出すと
  // 引数に与えたカードの表示が開始されます。
  // すべてのカードの表示が完了すると`griddle-cards-end`イベントが発火します。
  griddleCardsTag.setCards(cards);
}

/**
 * <griddle-cards> に表示されているカードを取得する
 * 簡単なデモです。
 */
var demoGetAllCards = function() {
  // <griddle-cards> の getCards関数を呼び出すと
  // 現在表示されている全てのカードコンテンツを取得することができます。
  var cardsInStreams = griddleCardsTag.getCards();
  console.log(cardsInStreams);
}
