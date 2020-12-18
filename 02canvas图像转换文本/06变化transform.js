/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-18 11:13:50
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-18 11:34:10
 */
ctx.fillStyle = 'pink';
ctx.fillRect(100, 50, 100, 50);

ctx.save();

ctx.transform(2, 0.5, 0.5, 2, 50, 50); // x缩放（1为原状）、x倾斜（0为原装）、y倾斜、y缩放、x平移、y平移 影响后续绘制，可使用svae+stroke清除
ctx.fillStyle = 'blue';
ctx.fillRect(100, 50, 100, 50);

// // ctx.restore();
// ctx.fillStyle = 'yellow';
// ctx.fillRect(100, 0, 100, 50);

ctx.transform(1, 0, 0, 1, 50, 50);
ctx.fillStyle = 'yellow';
ctx.fillRect(100, 0, 100, 50);

// transform直接再原有变化的基础上再变化