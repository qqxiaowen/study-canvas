/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-18 15:06:44
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-21 09:52:27
 */

const [width, height] = [window.innerWidth - 100, window.innerHeight - 100];
canvas.width = width;
canvas.height = height;
const C = 2 * Math.PI;
const startPosX = -450;
class Ball {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }
  draw(ctx) {
    // console.log(this.y)
    ctx.save();
    ctx.clearRect(0, 0, width, height);
    ctx.translate(width / 2, 0);//原点坐标左移

    //画出中线和两条碰撞线
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, height);
    ctx.moveTo(-startPosX, 0);
    ctx.lineTo(-startPosX, height);
    ctx.moveTo(startPosX, 0);
    ctx.lineTo(startPosX, height);
    ctx.stroke();

    //画球
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, C);
    ctx.fill();
    ctx.restore();

  }
}

const ball = new Ball(startPosX + 30, 30, 30, 'pink');
ball.draw(ctx);

let v = 5;
uniformMotion();

function uniformMotion() {
  ball.x += v;
  if (Math.abs(ball.x) > -startPosX - 30) {
    v = -v;
  }
  ball.draw(ctx);
  requestAnimationFrame(uniformMotion);
}
