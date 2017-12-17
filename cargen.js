
var cars = {

    draw_car: function(tyre, car) {

        var tyre_pos = (canvas.height - RoadBallPos[Pos])

        colorBall(tyre[0], tyre_pos, 20, "#333", true);
        colorBall(tyre[1], tyre_pos, 20, "#333", true);

        colorRect(car[0],  (canvas.height - RoadCarPos1[Pos]), 100, 100, RAND[car_color]);
        colorRect(car[1],  (canvas.height - RoadCarPos2[Pos]),  70,  70, RAND[car_color]);
    },

    car1: function() {

        cars.draw_car([tyre1, tyre2], [car1, car2]);

        switch (h) {

            case 1: 
                tyre1++;
                tyre2++;
                car1++;
                car2++;
            break;
      
            case 2: 
                tyre1 += 2;
                tyre2 += 2;
                car1 += 2;
                car2 += 2;
            break;
      
            case 3: 
                tyre1++;
                tyre2++;
                car1++;
                car2++;
        }

        if (car1 >= (canvas.width + 20)) {
            car_color = rand_num(RAND.length);
            car_choose = rand_num(2);
            Pos = rand_num(5);
            
            tyre1 = -120;
            tyre2 = -240;
            car1 = -260;
            car2 = -160;
        }
    },

    car2: function() {

        cars.draw_car([tyre3, tyre4], [car3, car4]);

        switch (h) {

            case 1: 
                tyre3--;
                tyre4--;
                car3--;
                car4--;
            break;

            case 2: 
                tyre3 -= 2;
                tyre4 -= 2;
                car3 -= 2;
                car4 -= 2;
            break;

            case 3: 
                tyre3--;
                tyre4--;
                car3--;
                car4--;
        }

        if (car3 <= -120) {
            car_color = rand_num(RAND.length);
            car_choose = rand_num(2);
            Pos = rand_num(5);

            tyre3 = (canvas.width + 120);
            tyre4 = (canvas.width + 240);
            car3 = 800;
            car4 = 730;
        }
    }

};
