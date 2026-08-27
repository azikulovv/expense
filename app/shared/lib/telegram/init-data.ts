import { requireTelegramWebApp } from "~/shared/lib/telegram/web-app";

export function getInitData(): string {
  const webApp = requireTelegramWebApp();

  return webApp.initData;
}
