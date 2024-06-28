import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@github-rest/header';
import { FooterComponent } from '@github-rest/footer';

@Component({
  selector: 'app-authorized-user-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './authorized-user-layout.component.html',
  styleUrl: './authorized-user-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizedUserLayoutComponent {}
