export type MetricStatus = "normal" | "warning" | "critical";

export interface Metric {
  key: string;
  label: string;
  value: string;
  status: MetricStatus;
}
