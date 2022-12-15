import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaComidaComponent } from './pagina-comida.component';

describe('PaginaComidaComponent', () => {
  let component: PaginaComidaComponent;
  let fixture: ComponentFixture<PaginaComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaComidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
