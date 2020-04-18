import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment260Component } from './experiment260.component';

describe('Experiment260Component', () => {
  let component: Experiment260Component;
  let fixture: ComponentFixture<Experiment260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
