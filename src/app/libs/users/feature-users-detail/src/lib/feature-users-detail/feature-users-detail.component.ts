import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterLink } from '@angular/router';

import { PushPipe } from '@ngrx/component';
import { FeatureUserDetailsVm } from './feature-user-details-vm';
import { UsersDetailContainerStore } from '../users-detail-container/users-detail-container-store';

@Component({
  selector: 'lib-feature-users-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, PushPipe],
  providers: [UsersDetailContainerStore],
  templateUrl: './feature-users-detail.component.html',
  styleUrl: './feature-users-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureUsersDetailComponent {
  @Input({ required: true })
  vm!: FeatureUserDetailsVm;
}
