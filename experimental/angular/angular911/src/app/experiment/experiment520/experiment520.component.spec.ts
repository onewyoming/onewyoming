import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment520Component } from './experiment520.component';

describe('Experiment520Component', () => {
  let component: Experiment520Component;
  let fixture: ComponentFixture<Experiment520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
