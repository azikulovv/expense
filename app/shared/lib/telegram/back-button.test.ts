// @vitest-environment node

import { beforeEach, describe, expect, it, vi } from "vitest";
import { requireTelegramWebApp } from "~/shared/lib/telegram/web-app";
import { BackButton } from "~/shared/lib/telegram/back-button";

const onClick = vi.fn();
const offClick = vi.fn();
const show = vi.fn();
const hide = vi.fn();

let isVisible = false;

vi.mock("~/shared/lib/telegram/web-app", () => ({
  requireTelegramWebApp: vi.fn(),
}));

describe("BackButton", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    isVisible = false;

    vi.mocked(requireTelegramWebApp).mockReturnValue({
      BackButton: {
        get isVisible() {
          return isVisible;
        },
        onClick,
        offClick,
        show,
        hide,
      },
    } as ReturnType<typeof requireTelegramWebApp>);
  });

  it("возвращает состояние isVisible", () => {
    const backButton = new BackButton();

    expect(backButton.isVisible).toBe(false);
  });

  it("возвращает true, если BackButton видим", () => {
    isVisible = true;

    const backButton = new BackButton();

    expect(backButton.isVisible).toBe(true);
  });

  it("вызывает onClick с callback", () => {
    const backButton = new BackButton();
    const callback = vi.fn();

    backButton.on(callback);

    expect(onClick).toHaveBeenCalledWith(callback);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("возвращает this после on", () => {
    const backButton = new BackButton();
    const callback = vi.fn();

    const result = backButton.on(callback);

    expect(result).toBe(backButton);
  });

  it("вызывает offClick с callback", () => {
    const backButton = new BackButton();
    const callback = vi.fn();

    backButton.off(callback);

    expect(offClick).toHaveBeenCalledWith(callback);
    expect(offClick).toHaveBeenCalledTimes(1);
  });

  it("возвращает this после off", () => {
    const backButton = new BackButton();
    const callback = vi.fn();

    const result = backButton.off(callback);

    expect(result).toBe(backButton);
  });

  it("вызывает show", () => {
    const backButton = new BackButton();

    backButton.show();

    expect(show).toHaveBeenCalledTimes(1);
  });

  it("возвращает this после show", () => {
    const backButton = new BackButton();

    const result = backButton.show();

    expect(result).toBe(backButton);
  });

  it("вызывает hide", () => {
    const backButton = new BackButton();

    backButton.hide();

    expect(hide).toHaveBeenCalledTimes(1);
  });

  it("возвращает this после hide", () => {
    const backButton = new BackButton();

    const result = backButton.hide();

    expect(result).toBe(backButton);
  });

  it("поддерживает chaining", () => {
    const backButton = new BackButton();
    const callback = vi.fn();

    backButton.on(callback).show().hide().off(callback);

    expect(onClick).toHaveBeenCalledWith(callback);
    expect(show).toHaveBeenCalledTimes(1);
    expect(hide).toHaveBeenCalledTimes(1);
    expect(offClick).toHaveBeenCalledWith(callback);
  });
});
