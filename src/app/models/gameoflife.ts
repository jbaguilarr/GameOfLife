

export class GameOfLife {

   public board: number[][] = [ [0, 0, 0, 0, 0],
                                [0, 0, 1, 0, 0],
                                [0, 0, 1, 0, 0],
                                [0, 0, 1, 0, 0],
                                [0, 0, 0, 0, 0]];

    constructor() {
        this.board = [  [0, 0, 0, 0, 0],
                        [0, 0, 1, 0, 0],
                        [0, 0, 1, 0, 0],
                        [0, 0, 1, 0, 0],
                        [0, 0, 0, 0, 0]];
    }
    /**
     * DevolverArray
     */
    public DevolverArray() {
        return this.board;
    }


    public celulaViva(row: number, col: number){
        return this.board[row][col] === 1;
    }
    public celulaMuerta(row: number, col: number){
        return this.board[row][col] === 0;
    }
}
