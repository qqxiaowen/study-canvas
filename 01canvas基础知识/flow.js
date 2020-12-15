/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-14 15:21:13
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-14 16:14:20
 */
// 黄色圆圈
ctx.beginPath();
ctx.arc(200, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = 'yellow';
ctx.fill();

// 9个红色圆圈
for (var item of [
  {x: 200, y: 100},
  {x: 200, y: 200},
  {x: 250, y: 150},
  {x: 150, y: 150},
  {x: 233, y: 116},
  {x: 233, y: 183},
  {x: 167, y: 116},
  {x: 167, y: 183},
]) {
  ctx.beginPath();
  ctx.arc(item.x, item.y, 19, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.strokeStyle = '#CCC';
  ctx.fill();
  ctx.stroke();
}

// 白色圆圈
ctx.beginPath();
ctx.arc(200, 140, 10, 0, Math.PI * 2);
ctx.fillStyle = '#FFF';
ctx.fill();

// 弧线
ctx.beginPath();
ctx.arc(350, 230, 150, Math.PI, Math.PI *2/3, true);
ctx.lineWidth = 16;
ctx.lineCap = 'round';
ctx.strokeStyle = 'green';
ctx.stroke();

// 切线圆弧
ctx.beginPath();
ctx.moveTo(300, 300);
ctx.arcTo(250, 250, 250, 350, 20);
// ctx.lineTo(250, 300);
ctx.stroke();