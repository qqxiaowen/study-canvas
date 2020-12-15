/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-14 14:54:04
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-14 15:12:50
 */
ctx.beginPath();
ctx.moveTo(50, 60);
ctx.quadraticCurveTo(70, 150, 200, 30); // (贝塞尔控制点的x坐标，贝塞尔控制点的y坐标，结束点的x坐标，结束点的y坐标)
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 200);
ctx.bezierCurveTo(50, 400, 200, 400, 200, 200); // (贝塞尔控制点1的x坐标，贝塞尔控制点1的y坐标，贝塞尔控制点2的x坐标，贝塞尔控制点2的y坐标结束点的x坐标，结束点的y坐标)
ctx.stroke();