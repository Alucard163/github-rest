import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersDetailContainerComponent } from './users-detail-container.component';

describe('UsersDetailContainerComponent', () => {
  let component: UsersDetailContainerComponent;
  let fixture: ComponentFixture<UsersDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersDetailContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
