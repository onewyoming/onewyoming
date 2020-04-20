import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment536Component } from './experiment536.component';

describe('Experiment536Component', () => {
  let component: Experiment536Component;
  let fixture: ComponentFixture<Experiment536Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment536Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
