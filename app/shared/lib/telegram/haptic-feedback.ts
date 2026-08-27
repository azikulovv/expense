import { requireTelegramWebApp } from "~/shared/lib/telegram/web-app";

export class HapticFeedback {
  private readonly webApp = requireTelegramWebApp();

  impactOccurred(style: "light" | "medium" | "heavy" | "rigid" | "soft") {
    this.webApp.HapticFeedback.impactOccurred(style);
    return this;
  }

  notificationOccurred(type: "error" | "success" | "warning") {
    this.webApp.HapticFeedback.notificationOccurred(type);
    return this;
  }

  selectionChanged() {
    this.webApp.HapticFeedback.selectionChanged();
    return this;
  }
}
