import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsRecommenderComponent } from './apps-recommender.component';

describe('AppsRecommenderComponent', () => {
  let component: AppsRecommenderComponent;
  let fixture: ComponentFixture<AppsRecommenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsRecommenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsRecommenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
