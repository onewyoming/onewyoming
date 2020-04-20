import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment288Component } from './experiment288.component';

describe('Experiment288Component', () => {
  let component: Experiment288Component;
  let fixture: ComponentFixture<Experiment288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
