import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment446Component } from './experiment446.component';

describe('Experiment446Component', () => {
  let component: Experiment446Component;
  let fixture: ComponentFixture<Experiment446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
