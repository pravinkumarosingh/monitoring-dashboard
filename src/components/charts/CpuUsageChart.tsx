// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// const data = [
//   { time: "10:00", cpu: 40 },
//   { time: "10:05", cpu: 55 },
//   { time: "10:10", cpu: 65 },
//   { time: "10:15", cpu: 70 },
//   { time: "10:20", cpu: 60 }
// ];

// export default function CpuUsageChart() {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <LineChart data={data}>
//         <XAxis dataKey="time" />
//         <YAxis />
//         <Tooltip />
//         <Line type="monotone" dataKey="cpu" stroke="#1976d2" />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// }

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Typography, Box } from "@mui/material";

const data = [
  { time: "10:00", cpu: 40 },
  { time: "10:05", cpu: 55 },
  { time: "10:10", cpu: 65 },
  { time: "10:15", cpu: 70 },
  { time: "10:20", cpu: 60 }
];

// Add 'title' to the function arguments
export default function CpuUsageChart({ title }: { title: string }) {
  return (
    <Box sx={{ width: "100%", p: 2 }}>
      {/* The Title Component */}
      <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: 500 }}>
        {title}
      </Typography>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="time" />
          <YAxis unit="%" />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="cpu" 
            stroke="#1976d2" 
            strokeWidth={2} 
            dot={{ r: 4 }} 
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}