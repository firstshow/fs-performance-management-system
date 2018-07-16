const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const POINT = 35
let canvas
let context
let circleArr
/**
 * 初始化canvas
 */
function initCanvas() {
    canvas = document.getElementById('Mycanvas')
    canvas.width = WIDTH
    canvas.height = HEIGHT
    context = canvas.getContext('2d')
    context.strokeStyle = 'rgba(100,100,100,.2)'
    context.strokeWidth = 1
    context.fillStyle = 'rgba(100,100,100,.1)'
    circleArr = []
}

/**
 * 线条：开始xy坐标，结束xy坐标，线条透明度
 * @param x
 * @param y
 * @param _x
 * @param _y
 * @param o
 * @constructor
 */
function Line(x, y, _x, _y, o) {
    this.beginX = x
    this.beginY = y
    this.closeX = _x
    this.closeY = _y
}

/**
 * 点：圆心xy坐标，半径，每帧移动xy的距离
 * @param x
 * @param y
 * @param r
 * @param moveX
 * @param moveY
 * @constructor
 */
function Circle(x, y, r, moveX, moveY) {
    this.x = x
    this.y = y
    this.r = r
    this.moveX = moveX
    this.moveY = moveY
}

/**
 * 生成max和min之间的随机数
 * @param max
 * @param _min
 * @returns {number}
 */
function num(max, _min) {
    let min = arguments[1] || 0
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 绘制原点
 * @param cxt
 * @param x
 * @param y
 * @param r
 * @param moveX
 * @param moveY
 * @returns {Circle}
 */
function drawCricle(cxt, x, y, r, moveX, moveY) {
    let circle = new Circle(x, y, r, moveX, moveY)
    cxt.beginPath()
    cxt.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI)
    cxt.closePath()
    cxt.fill()
    return circle
}

/**
 * 绘制线条
 * @param cxt
 * @param x
 * @param y
 * @param _x
 * @param _y
 * @param o
 */
function drawLine(cxt, x, y, _x, _y, o) {
    let line = new Line(x, y, _x, _y, o)
    cxt.beginPath()
    cxt.strokeStyle = 'rgba(0,0,0,' + o + ')'
    cxt.moveTo(line.beginX, line.beginY)
    cxt.lineTo(line.closeX, line.closeY)
    cxt.closePath()
    cxt.stroke()

}

/**
 * 每帧绘制
 */
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    for(let i = 0; i < POINT; i++) {
        drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r)
    }
    for(let i = 0; i < POINT; i++) {
        for(let j = 0; j < POINT; j++) {
            if(i + j < POINT) {
                let A = Math.abs(circleArr[i + j].x - circleArr[i].x)
                let B = Math.abs(circleArr[i + j].y - circleArr[i].y)
                let lineLength = Math.sqrt(A * A + B * B)
                let C = 1 / lineLength * 7 - 0.009
                let lineOpacity = C > 0.03 ? 0.03 : C
                if(lineOpacity > 0) {
                    drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i + j].x, circleArr[i + j].y, lineOpacity)
                }
            }
        }
    }
}

/**
 * 初始化生成原点
 */
function init() {
    circleArr = []
    for(let i = 0; i < POINT; i++) {
        circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10) / 40, num(10, -10) / 40))
    }
    draw()
}

export default {
    render() {
        initCanvas()
        init()
        setInterval(function() {
            for(let i = 0; i < POINT; i++) {
                let cir = circleArr[i]
                cir.x += cir.moveX
                cir.y += cir.moveY
                if (cir.x > WIDTH) {
                    cir.x = 0
                }
                else if (cir.x < 0) {
                    cir.x = WIDTH
                }
                if (cir.y > HEIGHT) {
                    cir.y = 0
                }
                else if (cir.y < 0) {
                    cir.y = HEIGHT
                }
            }
            draw()
        }, 10)
    }
}