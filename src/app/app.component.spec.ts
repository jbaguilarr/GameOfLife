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

