import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment506Component } from './experiment506.component';

describe('Experiment506Component', () => {
  let component: Experiment506Component;
  let fixture: ComponentFixture<Experiment506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
