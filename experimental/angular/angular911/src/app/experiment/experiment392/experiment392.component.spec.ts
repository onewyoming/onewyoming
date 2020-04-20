import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment392Component } from './experiment392.component';

describe('Experiment392Component', () => {
  let component: Experiment392Component;
  let fixture: ComponentFixture<Experiment392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
