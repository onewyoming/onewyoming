import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment138Component } from './experiment138.component';

describe('Experiment138Component', () => {
  let component: Experiment138Component;
  let fixture: ComponentFixture<Experiment138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
