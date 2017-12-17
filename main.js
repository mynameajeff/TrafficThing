/*jshint esversion: 6 */

var clist = [cars.car1, cars.car2];

var canvas;
var canvas2d;

window.onload = function() {

    canvas = document.getElementById("canvas_id");
    canvas2d = canvas.getContext("2d");
    draw();

    setInterval(draw, (1000 / 60));

};

var light_change = function(event) {

    h++;

    if (h == 4) {
        h = h - 4;
    }

};

function draw() {

    //creates black rectangle size of canvas
    colorRect(0, 0, canvas.width, canvas.height, "black");

    //creates gray bar at top of canvas
    colorRect(0, 0, canvas.width, 20, "gray");

    //creates main draw space
    colorRect(0, 30, canvas.width, canvas.height, "#555");

    //creates road
    colorRect(0, 300, canvas.width, 140, "black");

    //creates edge of other pavement
    colorRect(0, 300, canvas.width, 10, "#555");

    //creates white markings on road
    for (i = 0; i < 4; i++) {
        colorRect(road_markings[i], 360, 150, 20, "#CCC");
    }

    //creates floor
    colorRect(0, canvas.height - 40, canvas.width, 40, "#777");

    //creates floor
    colorRect(0, canvas.height - 220, canvas.width, 40, "#777");

    colorText("Traffic Lights", 2, 12, "12px Arial", "black");

    draw_traffic_light(
        [460, 150, 5, 140],
        [442, 70, 40, 80], 
        [85, 110, 135], 
        462, 
        10
    );

    clist[car_choose]();

    draw_traffic_light(
        [75, 190, 10, 260],
        [45, 40, 70, 150],
        [70, 115, 160],
        80,
        18
    );
}
