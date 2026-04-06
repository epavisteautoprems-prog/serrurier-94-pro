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
  const [phoneUi, setPhoneUi] = useState(false);
  const [heavyWidgets, setHeavyWidgets] = useState(false);

  useEffect(() => {
    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    // Bouton téléphone en premier (léger) — meilleur LCP / INP sur mobile.
    const showPhone = () => setPhoneUi(true);
    const t0 = window.setTimeout(showPhone, 400);

    const enableHeavy = () => setHeavyWidgets(true);
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(enableHeavy, { timeout: 2800 });
      return () => {
        window.clearTimeout(t0);
        if (typeof w.cancelIdleCallback === "function") w.cancelIdleCallback(id);
      };
    }

    const t1 = window.setTimeout(enableHeavy, 2000);
    return () => {
      window.clearTimeout(t0);
      window.clearTimeout(t1);
    };
  }, []);

  return (
    <>
      {phoneUi ? <FloatingPhoneButton /> : null}
      {heavyWidgets ? (
        <>
          <LiveInterventionCounter />
          <CallbackWidget />
          <ChatWidget />
          <ConversionTracker />
        </>
      ) : null}
    </>
  );
}

