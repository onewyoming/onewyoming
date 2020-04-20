import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment189Component } from './experiment189.component';

describe('Experiment189Component', () => {
  let component: Experiment189Component;
  let fixture: ComponentFixture<Experiment189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
