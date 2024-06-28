import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { githubApiActions } from './github-api.actions';
import { GithubUsersDTO } from '../models/github-users-DTO.model';
import { GithubUser } from '../models/github-user.model';

export const githubApiFeatureKey = 'githubApi';

export type LoadingStatus = 'init' | 'loading' | 'loaded' | 'error';

export interface GithubApiState {
  error: Error | null;
  users: GithubUsersDTO | null;
  user: GithubUser | null;
  status: LoadingStatus;
}

export const githubApiInitialState: GithubApiState = {
  error: null,
  users: {
    total_count: 0,
    incomplete_results: false,
    items: [],
  },
  user: null,
  status: 'init',
};

export const githubApiFeature = createFeature({
  name: githubApiFeatureKey,
  reducer: createReducer(
    githubApiInitialState,
    on(githubApiActions.initUsers, (state) => ({
      ...state,
      status: 'loading' as const,
    })),
    on(githubApiActions.initUsersSuccess, (state) => ({
      ...state,
      status: 'loaded' as const,
    })),
    on(githubApiActions.initUsersFailure, (state, { error }) => ({
      ...state,
      status: 'error' as const,
      error,
    })),
    on(githubApiActions.cleanUsers, (state) => ({
      ...state,
      users: null,
      status: 'init' as const,
    })),
    on(githubApiActions.getUserById, (state, { id }) => ({
      ...state,
      status: 'loading' as const,
      id,
    })),
    on(githubApiActions.getUserByIdSuccess, (state, { user }) => ({
      ...state,
      status: 'loaded' as const,
      user,
    })),
    on(githubApiActions.getUserByIdFailure, (state, { error }) => ({
      ...state,
      status: 'error' as const,
      error,
    })),
    on(githubApiActions.getGithubUsers, (state, { params}) => ({
      ...state,
      params,
      status: 'loading' as const,
    })),
    on(githubApiActions.getGithubUsersFailure, (state, { error }) => ({
      ...state,
      status: 'error' as const,
      error,
    })),
    on(githubApiActions.getGithubUsersSuccess, (state, { users }) => ({
      ...state,
      status: 'loaded' as const,
      users,
    })),
  ),
})