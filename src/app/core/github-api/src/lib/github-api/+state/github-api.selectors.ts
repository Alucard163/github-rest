import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GithubApiState, githubApiFeatureKey } from './github-api.reducer';

export const selectUsersState = createFeatureSelector<GithubApiState>(githubApiFeatureKey);
export const selectGithubApiUsers = createSelector(selectUsersState, (state) => state.users?.items);
export const selectGithubApiError = createSelector(selectUsersState, (state) => state.error);
export const selectGithubApiStatus = createSelector(selectUsersState, (state) => state.status);
export const selectUserById = (id: number) => createSelector(selectGithubApiUsers, (users) => users ? users[id] : null);
export const selectGithubUser = createSelector(selectUsersState, (state) => state.user);