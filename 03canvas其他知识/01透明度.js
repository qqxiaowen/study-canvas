/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-18 13:32:56
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-18 13:35:57
 */
ctx.fillStyle = 'pink';
ctx.save();
ctx.fillRect(50, 50, 100, 50);

ctx.globalAlpha = '0.5'; // 设置透明度，影响后续绘制，可使用svae+stroke清除
ctx.fillRect(200, 50, 100, 50);

ctx.restore();
ctx.fillRect(50, 250, 100, 50);
