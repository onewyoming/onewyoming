import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment308Component } from './experiment308.component';

describe('Experiment308Component', () => {
  let component: Experiment308Component;
  let fixture: ComponentFixture<Experiment308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
