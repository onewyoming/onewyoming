import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment665Component } from './experiment665.component';

describe('Experiment665Component', () => {
  let component: Experiment665Component;
  let fixture: ComponentFixture<Experiment665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
