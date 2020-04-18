import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment646Component } from './experiment646.component';

describe('Experiment646Component', () => {
  let component: Experiment646Component;
  let fixture: ComponentFixture<Experiment646Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment646Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
