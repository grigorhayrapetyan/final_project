var LivingCreature = require('./LivingCreature.js');
module.exports = class Grass extends LivingCreature{
    
    constructor(x, y, index){
        super(x,y,index);
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
    this.getNewCoordinates;
    return super.chooseCell(character);
}

    mult() {

        
        this.multiply++;
        var arr = this.chooseCell(0);
        var newCell = arr[Math.floor(Math.random() * arr.length)];
        if (newCell && this.multiply > 0) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 1;
            var gr = new Grass(newX, newY, 1)
            grassArr.push(gr);
        }
    }

}