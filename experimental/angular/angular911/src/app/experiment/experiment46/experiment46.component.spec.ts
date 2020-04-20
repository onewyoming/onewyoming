import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment46Component } from './experiment46.component';

describe('Experiment46Component', () => {
  let component: Experiment46Component;
  let fixture: ComponentFixture<Experiment46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment46Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
