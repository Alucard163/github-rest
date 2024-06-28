import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureUsersDetailComponent } from './feature-users-detail.component';

describe('FeatureUsersDetailComponent', () => {
  let component: FeatureUsersDetailComponent;
  let fixture: ComponentFixture<FeatureUsersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureUsersDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureUsersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
