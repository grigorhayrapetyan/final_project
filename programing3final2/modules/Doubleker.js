var LivingCreature = require('./LivingCreature.js');
module.exports = class Doubleker extends LivingCreature{
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 7;

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
 


    mult() {
        var arr = this.chooseCell(0);
        var newCell = arr[Math.floor(Math.random() * arr.length)];

        if (newCell && this.energy > 11) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 4;
            var xt = new Doubleker(newX, newY, 4)
            doublekerArr.push(xt);
        }
    }

    move() {

        var arr = this.chooseCell(0);
        var newCell = arr[Math.floor(Math.random() * arr.length)];
        this.energy--;

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
    }

    eat() {
        var food = this.chooseCell(2);
        var newCell = food[Math.floor(Math.random() * food.length)];
        var food1 = this.chooseCell(5);
        var newCell1 = food1[Math.floor(Math.random() * food1.length)];
        var food2 = this.chooseCell(1);
        var newCell2 = food2[Math.floor(Math.random() * food2.length)];
        var food3 = this.chooseCell(6);
        var newCell3 = food3[Math.floor(Math.random() * food3.length)];
        if (newCell) {

            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {

                    xotakerArr.splice(i, 1);
                }

            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;

        }

        if (newCell2) {

            var newX = newCell2[0];
            var newY = newCell2[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {

                    grassArr.splice(i, 1);
                }

            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;

        }

        if (newCell1) {

            var newX = newCell1[0];
            var newY = newCell1[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            for (var i in grass1Arr) {
                if (grass1Arr[i].x == newX && grass1Arr[i].y == newY) {

                    grass1Arr.splice(i, 1);
                }

            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;

        }
        if(newCell3){
            var newX = newCell3[0];
            var newY = newCell3[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            for (var i in hoxArr) {
                if (hoxArr[i].x == newX && hoxArr[i].y == newY) {

                    hoxArr.splice(i, 1);
                }

            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;

        }
    }


    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in doublekerArr) {
                if (doublekerArr[i].x == this.x && doublekerArr[i].y == this.y) {

                    doublekerArr.splice(i, 1);
                }

            }
        }

    }

}
