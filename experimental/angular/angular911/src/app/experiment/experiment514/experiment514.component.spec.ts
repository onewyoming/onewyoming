import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment514Component } from './experiment514.component';

describe('Experiment514Component', () => {
  let component: Experiment514Component;
  let fixture: ComponentFixture<Experiment514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
