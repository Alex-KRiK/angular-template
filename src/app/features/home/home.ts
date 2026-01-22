import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StaticTextHelper } from '@shared/helpers';
import { dayjs } from '@core/date/dayjs';

@Component({
  selector: 'app-home',
  imports: [MatButton, RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnDestroy {
  protected readonly StaticTextHelper = StaticTextHelper;
  protected readonly title = signal(StaticTextHelper.home.homeTitle);

  protected readonly currentTime = signal(dayjs().format('HH:mm:ss'));

  private readonly timerId = window.setInterval(() => {
    this.currentTime.set(dayjs().format('HH:mm:ss'));
  }, 1000);

  ngOnDestroy(): void {
    clearInterval(this.timerId);
  }
}
