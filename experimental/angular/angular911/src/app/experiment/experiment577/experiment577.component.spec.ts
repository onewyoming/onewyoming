import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment577Component } from './experiment577.component';

describe('Experiment577Component', () => {
  let component: Experiment577Component;
  let fixture: ComponentFixture<Experiment577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
