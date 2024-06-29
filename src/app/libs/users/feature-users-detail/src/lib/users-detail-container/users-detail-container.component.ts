import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetDirective } from '@ngrx/component';
import { FeatureUsersDetailComponent } from '../feature-users-detail/feature-users-detail.component';
import { UsersListComponent } from '@github-rest/feature-users-list';
import { UsersDetailContainerStore } from './users-detail-container-store';

@Component({
  selector: 'lib-users-detail-container',
  standalone: true,
  imports: [
    CommonModule,
    LetDirective,
    FeatureUsersDetailComponent,
    UsersListComponent,
  ],
  providers: [UsersDetailContainerStore],
  templateUrl: './users-detail-container.component.html',
  styleUrl: './users-detail-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersDetailContainerComponent {
  private readonly componentStore = inject(UsersDetailContainerStore);
  public readonly user$ = this.componentStore.user$;
  public readonly status$ = this.componentStore.status$;
  public readonly errors$ = this.componentStore.errors$;
}
