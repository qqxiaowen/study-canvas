/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-15 15:05:00
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-17 09:34:36
 */

// 纹理填充
var img = new Image();
// img.src = '../img/img-shop.jpg';
img.src = '../img/sha.png';
img.onload = function() {
  ctx.beginPath();
  var patternColor = ctx.createPattern(img, 'repeat'); // 图片填充，图片、重复度
  ctx.fillStyle = patternColor;
  ctx.fillRect(0, 0, 500, 500);
}