import { ComponentStore } from '@ngrx/component-store';
import { GithubApiFacade, GithubUser } from '@github-rest/github-api';
import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

type UsersDetailContainerState = {
  user: GithubUser | null
};

const initialState: UsersDetailContainerState = {
  user: null,
};

@Injectable()
export class UsersDetailContainerStore extends ComponentStore<UsersDetailContainerState> {
  private githubApiFacade = inject(GithubApiFacade);
  private route = inject(ActivatedRoute);
  public pageId = this.route.snapshot.params['id'];

  public readonly user$ = this.select(
    this.githubApiFacade.user$,
    (user) => user
  );

  public readonly status$ = this.select(
    this.githubApiFacade.status$,
    (status) => status
  );

  public readonly errors$ = this.select(
    this.githubApiFacade.errors$,
    (errors) => errors
  );
  constructor() {
    super(initialState);
    this.getUser();
    this.setUser();
  }

  private getUser() {
    this.githubApiFacade.getUserById(this.pageId);
  }

  private setUser() {
    this.githubApiFacade.user$.pipe(tap((users) => this.patchUser(users)));
  }

  private patchUser(user: GithubUser | null) {
    this.patchState({ user})
  }
}