import { Injectable, inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { GithubApiFacade } from '@github-rest/github-api';
import { GithubUser } from '@github-rest/github-api';
import { tap } from 'rxjs';

type UsersListState = {
  users: GithubUser[];
};

const initialState: UsersListState = {
  users: [],
};

@Injectable()
export class UsersListContainerStore extends ComponentStore<UsersListState> {
  private readonly usersFacade = inject(GithubApiFacade);
  public readonly users$ = this.select(this.usersFacade.users$, (users) => users);
  public readonly errors$ = this.select(this.usersFacade.errors$, (errors) => errors);
  public readonly status$ = this.select(this.usersFacade.status$, (status) => status);

  constructor() {
    super(initialState);
    this.usersFacade.cleanUsers();
    this.setUsers();
  }

  private setUsers() {
    this.usersFacade.users$.pipe(tap((users) => this.patchUsers(users)));
  }

  private patchUsers(users: GithubUser[] | undefined) {
    this.patchState({
      users,
    })
  }
}