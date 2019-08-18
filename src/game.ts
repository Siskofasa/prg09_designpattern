/// <reference path='board.ts'/>
/// <reference path='snake.ts'/>
/// <reference path='renderer.ts'/>
/// <reference path='gameController.ts'/>

class Game {
	
	private board : Board;
	private snake : Snake;
	private renderer : Renderer;
	private controller : GameController;
	public speed;
	public score: number;
	
	public constructor(
		sizeProperties: SizeProperties,
		rendererProperties: RendererProperties
	) {
		this.init();
	}
	
	public init() {
		// Initialize the game
		// -- models
		this.score = 0;
		this.board = new Board(sizeProperties, new TreatFactory());
		this.snake = new Snake(
			sizeProperties.height/2, 
			sizeProperties.width/2,
			sizeProperties,
			Snake.R);
		
		// -- renderer
		this.renderer = new Renderer(this.snake, this.board, rendererProperties);
		
		// -- controller
		this.controller = new GameController(this.snake);		
	}
	
	public start() {
		// start the game loop
		this.speed = 200;
		this.renderer.paint();
		this.gameLoop(this);
	}
	
	private gameLoop(that) {
		that.board.updateTreat(false);
		that.dealWithTreat();
		that.snake.move();
    	that.renderer.paint();
		if (that.snake.isLastMoveValid()) {
			that.speed = Math.max(100, that.speed-1);
			window.setTimeout(that.gameLoop, that.speed, that);
		}

		else {
			alert("Haha, you lost");
			that.init();
			that.start();
		}
	}
	
	private dealWithTreat() {
		var treat = this.board.getTreat()
		var location = treat.getLocation();
		this.snake.getSnakeParts().forEach(element => {
			if (element.x == location.x && element.y == location.y) {
				this.snake.elongate(treat.size);
				this.board.updateTreat(true);
				this.score += treat.getPoints();
				this.dealWithTreat();
			}
		});
	}

	public increaseSpeed(){
		this.speed += 0.5;
	}
}