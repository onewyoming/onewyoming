import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment781Component } from './experiment781.component';

describe('Experiment781Component', () => {
  let component: Experiment781Component;
  let fixture: ComponentFixture<Experiment781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
