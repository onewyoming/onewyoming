import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment839Component } from './experiment839.component';

describe('Experiment839Component', () => {
  let component: Experiment839Component;
  let fixture: ComponentFixture<Experiment839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment839Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
