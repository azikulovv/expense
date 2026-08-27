export function getTelegramWebApp() {
  if (!import.meta.client) {
    return null;
  }

  return window.Telegram?.WebApp ?? null;
}

export function requireTelegramWebApp() {
  const webApp = getTelegramWebApp();

  if (!webApp) {
    throw new Error("Telegram WebApp is not available");
  }

  return webApp;
}
