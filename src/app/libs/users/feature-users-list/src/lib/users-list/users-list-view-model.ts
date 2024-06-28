import { GithubUser } from '@github-rest/github-api';
import { LoadingStatus } from '@github-rest/github-api';

export type UsersListViewModel = {
  users: GithubUser[] | undefined,
  status: LoadingStatus,
  errors: Error | null,
}