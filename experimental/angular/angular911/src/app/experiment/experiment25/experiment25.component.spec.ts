import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment25Component } from './experiment25.component';

describe('Experiment25Component', () => {
  let component: Experiment25Component;
  let fixture: ComponentFixture<Experiment25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
