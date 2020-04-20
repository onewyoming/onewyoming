import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment522Component } from './experiment522.component';

describe('Experiment522Component', () => {
  let component: Experiment522Component;
  let fixture: ComponentFixture<Experiment522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
