import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment92Component } from './experiment92.component';

describe('Experiment92Component', () => {
  let component: Experiment92Component;
  let fixture: ComponentFixture<Experiment92Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment92Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
