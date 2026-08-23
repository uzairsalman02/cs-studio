export type SyncActionTrigger =
  | "CHANGE_SLIDE"
  | "REVEAL_ANSWER"
  | "RESET_QUIZ"
  | "START_TIMER"
  | "SYNC_STATE";

export interface SyncPayload {
  activeTopicSlug: string;
  activeSlideIndex: number;
  revealedAnswerId: string | null;
  timerRemainingSeconds: number;
  actionTrigger: SyncActionTrigger;
  timestamp: number;
}

const CHANNEL_NAME = "cs_studio_classroom_channel";

let broadcastChannel: BroadcastChannel | null = null;

export function getSyncChannel(): BroadcastChannel | null {
  if (typeof window === "undefined") return null;
  if (!broadcastChannel && "BroadcastChannel" in window) {
    broadcastChannel = new BroadcastChannel(CHANNEL_NAME);
  }
  return broadcastChannel;
}

export function broadcastState(payload: Partial<SyncPayload>): void {
  const channel = getSyncChannel();
  if (!channel) return;

  const fullPayload: SyncPayload = {
    activeTopicSlug: payload.activeTopicSlug || "sdlc-phases-and-workflow",
    activeSlideIndex: payload.activeSlideIndex ?? 0,
    revealedAnswerId: payload.revealedAnswerId ?? null,
    timerRemainingSeconds: payload.timerRemainingSeconds ?? 1800,
    actionTrigger: payload.actionTrigger || "SYNC_STATE",
    timestamp: Date.now(),
  };

  try {
    channel.postMessage(fullPayload);
  } catch (err) {
    console.error("BroadcastChannel postMessage error:", err);
  }
}

export function subscribeToSync(callback: (payload: SyncPayload) => void): () => void {
  const channel = getSyncChannel();
  if (!channel) return () => {};

  const handleMessage = (event: MessageEvent<SyncPayload>) => {
    if (event.data && typeof event.data === "object") {
      callback(event.data);
    }
  };

  channel.addEventListener("message", handleMessage);

  return () => {
    channel.removeEventListener("message", handleMessage);
  };
}
