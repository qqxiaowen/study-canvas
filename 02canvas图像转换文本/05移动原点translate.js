/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-18 10:54:46
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-18 10:59:20
 */
ctx.save();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.stroke();

ctx.translate(200, 100); // 移动原点0,0的位置，影响后续绘制，可使用svae+stroke清楚
ctx.beginPath();
ctx.strokeStyle = 'yellow';
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.stroke();

ctx.restore();
ctx.beginPath();
ctx.arc(100, 300, 50, 0, Math.PI * 2);
ctx.stroke();
