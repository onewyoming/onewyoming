import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment435Component } from './experiment435.component';

describe('Experiment435Component', () => {
  let component: Experiment435Component;
  let fixture: ComponentFixture<Experiment435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
