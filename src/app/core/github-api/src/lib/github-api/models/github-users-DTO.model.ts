import { GithubUser } from './github-user.model';

export interface GithubUsersDTO {
  "total_count": number,
  "incomplete_results": boolean,
  items: GithubUser[]
}