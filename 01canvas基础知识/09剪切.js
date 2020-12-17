/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-17 09:38:47
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-17 09:54:22
 */

ctx.save();

ctx.beginPath();
ctx.rect(50, 50, 250, 250);
ctx.stroke();
ctx.clip(); // 剪切之后只能在当前区域内作图，可使用svae+restore重置画布设置

// ctx.restore();

ctx.fillStyle = '#409eff';
ctx.fillRect(0, 0, 100, 100);