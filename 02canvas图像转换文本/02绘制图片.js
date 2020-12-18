/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-18 09:53:54
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-18 10:01:48
 */
var img = new Image();
img.src = '../img/sha.png';
img.onload = function() {
  // ctx.drawImage(img, 10, 10, 300, 300); // 绘制图片，图片属性、（4个可省略的剪切属性）图标左上角的x值、y值、图片的宽、图片的高（宽高可忽略）
  ctx.drawImage(img, 80, 30, 100, 100, 10, 10, 300, 300); // 绘制图片，（4个可省略的属性：剪切的x坐标位置、剪切的y坐标位置、剪切图像的宽度、剪切图像的高度）
}