import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { githubApiActions } from './github-api.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GithubApiService } from '../services/github-api.service';

export const getGithubUsersEffect = createEffect(
  (
    actions$ = inject(Actions),
    githubApiService = inject(GithubApiService),
  ) =>
    actions$.pipe(
      ofType(githubApiActions.getGithubUsers),
      switchMap(({ params}) =>
        githubApiService.getGithubUsers(params).pipe(
          map((users) => {
            return githubApiActions.getGithubUsersSuccess({users});
          }),
          catchError((error) => of(githubApiActions.getGithubUsersFailure({ error })))
        )
      )
    ),
  { functional: true }
)

export const getUserByIdEffect = createEffect(
  (
    actions$ = inject(Actions),
    githubApiService = inject(GithubApiService),
  ) =>
    actions$.pipe(
      ofType(githubApiActions.getUserById),
      switchMap(({ id }) =>
        githubApiService.getGithubUser(id).pipe(
          map((user) => {
            return githubApiActions.getUserByIdSuccess({ user });
          }),
          catchError((error) => of(githubApiActions.getUserByIdFailure({ error })))
        )
      )
    ),
  { functional: true }
)