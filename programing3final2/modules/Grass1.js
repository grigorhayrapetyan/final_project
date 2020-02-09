var LivingCreature = require('./LivingCreature.js');
module.exports = class Grass1 extends LivingCreature{
    constructor(x, y, index){
        super(x,y,index);
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2],
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
        this.getNewCoordinates;
        return super.chooseCell(character);
    }


    mult() {
        this.multiply++
        var arr = this.chooseCell(0);
        var newCell = arr[Math.floor(Math.random() * arr.length)];
        if (newCell && this.multiply > 0) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 5;
            var grs = new Grass1(newX, newY, 5)
            grass1Arr.push(grs);
        }
    }

}