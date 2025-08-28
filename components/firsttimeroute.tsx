// components/FirstTimeFlag.tsx
"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function useFirstTime({ storage = "local" }: { storage?: "local"|"session" } = {}) {
  const pathname = usePathname();
  const [first, setFirst] = useState(false);

  useEffect(() => {
    const store = storage === "session" ? window.sessionStorage : window.localStorage;
    const key = `anim-seen:${pathname}`;
    if (!store.getItem(key)) {
      setFirst(true);
      store.setItem(key, "1");
    } else {
      setFirst(false);
    }
  }, [pathname, storage]);

  return first;
}
