import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-unauthorized-user-layout',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './unauthorized-user-layout.component.html',
  styleUrl: './unauthorized-user-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnauthorizedUserLayoutComponent {}
