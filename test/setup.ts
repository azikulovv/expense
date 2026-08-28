const telegramWebApp = {
  initData: "test-init-data",
  BackButton: {
    isVisible: false,
    onClick() {},
    offClick() {},
    show() {},
    hide() {},
  },
  HapticFeedback: {
    impactOccurred() {},
    notificationOccurred() {},
    selectionChanged() {},
  },
  requestFullscreen() {},
  expand() {},
  ready() {},
  close() {},
};

if (typeof window !== "undefined") {
  Object.defineProperty(window, "Telegram", {
    configurable: true,
    value: { WebApp: telegramWebApp },
  });
}
