import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HttpParams } from '@angular/common/http';
import { GithubApiFacade } from '@github-rest/github-api';
import { PER_PAGE } from '@github-rest/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-users-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './users-filter.component.html',
  styleUrl: './users-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersFilterComponent {
  private perPage = inject(PER_PAGE);
  private store = inject(Store);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  public githubApiFacade = inject(GithubApiFacade);

  public formData = new FormGroup({
    name: new FormControl(''),
  });

  public onFilterUsers(): void {
    const value: Partial<{ name: string | null }>  = this.formData.value;
    const params = new HttpParams()
      .append('q', value.name ? value.name : '')
      .append('per_page', this.perPage);
    params.toString();

   if (value && (value.name !== undefined)) {
      value.name === '' ? this.githubApiFacade.cleanUsers() : this.githubApiFacade.getGithubUsers(params);
      this.setSearchParamToUrl(value.name ? value.name : '');
    }
  }

  setSearchParamToUrl(param: string): void {
    const queryParams = param ? { q: param } : { q: null };
    const url = this.router
      .createUrlTree([], { relativeTo: this.route, queryParams: queryParams }).toString()
    this.location.go(url)
  }
}
