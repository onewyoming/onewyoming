import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment625Component } from './experiment625.component';

describe('Experiment625Component', () => {
  let component: Experiment625Component;
  let fixture: ComponentFixture<Experiment625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
