/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-18 11:26:31
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-18 11:33:46
 */
ctx.fillStyle = 'pink';
ctx.fillRect(100, 50, 100, 50);

ctx.save();

ctx.setTransform(2, 0.5, 0.5, 2, 50, 50); // x缩放（1为原状）、x倾斜（0为原装）、y倾斜、y缩放、x平移、y平移 影响后续绘制，可使用svae+stroke清除
ctx.fillStyle = 'blue';
ctx.fillRect(100, 50, 100, 50);

ctx.setTransform(1, 0, 0, 1, 50, 50);
ctx.fillStyle = 'yellow';
ctx.fillRect(100, 0, 100, 50);

// setTransform先重置到初状态再变化