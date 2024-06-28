import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetDirective } from '@ngrx/component';
import { UsersListContainerStore } from './users-list-container.store';
import { UsersFilterComponent } from '../users-filter/users-filter.component';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'lib-users-list-container',
  standalone: true,
  imports: [
    CommonModule,
    UsersFilterComponent,
    UsersListComponent,
    LetDirective
  ],
  providers: [UsersListContainerStore],
  templateUrl: './users-list-container.component.html',
  styleUrl: './users-list-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListContainerComponent {
  private readonly componentStore = inject(UsersListContainerStore);
  public readonly users$ = this.componentStore.users$;
  public readonly status$ = this.componentStore.status$;
  public readonly errors$ = this.componentStore.errors$;
}
