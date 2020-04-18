import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment686Component } from './experiment686.component';

describe('Experiment686Component', () => {
  let component: Experiment686Component;
  let fixture: ComponentFixture<Experiment686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
