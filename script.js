const header = document.querySelector('header');
let prevY = window.pageYOffset; // 前回のスクロール位置を初期化

window.addEventListener('scroll', () => {
  const currentY = window.pageYOffset; // 現在のスクロール位置を取得
  if (currentY < prevY) { // 上にスクロールしている場合
    header.classList.remove('hidden'); // hiddenクラスを削除して表示する
  } else { // 下にスクロールしている場合
    if (currentY > 0) { //Safariなどのバウンススクロール対策
      header.classList.add('hidden'); // hiddenクラスを追加して非表示にする
    }
  }
  prevY = currentY; // 前回のスクロール位置を更新
});

const hamburger = document.querySelector(".js-ham");
const drawer = document.querySelector(".js-drawer");
const drawerLinks = document.querySelectorAll(".js-drawer a");

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  drawer.classList.toggle('is-active');
});

drawerLinks.forEach(drawerLink => {
  drawerLink.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    drawer.classList.remove('is-active');
  });
});
function toggle() {
  document.querySelector('.ham span').classList.toggle('open');
  document.querySelector('.ham').classList.toggle('open');
}
