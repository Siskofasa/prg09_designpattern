/// <reference path='board.ts'/>
/// <reference path='snakePartIteratorInterface.ts'/>

class Snake {
	private direction : string;
	private size : SizeProperties;
	private elements : SnakeParts[];
	private elongation : number;
	private alreadySet :  boolean;

	public snakePartIterator : SnakePartIterator;
	
	public static U = "Up";
	public static D = "Down";
	public static L = "Left";
	public static R = "Right";
	
	public constructor(
		xInit : number, 
		yInit : number, 
		size: SizeProperties,
		directionInit: string) 
	{
		this.elements = [];
		this.elements.push({x : xInit, y : yInit});
		this.direction = directionInit;
		this.size = size;
		this.elongation = 0;	
		this.alreadySet = false;
	}
	
	public move() {
		var lastElement = this.elements[this.elements.length-1];
		
		// Reinitialise the alreadySet variable
		this.alreadySet = false;
		
		// Elongate or just move
		if (this.elongation) {
			this.elongation--;
		} else {
			this.elements = this.elements.slice(1); // pop the last one	
		}
		
		// get the direction move
		switch(this.direction) {
			case Snake.U :
				var newElement = {x: lastElement.x - 1, y: lastElement.y};
				break;
			case Snake.D :
				var newElement = {x: lastElement.x + 1, y: lastElement.y};
				break;
			case Snake.L :
				var newElement = {x: lastElement.x, y: lastElement.y - 1};
				break;
			case Snake.R :
				var newElement = {x: lastElement.x, y: lastElement.y + 1};
				break;
			default:
				throw new Error("Unknown direction " + this.direction);
		}
		
		// got to the other side
		if (newElement.x < 0) {
			newElement.x += this.size.width;
		}
		if (newElement.x >= this.size.width) {
			newElement.x -= this.size.width;
		}
		if (newElement.y < 0) {
			newElement.y += this.size.height;
		}
		if (newElement.y >= this.size.height) {
			newElement.y -= this.size.height;
		}
		
		this.elements.push(newElement);
	}
	
	public isLastMoveValid() : boolean {		
		var lastElement = this.elements[this.elements.length-1];
		var isValid = true;


		this.elements.forEach(element => {
			if (element != lastElement && element.x == lastElement.x && element.y == lastElement.y) {
				isValid = false;
			}
		});
		return isValid;
	}
	
	public setDirection(direction: string){
		if (this.alreadySet || this.getOpposite(direction) === this.direction) {
			// do nothing
		} else {
			this.direction = direction;
			this.alreadySet = true;
		}
	}
	
	public getDirection() : string {
		return this.direction;
	}
	
	protected getOpposite(direction: string) {
		switch(direction) {
			case Snake.U :
				return Snake.D;
			case Snake.D :
				return Snake.U;
			case Snake.L :
				return Snake.R;
			case Snake.R :
				return Snake.L
		}
	}
	
	public getSnakeParts() {
		return this.elements;
	}
	
	public elongate(size: number) {
		this.elongation = this.elongation + size;
	}

	public getLookUpSnake() {
		var snakeParts = this.getSnakeParts();
		var head = this.getHead();
		var snakeFastLookUp = {};

		while (this.snakePartIterator.hasNext(snakeParts)){

			var snakePartPosition = this.snakePartIterator.currentPosition(snakeParts);
			snakeFastLookUp[snakeParts[snakePartPosition]['x']+"-"+snakeParts[snakePartPosition]['y']] = true;
			//console.log(snakeFastLookUp);
			this.snakePartIterator.next(snakeParts);
		}

		snakeFastLookUp[head.x+"-"+head.y] = false; // set the head to false;

		return snakeFastLookUp;
	}

	public getHead(){
		//var snakeParts = this.getSnakeParts();
		//console.log("head is ", this.snakePartIterator.last());
		this.snakePartIterator = new SnakePartIterator(this.getSnakeParts());
		return this.snakePartIterator.last(this.getSnakeParts());
	}
}

interface SnakeParts {
	x : number;
	y : number;
}


