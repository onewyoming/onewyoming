import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchClientDetailComponent } from './fetch-client-detail.component';

describe('FetchClientDetailComponent', () => {
  let component: FetchClientDetailComponent;
  let fixture: ComponentFixture<FetchClientDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchClientDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchClientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
