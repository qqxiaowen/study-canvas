/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-18 10:09:36
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-18 13:35:48
 */
ctx.strokeStyle = '#409eff';
ctx.lineWidth = 4;

ctx.strokeRect(20, 20, 100, 50);
ctx.save();
ctx.scale(0.5, 0.5); // 缩放当前绘图的宽度 (1=100%, 0.5=50%, 2=200%, 依次类推)、高度，影响后续绘制，可使用svae+stroke清除
ctx.strokeRect(20, 20, 100, 50);
ctx.restore();
ctx.strokeRect(150, 20, 100, 50);

ctx.fillStyle = 'pink';

ctx.fillRect(100, 100, 100, 50);
ctx.scale(2, 2);
ctx.fillRect(100, 100, 100, 50);
ctx.fillRect(100, 200, 100, 50);
