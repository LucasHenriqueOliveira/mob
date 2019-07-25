import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadunicoComponent } from './cadunico.component';

describe('CadunicoComponent', () => {
  let component: CadunicoComponent;
  let fixture: ComponentFixture<CadunicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadunicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadunicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
