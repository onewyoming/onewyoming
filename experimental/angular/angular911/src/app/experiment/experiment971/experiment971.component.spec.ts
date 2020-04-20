import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment971Component } from './experiment971.component';

describe('Experiment971Component', () => {
  let component: Experiment971Component;
  let fixture: ComponentFixture<Experiment971Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment971Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
