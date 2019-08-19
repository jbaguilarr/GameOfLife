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
    public DevolverArray2(){
     return  this.board = [  [0, 0, 0, 0, 0],
                            [0, 0, 1, 0, 0],
                            [0, 0, 1, 1, 0],
                            [0, 0, 1, 0, 0],
                            [0, 0, 0, 0, 0]];
    }


    public celulaViva(row: number, col: number){
        return this.board[row][col] === 1;
    }
    public celulaMuerta(row: number, col: number){
        return this.board[row][col] === 0;
    }
    private verificarPosicion(x: number,y: number) {
      return x >= 0 && y >= 0 && x < 5 && y < 5;
    }
    public cantidadVecinos( row: number, column: number){

      let cant = 0 ;
      let x = row - 1;
      let y = column;
      if(this.verificarPosicion(x,y)){
         if(this.celulaViva(x,y))
           cant++;
      }

      x = row - 1;
      y = column -1;
      if(this.verificarPosicion(x,y)){
         if(this.celulaViva(x,y))
           cant++;
      }

      x = row - 1;
      y = column + 1;
      if(this.verificarPosicion(x,y)){
         if(this.celulaViva(x,y))
           cant++;
      }

      x = row;
      y = column + 1;
      if(this.verificarPosicion(x,y)){
         if(this.celulaViva(x,y))
           cant++;
      }

      x = row + 1;
      y = column + 1;
      if(this.verificarPosicion(x,y)){
         if(this.celulaViva(x,y))
           cant++;
      }

      x = row + 1;
      y = column;
      if(this.verificarPosicion(x,y)){
         if(this.celulaViva(x,y))
           cant++;
      }

      x = row + 1;
      y = column -1;
      if(this.verificarPosicion(x,y)){
         if(this.celulaViva(x,y))
           cant++;
      }

      x = row;
      y = column -1;
      if(this.verificarPosicion(x,y)){
         if(this.celulaViva(x,y))
           cant++;
      }

        return cant;
    }
}
