import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment303Component } from './experiment303.component';

describe('Experiment303Component', () => {
  let component: Experiment303Component;
  let fixture: ComponentFixture<Experiment303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
