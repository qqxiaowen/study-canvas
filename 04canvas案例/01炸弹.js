/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-18 14:30:21
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-18 14:49:32
 */
var img = new Image();
img.src = '../img/boom.png';
img.onload = boom;

function boom() {
  var step = 0;
  var timer = setInterval(() => {
    console.log('step:', step);
    ctx.drawImage(img, step * 256, 0, 256, 256, 50, 50, 400, 400);
    step ++;
    if (step === 7) { step = 0; };
  }, 120)

  setTimeout(() => {
    clearInterval(timer);
    // ctx.clearRect(0, 0, 500, 500);
  }, 3000)
}