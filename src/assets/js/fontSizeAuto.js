module.exports = function () {
  window.addEventListener('resize',getBodyFontSize,false);
  window.addEventListener('load',getBodyFontSize,false);
}();
function getBodyFontSize() {
  var html = document.documentElement;  // 获取 html 元素
  var width =  document.body.clientWidth || document.documentElement.clientWidth;   // 获取页面的宽度
  html.style.fontSize = width / 75 * 2 + 'px';
}