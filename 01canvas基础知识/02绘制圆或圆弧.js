/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-14 11:17:03
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-14 15:20:47
 */
ctx.beginPath();
ctx.arc(300, 75, 50, 0, Math.PI * 2);
ctx.strokeStyle = 'pink';
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 75, 50, 0, Math.PI / 4, true); // 圆心x坐标，y坐标，半径，起始角（0度在表盘3点钟方向），结束角，逆/顺绘图(默认是false顺，true为逆)，Math.PI为圆周率
ctx.strokeStyle = 'yellow';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 200);
ctx.arc(100, 200, 50, -Math.PI / 2, -Math.PI, true);
ctx.fillStyle = '#409eff';
ctx.fill(); // 填充当前绘图（路径）

ctx.beginPath();
ctx.moveTo(300, 200);
ctx.arc(300, 200, 50, -Math.PI / 2, -Math.PI, true);
ctx.closePath();
ctx.fillStyle = '#409eff';
ctx.arc(300, 200, 50, 0, Math.PI / 2);
ctx.fillStyle = 'gray';
ctx.closePath();
ctx.stroke(); // 填充当前绘图（路径）

ctx.beginPath();
ctx.moveTo(50, 300);
ctx.arcTo(300, 300, 300, 600, 50); // 切线圆弧(弧的起点的x坐标，弧的起点的y坐标，弧的终点的x坐标，弧的终点的y坐标，半径)
ctx.lineTo(300, 500);
ctx.stroke();