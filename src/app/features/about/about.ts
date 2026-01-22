import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { StaticTextHelper } from '@shared/helpers';

@Component({
  selector: 'app-about',
  imports: [MatButton, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly StaticTextHelper = StaticTextHelper;
  protected readonly title = signal(StaticTextHelper.about.aboutTitle);
}
