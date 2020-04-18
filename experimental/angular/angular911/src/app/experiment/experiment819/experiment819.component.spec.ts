import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment819Component } from './experiment819.component';

describe('Experiment819Component', () => {
  let component: Experiment819Component;
  let fixture: ComponentFixture<Experiment819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
