/*
 * @Autor: XiaoWen
 * @Description: 
 * @Date: 2020-12-15 15:13:53
 * @LastEditors: XiaoWen
 * @LastEditTime: 2020-12-15 15:59:56
 */
// 末端样式-lineCap
ctx.save(); // 保存当前设置
ctx.beginPath();
ctx.lineWidth = 16; // 设置线条宽度 单位是像素
ctx.lineCap = 'butt'; // 线条的每个末端添加平直的边缘，默认
ctx.moveTo(20, 10);
ctx.lineTo(100, 10);
ctx.lineTo(100, 50);
ctx.lineTo(20, 50);
ctx.stroke();

ctx.restore(); // 还原当前设置到上次保存点
ctx.beginPath();
ctx.lineWidth = 16; // 设置线条宽度 单位是像素
ctx.lineCap = 'square'; // 线条的每个末端添加圆形线帽（会变长）
ctx.moveTo(20, 100);
ctx.lineTo(100, 100);
ctx.lineTo(100, 150);
ctx.lineTo(20, 150);
ctx.stroke();

ctx.restore();
ctx.beginPath();
ctx.lineWidth = 16;
ctx.lineCap = 'round'; // 线条的每个末端添加正方形线帽（会变长）
ctx.moveTo(20, 200);
ctx.lineTo(100, 200);
ctx.lineTo(100, 250);
ctx.lineTo(20, 250);
ctx.stroke();

// 交汇样式-lineJoin
ctx.restore();
ctx.strokeStyle = '#409eff';
ctx.save();
ctx.beginPath();
ctx.lineWidth = 16;
ctx.lineJoin = 'miter'; // 设置或返回所创建边角的类型，当两条线交汇时-创建尖角-默认
ctx.moveTo(150, 10);
ctx.lineTo(250, 10);
ctx.lineTo(250, 50);
ctx.lineTo(150, 50);
ctx.stroke();

ctx.restore();
ctx.beginPath();
ctx.lineWidth = 16;
ctx.lineJoin = 'bevel'; // 设置或返回所创建边角的类型，当两条线交汇时-创建斜角
ctx.moveTo(150, 100);
ctx.lineTo(250, 100);
ctx.lineTo(250, 150);
ctx.lineTo(150, 150);
ctx.stroke();

ctx.restore();
ctx.beginPath();
ctx.lineWidth = 16; // 设置线条宽度 单位是像素
ctx.lineJoin = 'round'; // 设置或返回所创建边角的类型，当两条线交汇时-创建圆角
ctx.moveTo(150, 200);
ctx.lineTo(250, 200);
ctx.lineTo(250, 250);
ctx.lineTo(150, 250);
ctx.stroke();

// 设置最大斜接长度
ctx.restore();
ctx.strokeStyle = 'pink';
ctx.save();
ctx.beginPath();
ctx.lineWidth = 16;
ctx.lineJoin = 'miter'; // 必须设置为默认
ctx.miterLimit = 1; // miterLimit 属性设置或返回最大斜接长度
ctx.moveTo(350, 10);
ctx.lineTo(450, 25);
ctx.lineTo(350, 50);
ctx.stroke();

ctx.save();
ctx.beginPath();
ctx.lineWidth = 16;
ctx.lineJoin = 'miter';
ctx.miterLimit = 5; // miterLimit 属性设置或返回最大斜接长度
ctx.moveTo(350, 100);
ctx.lineTo(450, 115);
ctx.lineTo(350, 140);
ctx.stroke();

// 设置虚线
ctx.strokeStyle = 'yellow';
ctx.lineWidth = 2;
ctx.save();
ctx.setLineDash([5, 10]); // 第一个间隔是5（有色段），第二个间隔是10（无色段）
ctx.strokeRect(20, 350, 100, 50);

ctx.save();
ctx.setLineDash([5, 10, 15, 20]); // 数组可有多个元素
ctx.strokeRect(150, 350, 100, 50);

ctx.save();
ctx.setLineDash([5]); // 数组的元素个数为奇数时，API自动补为偶数，等价于[5, 5]
ctx.strokeRect(280, 350, 100, 50);

ctx.save();
ctx.setLineDash([5, 5]);
ctx.strokeRect(400, 350, 100, 50);