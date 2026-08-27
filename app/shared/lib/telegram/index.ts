import { BackButton } from "~/shared/lib/telegram/back-button";
import { HapticFeedback } from "~/shared/lib/telegram/haptic-feedback";
import { getInitData } from "~/shared/lib/telegram/init-data";
import { requireTelegramWebApp } from "~/shared/lib/telegram/web-app";

export const telegram = {
  webApp: requireTelegramWebApp(),
  initData: getInitData(),
  backButton: new BackButton(),
  hapticFeedback: new HapticFeedback(),
};
