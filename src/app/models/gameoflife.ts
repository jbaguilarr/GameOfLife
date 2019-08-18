

export class GameOfLife {

   public board: number[][] = [ [0, 0, 0, 0, 0],
                                [0, 0, 1, 0, 0],
                                [0, 0, 1, 0, 0],
                                [0, 0, 1, 0, 0],
                                [0, 0, 0, 0, 0]];

    /**
     * DevolverArray
     */
    public DevolverArray() {
        return this.board;
    }
}
