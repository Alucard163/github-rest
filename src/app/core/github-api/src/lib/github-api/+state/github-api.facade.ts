import { Store } from "@ngrx/store";
import { githubApiActions } from './github-api.actions';
import { inject, Injectable } from '@angular/core';
import * as GithubSelectors from './github-api.selectors';
import { HttpParams } from '@angular/common/http';
import { of, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubApiFacade {
  public store = inject(Store)
  public users$ = this.store.select(GithubSelectors.selectGithubApiUsers)
  public user$ = this.store.select(GithubSelectors.selectGithubUser)
  public errors$ = this.store.select(GithubSelectors.selectGithubApiError)
  public status$ = this.store.select(GithubSelectors.selectGithubApiStatus)

  public init() {
    this.store.dispatch(githubApiActions.initUsers());
  }
  public getGithubUsers(params: HttpParams) {
    this.store.dispatch(githubApiActions.getGithubUsers({ params }));
  }

  public selectUserById(id: number) {
   return this.store.select(GithubSelectors.selectUserById(id)).pipe(
      switchMap((user) => {
        if (user) {
          return of(user);
        } else {
          return of(null);
        }
      })
    )
  }

  public getUserById(id: number) {
    this.store.dispatch(githubApiActions.getUserById({ id }));
  }

  public cleanUsers() {
    this.store.dispatch(githubApiActions.cleanUsers());
  }
}