import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment398Component } from './experiment398.component';

describe('Experiment398Component', () => {
  let component: Experiment398Component;
  let fixture: ComponentFixture<Experiment398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
