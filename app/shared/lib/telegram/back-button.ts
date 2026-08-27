import { requireTelegramWebApp } from "~/shared/lib/telegram/web-app";

export class BackButton {
  private readonly webApp = requireTelegramWebApp();

  get isVisible(): boolean {
    return this.webApp.BackButton.isVisible;
  }

  on(callback: () => void) {
    this.webApp.BackButton.onClick(callback);

    return this;
  }

  off(callback: () => void) {
    this.webApp.BackButton.offClick(callback);

    return this;
  }

  show() {
    this.webApp.BackButton.show();

    return this;
  }

  hide() {
    this.webApp.BackButton.hide();

    return this;
  }
}
