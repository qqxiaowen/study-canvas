/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-17 13:57:54
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-17 14:14:56
 */
ctx.beginPath();

ctx.moveTo(50, 50);
ctx.lineTo(250, 50);
ctx.lineTo(250, 150);
// ctx.lineTo(50, 150);
ctx.closePath();

// ctx.rect(50, 50, 200, 100);
ctx.stroke();

function isExist(x, y) {
  console.log('begin');
  if (ctx.isPointInPath(x, y)) { // 点是否在路径内
    console.log('true');
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = '#409eff';
    ctx.strokeRect(x, y, 10, 10)
  }
}

isExist(120, 60);