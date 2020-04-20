import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment982Component } from './experiment982.component';

describe('Experiment982Component', () => {
  let component: Experiment982Component;
  let fixture: ComponentFixture<Experiment982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
