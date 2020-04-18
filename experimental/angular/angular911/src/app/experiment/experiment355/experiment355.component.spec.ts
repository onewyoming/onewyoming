import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment355Component } from './experiment355.component';

describe('Experiment355Component', () => {
  let component: Experiment355Component;
  let fixture: ComponentFixture<Experiment355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
