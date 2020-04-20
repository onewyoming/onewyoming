import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1685Component } from './experiment1685.component';

describe('Experiment1685Component', () => {
  let component: Experiment1685Component;
  let fixture: ComponentFixture<Experiment1685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
