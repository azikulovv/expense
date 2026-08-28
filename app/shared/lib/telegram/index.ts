import { BackButton } from "~/shared/lib/telegram/back-button";
import { getInitData } from "~/shared/lib/telegram/init-data";
import { HapticFeedback } from "~/shared/lib/telegram/haptic-feedback";
import { requireTelegramWebApp } from "~/shared/lib/telegram/web-app";

export const telegram = {
  webApp: requireTelegramWebApp(),
  initData: getInitData(),
  backButton: new BackButton(),
  hapticFeedback: new HapticFeedback(),
  requestFullscreen() {
    this.webApp.requestFullscreen();
    return this;
  },
  expand() {
    this.webApp.expand();
    return this;
  },
  ready() {
    this.webApp.ready();
    return this;
  },
  close() {
    this.webApp.close();
    return this;
  },
};
