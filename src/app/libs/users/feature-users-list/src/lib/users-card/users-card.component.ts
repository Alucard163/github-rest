import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubUser } from '@github-rest/github-api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-users-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './users-card.component.html',
  styleUrl: './users-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersCardComponent {
  @Input({ required: true })
  user!: GithubUser | undefined;
}
