import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment388Component } from './experiment388.component';

describe('Experiment388Component', () => {
  let component: Experiment388Component;
  let fixture: ComponentFixture<Experiment388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
