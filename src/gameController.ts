/// <reference path='snake.ts'/>
class GameController {
	
	private snake: Snake;
	
	public constructor(snake: Snake) {
		this.snake = snake;
		this.initializeListeners();
	}
	
	public initializeListeners() {
		
		var mapping = {
			//Besturen met WASD
			38 : Snake.U,
			39 : Snake.R,
			40 : Snake.D,
			37 : Snake.L
		};
				
		document.onkeydown = (e => {
			console.log(e);
    		var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    		if (charCode && mapping[charCode]) {
        		this.snake.setDirection(mapping[charCode]);
			}
		});
	}
	
	
	
}