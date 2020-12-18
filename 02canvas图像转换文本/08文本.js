/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-18 12:28:30
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-18 12:52:51
 */
ctx.save();
ctx.font = '40px Arial';
ctx.fillText('Hello Word', 100, 50); // 绘制普通文字

ctx.font = '40px sans-serif'; // 设置字号和字体，字体不可省略
ctx.fillText('Hello Word', 100, 150);
ctx.fillText('Hello Word', 100, 200, 50); // 文字、x值、y值、最大宽度

ctx.textAlign = 'right'; // 可选start、end、center、left、right；默认是start
ctx.fillText('Hello Word', 100, 250);

ctx.restore();
ctx.font = '20px Arial';
ctx.fillText('jjj', 0, 300);
ctx.textBaseline = 'top'; // 文字基线：可选值alphabetic、top、hanging、middle、ideographic、bottom；默认alphabetic
ctx.fillText('jjj', 50, 300);
ctx.textBaseline = 'hanging';
ctx.fillText('jjj', 100, 300);
ctx.textBaseline = 'middle';
ctx.fillText('jjj', 150, 300);
ctx.textBaseline = 'ideographic';
ctx.fillText('jjj', 200, 300);
ctx.textBaseline = 'bottom';
ctx.fillText('jjj', 250, 300);

ctx.restore();
var textContent = 'HuLu & ZhuMei';
ctx.strokeText(textContent, 50, 350); // 绘制描边文字

console.log(ctx.measureText(textContent)); // 获取文字的信息（没啥用，多个元素出现时还不准）