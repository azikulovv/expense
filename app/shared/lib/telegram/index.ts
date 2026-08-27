import { BackButton } from "~/shared/lib/telegram/back-button";
import { HapticFeedback } from "~/shared/lib/telegram/haptic-feedback";
import { getInitData } from "~/shared/lib/telegram/init-data";

export const telegram = {
  initData: getInitData(),
  backButton: new BackButton(),
  hapticFeedback: new HapticFeedback(),
};
