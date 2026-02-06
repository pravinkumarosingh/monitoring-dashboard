import { Card, CardContent, Typography } from "@mui/material";

type Props = {
  title: string;
  value: string;
  status: "normal" | "warning" | "critical";
};

const statusColor = {
  normal: "#4caf50",
  warning: "#ff9800",
  critical: "#f44336"
};

export default function MetricCard({ title, value, status }: Props) {
  return (
    <Card sx={{ borderLeft: `6px solid ${statusColor[status]}` }}>
      <CardContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
}
