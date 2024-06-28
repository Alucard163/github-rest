import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListViewModel } from './users-list-view-model';
import { UsersCardComponent } from '../users-card/users-card.component';
import { UsersTableComponent } from '../users-table/users-table.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-users-list',
  standalone: true,
  imports: [
    CommonModule,
    UsersCardComponent,
    UsersTableComponent,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  @Input({ required: true })
  vm!: UsersListViewModel;

  private route = inject(ActivatedRoute);

  get hasUsers(): boolean {
    return !!this.vm.users?.length
  }

  get activePath() {
    return this.route.snapshot.routeConfig?.path
  }

  get currentComponent() {
    return this.activePath === 'table' ? 'table' : 'block'
  }
}
