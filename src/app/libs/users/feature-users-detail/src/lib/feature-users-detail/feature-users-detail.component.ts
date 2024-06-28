import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import {
  GithubApiFacade,
  GithubUser,
} from '@github-rest/github-api';

import { Observable } from 'rxjs';
import { PushPipe } from '@ngrx/component';

@Component({
  selector: 'lib-feature-users-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, PushPipe],
  templateUrl: './feature-users-detail.component.html',
  styleUrl: './feature-users-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureUsersDetailComponent implements OnInit {
  private githubApiFacade = inject(GithubApiFacade);
  private route = inject(ActivatedRoute);
  public pageId = this.route.snapshot.params['id'];
  public user$!: Observable<GithubUser | null>;

  ngOnInit(): void {
    this.githubApiFacade.getUserById(this.pageId);
    this.user$ = this.githubApiFacade.user$;
  }
}
