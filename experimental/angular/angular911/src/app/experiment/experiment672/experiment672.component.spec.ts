import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment672Component } from './experiment672.component';

describe('Experiment672Component', () => {
  let component: Experiment672Component;
  let fixture: ComponentFixture<Experiment672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
