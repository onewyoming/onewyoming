import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment908Component } from './experiment908.component';

describe('Experiment908Component', () => {
  let component: Experiment908Component;
  let fixture: ComponentFixture<Experiment908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
