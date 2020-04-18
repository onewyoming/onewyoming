import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment884Component } from './experiment884.component';

describe('Experiment884Component', () => {
  let component: Experiment884Component;
  let fixture: ComponentFixture<Experiment884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment884Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
