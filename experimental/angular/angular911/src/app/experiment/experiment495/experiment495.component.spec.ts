import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment495Component } from './experiment495.component';

describe('Experiment495Component', () => {
  let component: Experiment495Component;
  let fixture: ComponentFixture<Experiment495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
