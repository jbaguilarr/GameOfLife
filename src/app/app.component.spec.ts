import { TestBed, async } from '@angular/core/testing';
import { GameOfLife } from './models/gameoflife';


describe('Game of life', () => {
  const game = new GameOfLife();

    it('Esta vivo posicion 1,2', () => {
      const x = 1;
      const y = 2;

      const resul = game.celulaViva(x,y);
      expect(resul).toEqual(true);
    });

    it('Esta muerto posicion 1,1', () => {
      const x = 1;
      const y = 1;

      const resul = game.celulaMuerta(x,y);
      expect(resul).toEqual(true);
    });

    it('Celula muerta vecino 0', () =>{
      const x = 1;
      const y = 0;

      const resul = game.cantidadVecinos(x,y);
      expect(resul).toEqual(0);
    });
    //condicion 1
    it('Cualquier celula viva con menos de dos vecinas vivas, muere', () => {
      const x = 1;
      const y = 2;

      const resul = game.cantidadVecinos(x,y);
      expect(resul).toEqual(1);
    });
    //condicion 2
    it('Cualquier celula viva con dos o tres vecinas vivas, sobrevive en la proxima generacion', () =>{
      const x = 2;
      const y = 2;

      const resul = game.cantidadVecinos(x,y);
      expect(resul).toEqual(2);
    });
    //condicion 4
    it('Cualquier celula muerta con exactamente tres vecinas vivas, cobra vida en la siguiente generacion', () =>{
      const x = 2;
      const y = 1;

      const resul = game.cantidadVecinos(x,y);
      expect(resul).toEqual(3);
    });

    //agregue otro cela para probar la condicion 3
    let gameTwo = new GameOfLife();
    gameTwo.board = gameTwo.DevolverArray2();

    it('Cualquier celula viva con mas de tres vecinas vivas, muere', () =>{
      const x = 2;
      const y = 3;

      const resul = gameTwo.cantidadVecinos(x,y);
      expect(resul).toEqual(3);
    });
});




/*describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'gameoflife'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('gameoflife');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to gameoflife!');
  });
});*/

