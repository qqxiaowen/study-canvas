/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-15 14:38:30
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-15 15:05:08
 */
// 线性渐变
var linearColor = ctx.createLinearGradient(10, 10, 190, 190); // 创建线性渐变颜色，渐变开始的x坐标、y坐标、结束的x坐标、y坐标
linearColor.addColorStop(0, 'black'); // 添加渐变的节点，介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置、颜色值
linearColor.addColorStop(0.15, 'gray');
linearColor.addColorStop(0.7, 'white');
linearColor.addColorStop(1, 'pink');

// 径向渐变
var radialColor = ctx.createRadialGradient(300, 300, 20, 300, 300, 150); // 径向渐变，渐变开始的x坐标、y坐标、半径、结束的x坐标、y坐标、半径
radialColor.addColorStop(0.15, 'red');
radialColor.addColorStop(0.7, 'pink');
radialColor.addColorStop(1, 'white');

ctx.beginPath();
ctx.fillStyle = linearColor;
ctx.fillRect(0, 0, 200, 200);

ctx.beginPath();
ctx.fillStyle = radialColor;
ctx.arc(300, 300, 150, 0, Math.PI * 2);
ctx.fill();