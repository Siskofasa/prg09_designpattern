interface SnakePartIteratorInterface {

    snake : any;
    index : number;
    next(snake: any);
    hasNext(snake: any);
    last(snake: any);
}


class SnakePartIterator implements SnakePartIteratorInterface{

    snake : any;
    index : number;

    constructor(snake){
        this.snake = snake;
        this.index = 0;
    }

    currentPosition(snake){
        return this.index;
    }


    next(snake){
        if (!this.hasNext(snake)){
            return false;
        }

        else {
            this.index = this.index + 1;
            return this.snake[this.index-1];
        }
    }


    hasNext(snake) {

        return this.index <= this.snake.length -1;
    }

    last(snake){
        return this.snake[this.snake.length-1];
    }
}


