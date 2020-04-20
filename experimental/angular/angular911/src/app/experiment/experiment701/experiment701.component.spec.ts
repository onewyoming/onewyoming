import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment701Component } from './experiment701.component';

describe('Experiment701Component', () => {
  let component: Experiment701Component;
  let fixture: ComponentFixture<Experiment701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
