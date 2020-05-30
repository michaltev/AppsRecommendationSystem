import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsFilterFormComponent } from './apps-filter-form.component';

describe('AppsFilterFormComponent', () => {
  let component: AppsFilterFormComponent;
  let fixture: ComponentFixture<AppsFilterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsFilterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
