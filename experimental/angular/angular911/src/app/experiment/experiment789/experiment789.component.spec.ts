import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment789Component } from './experiment789.component';

describe('Experiment789Component', () => {
  let component: Experiment789Component;
  let fixture: ComponentFixture<Experiment789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
