import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment922Component } from './experiment922.component';

describe('Experiment922Component', () => {
  let component: Experiment922Component;
  let fixture: ComponentFixture<Experiment922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
