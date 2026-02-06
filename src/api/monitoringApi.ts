// import axios from "axios";

// export const getMetrics = async () => {
//   const response = await axios.get("/api/metrics");
//   return response.data;
// };

// import axios from "axios";
// export const getMetrics = async () => {
//   const response = await axios.get("/api/metrics");
//   return response.data;
// };

import type { Metric } from "../models/Metric";

export const fetchMetrics = async (): Promise<Metric[]> => {
  // simulate network delay
  await new Promise((res) => setTimeout(res, 500));

  return [
    { key: "cpu", label: "CPU Usage", value: "65%", status: "warning" },
    { key: "memory", label: "Memory Usage", value: "72%", status: "normal" },
    { key: "error", label: "Error Rate", value: "1.2%", status: "critical" },
    { key: "latency", label: "Latency", value: "240ms", status: "normal" },
  ];
};
