import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GithubUser } from '@github-rest/github-api';

@Component({
  selector: 'lib-users-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersTableComponent {
  @Input({ required: true })
  users!: GithubUser[] | undefined;
}
