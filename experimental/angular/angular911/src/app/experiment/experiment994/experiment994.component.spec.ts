import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment994Component } from './experiment994.component';

describe('Experiment994Component', () => {
  let component: Experiment994Component;
  let fixture: ComponentFixture<Experiment994Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment994Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
