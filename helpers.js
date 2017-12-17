
var h = 0;

var tyre1 = -120;
var tyre2 = -240;
var tyre3 = (640 - tyre1);
var tyre4 = (640 - tyre2);

var car1 = -260;
var car2 = -160;
var car3 = 800;
var car4 = 730;

var RAND = ["cyan", "green", "orange", "red", "silver"];

var RoadBallPos = [80, 100, 120, 140, 160];
var RoadCarPos1 = [180, 200, 220, 240, 260];
var RoadCarPos2 = [150, 170, 190, 210, 230];

var car_color = rand_num(RAND.length);
var car_choose = rand_num(2);
var Pos = rand_num(5);

var IL1 = ["red", "red", "#555", "#555"];
var IL2 = ["#555", "yellow", "#555", "yellow"];
var IL3 = ["#555", "#555", "#0F0", "#555"];

var road_markings = [30, 210, 390, 570];

function rand_num(len) {
    return Math.floor(Math.random() * len);
}

function draw_traffic_light(p, he, lbl, la, lc) {

    colorRect(p[0], p[1], p[2], p[3], "#444"); //Pole
    colorRect(he[0], he[1], he[2], he[3], "#777"); //Head
    colorBall(la, lbl[0], lc, IL1[h], true); //Light 1
    colorBall(la, lbl[1], lc, IL2[h], true); //Light 2
    colorBall(la, lbl[2], lc, IL3[h], true); //Light 3

}

function colorRect(x, y, width, height, color) {
    canvas2d.fillStyle = color;
    canvas2d.fillRect(x, y, width, height);
}

function colorBall(x, y, radius, color, bool) {
    canvas2d.fillStyle = color;
    canvas2d.beginPath();
    canvas2d.arc(x, y, radius, 0, Math.PI * 2, bool);
    canvas2d.fill();
}

function colorText(text, x, y, font, color) {
    canvas2d.fillStyle = color;
    canvas2d.font = font;
    canvas2d.fillText(text, x, y);
}
