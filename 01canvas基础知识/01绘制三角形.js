/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-14 11:15:39
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-14 11:44:23
 */
ctx.fillStyle = 'red'; // 设置或返回用于填充绘画的颜色、渐变或模式
ctx.strokeStyle = 'pink'; // 设置或返回用于笔触的颜色、渐变或模式

ctx.beginPath(); // 起始一条路径，或重置当前路径
ctx.moveTo(50, 50); // 把路径移动到画布中的指定点，不创建线条
ctx.lineTo(400, 50);
ctx.lineTo(400,300);
ctx.closePath(); // 创建从当前点回到起始点的路径
ctx.stroke(); // 绘制已定义的路径