let mySwiper01 = new Swiper(".swiper01", {
  // Optional parameters
  loop: true, // ループの指定
  effect: "fade", //フェードの指定
  autoplay: {
  delay: 3000, //４秒後に次のスライドへ
  disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
  },
  speed: 1900, //1秒かけてフェードで切り替わる
  pagination: { // 丸のページネーションを使うなら書く
    el: '.swiper-pagination',
    // 丸のページネーションクリックできます
    clickable: true,
},
  navigation: { // 左右のページ送を使うなら書く
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev"
  }
  });

  let mySwiper02 = new Swiper(".swiper02", {
    // オプションパラメータ(一部のみ抜粋)
    loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
    speed: 600, // スライドが切り替わるトランジション時間(ミリ秒)。 500
    slidesPerView: 3, // 何枚のスライドを表示するか（小数点も可能　※両端のコンテンツが欠ける）
    spaceBetween: 20, // スライド間の余白サイズ(ピクセル)
    direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
    effect: 'slide', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
    centeredSlides: true, //スライドのスタートを左端（false）にするか真ん中（true）にするか

    // スライダーの自動再生
    // autoplay: true 　のみなら既定値での自動再生
    autoplay: {
        delay: 1500, // スライドが切り替わるまでの表示時間(ミリ秒)
        stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
        disableOnInteraction: true, // ユーザーのスワイプ操作を検出したら自動再生を中止するか
    },

    // レスポンシブ化条件
    breakpoints: {
        // 896ピクセル幅以下になったら
        896: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        // 767ピクセル幅以下になったら
        767: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        // 559ピクセル幅以下になったら
        559: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
    },

    // ページネーションを表示する場合
    // pagination: {
    //     el: '.swiper-pagination', // ページネーションを表示するセレクタ
    // },

    // 前後スライドへのナビゲーションを表示する場合
    // navigation: {
    //     nextEl: '.swiper-button-next', // 次のスライドボタンのセレクタ
    //     prevEl: '.swiper-button-prev', // 前のスライドボタンのセレクタ
    // },

    // スクロールバーを表示する場合
    // scrollbar: {
    //     el: '.swiper-scrollbar', // スクロールバーを表示するセレクタ
    // },
    
    });

    var swiper03 = new Swiper('.swiper03', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    // ページネーションを表示する場合
    pagination: {
        el: '.swiper-pagination', // ページネーションを表示するセレクタ
    },

        //何枚のスライドを表示させる
          slidesPerView: 3,
        // スライドとスライドの間の距離（余白）(px)
          spaceBetween: 40,
        //   最初に何枚目のスライドを表示させる
          initialSlide: 2,
        //スライダーの最後までいったら先頭に戻る
          loop: true,

          breakpoints: {
            // 896ピクセル幅以下になったら
            896: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            // 767ピクセル幅以下になったら
            767: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            // 559ピクセル幅以下になったら
            559: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
        },
        });



