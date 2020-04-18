import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment310Component } from './experiment310.component';

describe('Experiment310Component', () => {
  let component: Experiment310Component;
  let fixture: ComponentFixture<Experiment310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
