import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GithubUsersDTO } from '../models/github-users-DTO.model';
import { HttpParams } from '@angular/common/http';
import { GithubUser } from '../models/github-user.model';

export const githubApiActions = createActionGroup({
  source: 'githubApi',
  events: {
    initUsers: emptyProps(),
    initUsersSuccess: props<{ users: GithubUsersDTO }>(),
    initUsersFailure: props<{ error: Error }>(),

    getGithubUsers: props<{ params: HttpParams }>(),
    getGithubUsersFailure: props<{ error: Error }>(),
    getGithubUsersSuccess: props<{ users: GithubUsersDTO }>(),

    getUserById: props<{ id: number }>(),
    getUserByIdFailure: props<{ error: Error }>(),
    getUserByIdSuccess: props<{ user: GithubUser }>(),

    cleanUsers: emptyProps(),
  },
});