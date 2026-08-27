import { beforeEach, describe, expect, it, vi } from "vitest";
import { requireTelegramWebApp } from "~/shared/lib/telegram/web-app";
import { HapticFeedback } from "~/shared/lib/telegram/haptic-feedback";

const impactOccurred = vi.fn();
const notificationOccurred = vi.fn();
const selectionChanged = vi.fn();

vi.mock("~/shared/lib/telegram/web-app", () => ({
  requireTelegramWebApp: vi.fn(),
}));

describe("HapticFeedback", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(requireTelegramWebApp).mockReturnValue({
      HapticFeedback: {
        impactOccurred,
        notificationOccurred,
        selectionChanged,
      },
    } as ReturnType<typeof requireTelegramWebApp>);
  });

  it("вызывает impactOccurred с переданным style", () => {
    const haptic = new HapticFeedback();

    haptic.impactOccurred("medium");

    expect(impactOccurred).toHaveBeenCalledWith("medium");
    expect(impactOccurred).toHaveBeenCalledTimes(1);
  });

  it("возвращает this после impactOccurred", () => {
    const haptic = new HapticFeedback();

    const result = haptic.impactOccurred("light");

    expect(result).toBe(haptic);
  });

  it("вызывает notificationOccurred с переданным type", () => {
    const haptic = new HapticFeedback();

    haptic.notificationOccurred("success");

    expect(notificationOccurred).toHaveBeenCalledWith("success");
    expect(notificationOccurred).toHaveBeenCalledTimes(1);
  });

  it("возвращает this после notificationOccurred", () => {
    const haptic = new HapticFeedback();

    const result = haptic.notificationOccurred("error");

    expect(result).toBe(haptic);
  });

  it("вызывает selectionChanged", () => {
    const haptic = new HapticFeedback();

    haptic.selectionChanged();

    expect(selectionChanged).toHaveBeenCalledTimes(1);
  });

  it("возвращает this после selectionChanged", () => {
    const haptic = new HapticFeedback();

    const result = haptic.selectionChanged();

    expect(result).toBe(haptic);
  });
});
