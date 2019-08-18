/// <reference path='sizeProperties.ts'/>
/// <reference path='snake.ts'/>
/// <reference path='game.ts'/>

abstract class Treat {
    color: string;
    points: number;
    location: any;
    alreadySet: boolean;
    size: number;

    abstract getLocation();
    abstract getColor();
    abstract getPoints();
}

class Apple implements Treat{
    public size = 1;
    public location: any;
    public alreadySet;
    public x;
    public y;

    public points = 5;
    public color = "green";

    public constructor(x_cord : number, y_cord : number)
    {
        this.location = {x : x_cord, y : y_cord};
        this.alreadySet = false;
    }

    public getLocation(){
        return this.location;
    }

    public getColor(){
        return this.color;
    }

    public getPoints(){
        return this.points;
    }
}

class Lemon implements Treat {
    public size = 1;
    public location: any;
    public alreadySet;
    public x;
    public y;

    public points = 3;
    public color = "yellow";

    public constructor(x_cord : number, y_cord : number)
    {
        this.location = {x : x_cord, y : y_cord};
        this.alreadySet = false;
    }

    public getLocation(){
        return this.location;
    }

    public getColor(){
        return this.color;
    }

    public getPoints(){
        return this.points;
    }
}

class Orange implements Treat {
    public size = 1;
    public location: any;
    public alreadySet;
    public x;
    public y;

    public points = 2;
    public color = "orange";

    public constructor(x_cord : number, y_cord : number)
    {
        this.location = {x : x_cord, y : y_cord};
        this.alreadySet = false;
    }

    public getLocation(){
        return this.location;
    }

    public getColor(){
        return this.color;
    }

    public getPoints(){
        return this.points;
    }
}

class Berry implements Treat {
    public size = 1;
    public location: any;
    public alreadySet;
    public x;
    public y;

    public points = 1;
    public color = "blue";

    public constructor(x_cord : number, y_cord : number)
    {
        this.location = {x : x_cord, y : y_cord};
        this.alreadySet = false;
    }

    public getLocation(){
        return this.location;
    }

    public getColor(){
        return this.color;
    }

    public getPoints(){
        return this.points;
    }
}

class Cherry implements Treat {
    public size = 1;
    public location: any;
    public alreadySet;
    public x;
    public y;

    public points = 8;
    public color = "red";

    public constructor(x_cord : number, y_cord : number)
    {
        this.location = {x : x_cord, y : y_cord};
        this.alreadySet = false;
    }

    public getLocation(){
        return this.location;
    }

    public getColor(){
        return this.color;
    }

    public getPoints(){
        return this.points;
    }
}

abstract class TreatDecorator implements Treat {
    public size = 1;
    public location: any;
    public alreadySet;
    public x;
    public y;

    public points;
    public color;

    public constructor(protected treat: Treat)
    {
        this.size = treat.size;
        this.location = treat.location;
        this.alreadySet = treat.alreadySet;
        this.points = treat.points;
        this.color = treat.color;
    }

    public getLocation() {
        return this.treat.getLocation();
    }

    public getColor() {
        return this.treat.getColor();
    }

    public getPoints() {
        return this.treat.getPoints();
    }
}

class SpeedTreatDecorator extends TreatDecorator {

    public constructor(treat: Treat) {
        super(treat);
        this.speedUpSnake();
    }

    public speedUpSnake()
    {
        console.log("De slang HAD sneller kunnen gaan");
        //Game.speed.increaseSpeed();
    }
}

