import { GithubUser, LoadingStatus } from '@github-rest/github-api';

export type FeatureUserDetailsVm = {
  user: GithubUser | null,
  status: LoadingStatus,
  errors: Error | null,
}