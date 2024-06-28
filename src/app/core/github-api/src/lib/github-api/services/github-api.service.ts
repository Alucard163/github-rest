import { HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiService } from '@github-rest/http';
import { GithubUsersDTO } from '../models/github-users-DTO.model';
import { GithubUser } from '../models/github-user.model';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  private apiService = inject(ApiService);

  public getGithubUsers(params: HttpParams) {
    return this.apiService.get<GithubUsersDTO>('search/users', params);
  }

  public getGithubUser(id: number) {
    return this.apiService.get<GithubUser>(`user/${id}`);
  }
}
