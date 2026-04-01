"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const FloatingPhoneButton = dynamic(
  () => import("@/components/layout/FloatingPhoneButton").then((m) => m.FloatingPhoneButton),
  { ssr: false },
);
const CallbackWidget = dynamic(
  () => import("@/components/layout/CallbackWidget").then((m) => m.CallbackWidget),
  { ssr: false },
);
const ChatWidget = dynamic(
  () => import("@/components/layout/ChatWidget").then((m) => m.ChatWidget),
  { ssr: false },
);
const LiveInterventionCounter = dynamic(
  () => import("@/components/layout/LiveInterventionCounter").then((m) => m.LiveInterventionCounter),
  { ssr: false },
);
const ConversionTracker = dynamic(
  () => import("@/components/analytics/ConversionTracker").then((m) => m.ConversionTracker),
  { ssr: false },
);

export function ClientEnhancements() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const enable = () => setEnabled(true);

    // Defer non-critical widgets to idle time to reduce initial JS/INP.
    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(enable, { timeout: 1500 });
      return () => {
        if (typeof w.cancelIdleCallback === "function") w.cancelIdleCallback(id);
      };
    }

    const t = window.setTimeout(enable, 600);
    return () => window.clearTimeout(t);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <LiveInterventionCounter />
      <FloatingPhoneButton />
      <CallbackWidget />
      <ChatWidget />
      <ConversionTracker />
    </>
  );
}

