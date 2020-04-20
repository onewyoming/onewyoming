import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment240Component } from './experiment240.component';

describe('Experiment240Component', () => {
  let component: Experiment240Component;
  let fixture: ComponentFixture<Experiment240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
