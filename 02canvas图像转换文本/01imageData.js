/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-17 15:59:56
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-17 16:56:14
 */
var imageData = ctx.createImageData(180, 90); // 创建imageData，宽度，长度
console.log('imageData: ', imageData); // data.length为2*width*2*height
for (var i = 0; i < imageData.data.length; i += 4) {
  imageData.data[i+0]=255; // ImageData 对象中的每个像素，都存在着四方面的信息，即 RGBA 值
  imageData.data[i+1]=255;
  imageData.data[i+2]=0;
  imageData.data[i+3]=255;
}
ctx.putImageData(imageData, 10, 10); // 放置imageData，放置的起始x坐标，y坐标

var img = new Image();
img.src = '../img/sha.png';
img.onload = function() {
  var shaColor = ctx.createPattern(img, 'repeat');
  ctx.fillStyle = shaColor;
  ctx.fillRect(250, 10, 200, 200);

  var copyData = ctx.getImageData(250, 10, 200, 200); // 获取画布中的一块区域内容，左上角的x坐标，y坐标，长度，宽度
  console.log('copyData: ', copyData);
  for (var i = 4 * 10000; i < 4 * 10000 + 4 * 5000; i ++) { // 修改一段颜色值
    if (i % 4 !== 3) {
      copyData.data[i] = Math.floor(Math.random() * (255 + 1)); // ImageData 对象中的每个像素，都存在着四方面的信息，即 RGBA 值
    } else {
      copyData.data[i] = 255; // 透明度
    }
  }
  ctx.putImageData(copyData, 10, 150);
}

