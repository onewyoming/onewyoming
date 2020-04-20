import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment26Component } from './experiment26.component';

describe('Experiment26Component', () => {
  let component: Experiment26Component;
  let fixture: ComponentFixture<Experiment26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
