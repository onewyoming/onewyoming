import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment961Component } from './experiment961.component';

describe('Experiment961Component', () => {
  let component: Experiment961Component;
  let fixture: ComponentFixture<Experiment961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
