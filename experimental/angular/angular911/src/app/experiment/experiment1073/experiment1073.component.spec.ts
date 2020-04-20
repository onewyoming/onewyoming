import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1073Component } from './experiment1073.component';

describe('Experiment1073Component', () => {
  let component: Experiment1073Component;
  let fixture: ComponentFixture<Experiment1073Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1073Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
