/// <reference path='board.ts'/>
/// <reference path='snake.ts'/>
/// <reference path='treat.ts'/>

class Renderer {
	
	private snake: Snake;
	private board: Board;
	private p: RendererProperties;
	
	private M: number;
	private N: number;
	
	private gameElement: HTMLElement;
	private cells: HTMLElement[][];

	
	public constructor(snake: Snake, board: Board, p: RendererProperties) {
		this.snake = snake;
		this.board = board;
		this.p = p;
		
		this.M = this.board.getSizeProperties().height;
		this.N = this.board.getSizeProperties().width;
		
		this.initialize();
	}
	
	public initialize() {
		this.gameElement = document.getElementById(this.p.gameId);
		while (this.gameElement.firstChild) {
    		this.gameElement.removeChild(this.gameElement.firstChild);
		} // empty the potential children
		this.gameElement.style.width = this.p.cellW * this.M + "px";
		this.gameElement.style.height = this.p.cellH * this.N + "px";
		
		this.cells = new Array(this.M);


		for (let i = 0; i < this.M; i++) {
			this.cells[i] = new Array(this.N);
			for (let j = 0; j < this.N; j++) {
				this.cells[i][j] = document.createElement('div');
				this.gameElement.appendChild(this.cells[i][j]);
			}
		}
	}
	
	public paint() {
		this.paintGrid();
	}
	
	protected paintGrid() {
		//TODO: Score ergens in fixen en dan hier afbeelden


		// Paint the snake
		var snakeFastLookUp = this.snake.getLookUpSnake();
		var head = this.snake.getHead();

		for (let i = 0; i < this.M; i++) {
			for (let j = 0; j < this.N; j++) {
				let newClass = snakeFastLookUp[i+"-"+j] ? "cell snake" : "cell empty";
				if (this.cells[i][j].className != newClass) {
					this.cells[i][j].className = newClass;
				}
			}
		}

		// Paint the head
		this.cells[head.x][head.y].className = "cell snake-head snake-head-"+this.snake.getDirection();

		// Paint the treat
		var treat = this.board.getTreat();
		var location = treat.getLocation();
		var color = treat.getColor();
		this.cells[location.x][location.y].className = "cell treat-"+color;

	}
}

interface RendererProperties {
	cellW : number;
	cellH : number;
	gameId : string;
}