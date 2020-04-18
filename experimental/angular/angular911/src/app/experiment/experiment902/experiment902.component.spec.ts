import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment902Component } from './experiment902.component';

describe('Experiment902Component', () => {
  let component: Experiment902Component;
  let fixture: ComponentFixture<Experiment902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
