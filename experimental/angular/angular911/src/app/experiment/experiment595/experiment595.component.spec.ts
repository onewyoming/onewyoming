import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment595Component } from './experiment595.component';

describe('Experiment595Component', () => {
  let component: Experiment595Component;
  let fixture: ComponentFixture<Experiment595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
