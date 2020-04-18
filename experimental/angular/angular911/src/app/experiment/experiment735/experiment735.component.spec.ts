import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment735Component } from './experiment735.component';

describe('Experiment735Component', () => {
  let component: Experiment735Component;
  let fixture: ComponentFixture<Experiment735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment735Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
