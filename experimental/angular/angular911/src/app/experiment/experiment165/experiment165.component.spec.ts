import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment165Component } from './experiment165.component';

describe('Experiment165Component', () => {
  let component: Experiment165Component;
  let fixture: ComponentFixture<Experiment165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
