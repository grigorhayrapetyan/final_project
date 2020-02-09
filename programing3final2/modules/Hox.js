var LivingCreature = require('./LivingCreature.js');

module.exports = class Hox extends LivingCreature{
    constructor(x, y) {
        super(x, y);
        this.life = 13;
        this.multiply = 23;
        this.energy=8;
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

        
        this.multiply++;
        var arr = this.chooseCell(0);
        var newCell = arr[Math.floor(Math.random() * arr.length)];
        if (newCell && this.multiply > 0) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 6;
            var hx = new Grass(newX, newY, 6)
            hoxArr.push(hx);
        }
    }

}
//     mult() {
//         var arr = this.chooseCell(0);
//         var newCell = arr[Math.floor(Math.random() * arr.length)];


//         if (newCell && this.energy > 7) {
//             var newX = newCell[0];
//             var newY = newCell[1];

//             matrix[newY][newX] = 6;
//             var hx = new Hox(newX, newY, 6)
//             hoxArr.push(hx);
//         }
//     }

//     move() {

//         var arr = this.chooseCell(0);
//         var newCell = arr[Math.floor(Math.random() * arr.length)];
//         this.energy--;

//         if (newCell) {
//             var newX = newCell[0];
//             var newY = newCell[1];

//             matrix[newY][newX] = 6;
//             matrix[this.y][this.x] = 0;
//             this.x = newX;
//             this.y = newY;
//         }
//     }

//     eat() {
//         var food = this.chooseCell(1);
//         var newCell = food[Math.floor(Math.random() * food.length)];
//         var food1 = this.chooseCell(5);
//         var newCell1 = food1[Math.floor(Math.random() * food1.length)];
//         if (newCell) {

//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = 6;
//             matrix[this.y][this.x] = 0;

//             for (var i in grassArr) {
//                 if (grassArr[i].x == newX && grassArr[i].y == newY) {

//                     grassArr.splice(i, 1);
//                 }

//             }

//             this.x = newX;
//             this.y = newY;
//             this.energy += 2;

//         }
//         if (newCell1) {

//             var newX = newCell1[0];
//             var newY = newCell1[1];
//             matrix[newY][newX] = 6;
//             matrix[this.y][this.x] = 0;

//             for (var i in grass1Arr) {
//                 if (grass1Arr[i].x == newX && grass1Arr[i].y == newY) {

//                     grass1Arr.splice(i, 1);
//                 }

//             }

//             this.x = newX;
//             this.y = newY;
//             this.energy += 2;

//         }

//     }

//     die() {
//         if (this.energy <= 0) {
//             matrix[this.y][this.x] = 0;
//             for (var i in hoxArr) {
//                 if (hoxArr[i].x == this.x && hoxArr[i].y == this.y) {

//                     hoxArr.splice(i, 1);
//                 }

//             }
//         }

//     }

// }



