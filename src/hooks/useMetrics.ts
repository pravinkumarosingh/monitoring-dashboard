import { useEffect, useState } from "react";
import type { Metric } from "../models/Metric";
import { fetchMetrics } from "../api/monitoringApi";

export function useMetrics(refreshIntervalMs: number) {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadMetrics = async () => {
      try {
        setLoading(true);
        const data = await fetchMetrics();
        if (isMounted) {
          setMetrics(data);
          setLastUpdated(new Date());
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadMetrics(); // initial load

    const intervalId = setInterval(loadMetrics, refreshIntervalMs);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [refreshIntervalMs]);

  return { metrics, loading, lastUpdated };
}
