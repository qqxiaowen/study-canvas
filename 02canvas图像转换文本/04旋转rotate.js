/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-18 10:42:42
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-18 10:54:20
 */
ctx.save();
ctx.strokeRect(100, 20, 100, 50);
ctx.rotate(45 * Math.PI / 180); // 旋转角度，以弧度计，egrees*Math.PI/180，影响后续绘制，可使用svae+stroke清楚
ctx.strokeRect(100, 20, 100, 50);
ctx.restore();

ctx.fillRect(200, 20, 100, 50);