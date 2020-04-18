import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment823Component } from './experiment823.component';

describe('Experiment823Component', () => {
  let component: Experiment823Component;
  let fixture: ComponentFixture<Experiment823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
