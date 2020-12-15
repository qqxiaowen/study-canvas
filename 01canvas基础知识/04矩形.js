/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-15 14:18:04
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-15 14:25:07
 */
ctx.beginPath();
ctx.rect(20, 20, 100, 50); // 矩形的起点x坐标，矩形的起点y坐标，矩形的宽度，矩形的高度
ctx.strokeStyle = '#409eff';
ctx.stroke();
ctx.fillStyle = 'pink';
ctx.fill();

// 填充矩形
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.fillRect(150, 20, 100, 50);

// 描边矩形
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.strokeRect(20, 100, 100, 50);

// 清理矩形
ctx.beginPath();
ctx.clearRect(30, 50, 200, 80);
