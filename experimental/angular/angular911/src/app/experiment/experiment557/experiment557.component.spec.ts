import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment557Component } from './experiment557.component';

describe('Experiment557Component', () => {
  let component: Experiment557Component;
  let fixture: ComponentFixture<Experiment557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
