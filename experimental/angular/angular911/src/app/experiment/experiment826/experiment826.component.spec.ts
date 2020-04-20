import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment826Component } from './experiment826.component';

describe('Experiment826Component', () => {
  let component: Experiment826Component;
  let fixture: ComponentFixture<Experiment826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
