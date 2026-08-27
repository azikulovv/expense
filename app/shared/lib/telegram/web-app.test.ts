import { afterEach, describe, expect, it, vi } from "vitest";
import {
  getTelegramWebApp,
  requireTelegramWebApp,
} from "~/shared/lib/telegram/web-app";

describe("getTelegramWebApp", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("возвращает null, если Telegram WebApp недоступен", () => {
    vi.stubGlobal("window", {});

    expect(getTelegramWebApp()).toBeNull();
  });

  it("возвращает Telegram WebApp, если он доступен", () => {
    const webApp = {
      initData: "test-init-data",
      version: "7.0",
      platform: "tdesktop",
    };

    vi.stubGlobal("window", {
      Telegram: {
        WebApp: webApp,
      },
    });

    expect(getTelegramWebApp()).toBe(webApp);
  });

  it("возвращает null, если Telegram отсутствует", () => {
    vi.stubGlobal("window", {
      Telegram: undefined,
    });

    expect(getTelegramWebApp()).toBeNull();
  });
});

describe("requireTelegramWebApp", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("возвращает Telegram WebApp, если он доступен", () => {
    const webApp = {
      initData: "test-init-data",
      version: "7.0",
      platform: "tdesktop",
    };

    vi.stubGlobal("window", {
      Telegram: {
        WebApp: webApp,
      },
    });

    expect(requireTelegramWebApp()).toBe(webApp);
  });

  it("выбрасывает ошибку, если Telegram WebApp недоступен", () => {
    vi.stubGlobal("window", {});

    expect(() => requireTelegramWebApp()).toThrow(
      "Telegram WebApp is not available",
    );
  });
});
