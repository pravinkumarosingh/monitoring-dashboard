import { useEffect, useState } from "react";
import { fetchUnreadCount } from "../api/notificationApi";

export function useUnreadCount(refreshMs = 5000) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      const data = await fetchUnreadCount();
      if (mounted) setCount(data);
    };

    load(); // initial
    const id = setInterval(load, refreshMs);

    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, [refreshMs]);

  return count;
}
