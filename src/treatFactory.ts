/// <reference path='sizeProperties.ts'/>
/// <reference path='treat.ts'/>

class TreatFactory{
    // punten, kleur, locatie

    private x_cord;
    private y_cord;
    private fruitSelecter;

    private APPLE = 1;
    private ORANGE = 2;
    private LEMON = 3;
    private CHERRY = 4;
    private BERRY = 5;

    constructor(){

    }

    public setPosition(x: number, y: number){
        this.x_cord = x;
        this.y_cord = y;

        return this;
    }

    public setRandomPosition(sizeProperties : SizeProperties){
        this.x_cord =  Math.floor(Math.random()*sizeProperties.height);
        this.y_cord =  Math.floor(Math.random()*sizeProperties.width);
        return this;
    }

    //Pick a treat
    public getRandomTreatType(){
        this.fruitSelecter = Math.floor((Math.random()*5))+1;
        return this;
    }

    public build(){
        switch(this.fruitSelecter) {
            case this.APPLE:
                return new SpeedTreatDecorator(new Apple(this.x_cord, this.y_cord));

            case this.ORANGE :
                return new Orange(this.x_cord, this.y_cord);

            case this.LEMON :
                return new Lemon(this.x_cord, this.y_cord);

            case this.BERRY :
                return new Berry(this.x_cord, this.y_cord);

            case this.CHERRY:
                return new Cherry(this.x_cord, this.y_cord);

            default:
                throw new Error("Fruit wasn't created");
        }
    }

}




