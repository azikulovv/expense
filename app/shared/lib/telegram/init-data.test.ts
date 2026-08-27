import { describe, expect, it, vi } from "vitest";
import { getInitData } from "~/shared/lib/telegram/init-data";
import { requireTelegramWebApp } from "~/shared/lib/telegram/web-app";

vi.mock("~/shared/lib/telegram/web-app", () => ({
  requireTelegramWebApp: vi.fn(),
}));

describe("getInitData", () => {
  it("возвращает initData из Telegram WebApp", () => {
    vi.mocked(requireTelegramWebApp).mockReturnValue({
      initData: "test-init-data",
    } as ReturnType<typeof requireTelegramWebApp>);

    expect(getInitData()).toBe("test-init-data");
  });

  it("выбрасывает ошибку, если Telegram WebApp недоступен", () => {
    vi.mocked(requireTelegramWebApp).mockImplementation(() => {
      throw new Error("Telegram WebApp is not available");
    });

    expect(() => getInitData()).toThrow("Telegram WebApp is not available");
  });
});
