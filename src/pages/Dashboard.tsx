// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import MetricCard from "../components/cards/MetricCard";
// import CpuUsageChart from "../components/charts/CpuUsageChart";

// export default function Dashboard() {
//   return (
//     <Container maxWidth="xl">
//       <Grid container spacing={3}>
//         <Grid size={{xs:12 , md:3}}>
//           <MetricCard title="CPU Usage" value="65%" status="warning" />
//         </Grid>
//         <Grid size={{xs:12 , md:3}}>
//           <MetricCard title="Memory Usage" value="72%" status="normal" />
//         </Grid>
//         <Grid  size={{xs:12 , md:3}}>
//           <MetricCard title="Error Rate" value="1.2%" status="critical" />
//         </Grid>
//         <Grid size={{xs:12 , md:3}}>
//           <MetricCard title="Latency" value="240ms" status="normal" />
//         </Grid>

//         <Grid size={{xs:12}}>
//           <CpuUsageChart />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";          // ← this is Grid v2 now
// import MetricCard from "../components/cards/MetricCard";
// import CpuUsageChart from "../components/charts/CpuUsageChart";

// export default function Dashboard() {
//   return (
//     <Container maxWidth="xl">
//       <Grid container spacing={3}>
//         <Grid size={{ xs: 12, md: 3 }}>
//           <MetricCard title="CPU Usage" value="65%" status="warning" />
//         </Grid>
//         <Grid size={{ xs: 12, md: 3 }}>
//           <MetricCard title="Memory Usage" value="72%" status="normal" />
//         </Grid>
//         <Grid size={{ xs: 12, md: 3 }}>
//           <MetricCard title="Error Rate" value="1.2%" status="critical" />
//         </Grid>
//         <Grid size={{ xs: 12, md: 3 }}>
//           <MetricCard title="Latency" value="240ms" status="normal" />
//         </Grid>

//         <Grid size={12}>  {/* shorthand for { xs: 12, ... } */}
//           <div style={{ height: 400 }}>  {/* give chart space if needed */}
//             <CpuUsageChart />
//           </div>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }




// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import MetricCard from "../components/cards/MetricCard";
// import CpuUsageChart from "../components/charts/CpuUsageChart";

// export default function Dashboard() {
//   return (
//     <Container 
//       maxWidth="xl" 
//       sx={{ 
//         minHeight: '100vh',          // ← forces full viewport height
//         bgcolor: 'grey.50',          // ← light background to see area
//         py: 4                        // padding top/bottom
//       }}
//     >
//       <Grid container spacing={3}>
//         {/* Metric Cards - force visible height */}
//         <Grid size={{ xs: 12, md: 3 }}>
//           <div style={{ 
//             minHeight: '180px', 
//             backgroundColor: '#e3f2fd', 
//             border: '2px solid #2196f3', 
//             borderRadius: 8,
//             padding: 16,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontWeight: 'bold',
//             color: '#1976d2'
//           }}>
//             <MetricCard title="CPU Usage" value="65%" status="warning" />
//           </div>
//         </Grid>

//         <Grid size={{ xs: 12, md: 3 }}>
//           <div style={{ minHeight: '180px', backgroundColor: '#e8f5e9', border: '2px solid #4caf50', borderRadius: 8, padding: 16 }}>
//             <MetricCard title="Memory Usage" value="72%" status="normal" />
//           </div>
//         </Grid>

//         <Grid size={{ xs: 12, md: 3 }}>
//           <div style={{ minHeight: '180px', backgroundColor: '#ffebee', border: '2px solid #f44336', borderRadius: 8, padding: 16 }}>
//             <MetricCard title="Error Rate" value="1.2%" status="critical" />
//           </div>
//         </Grid>

//         <Grid size={{ xs: 12, md: 3 }}>
//           <div style={{ minHeight: '180px', backgroundColor: '#e8f5e9', border: '2px solid #4caf50', borderRadius: 8, padding: 16 }}>
//             <MetricCard title="Latency" value="240ms" status="normal" />
//           </div>
//         </Grid>

//         {/* Chart - give it explicit height */}
//         <Grid size={12}>
//           <div style={{ 
//             height: '500px',             // ← crucial for most charts
//             backgroundColor: '#f5f5f5',
//             border: '2px dashed #757575',
//             borderRadius: 8,
//             padding: 16
//           }}>
//             <CpuUsageChart />
//           </div>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import { Typography, CircularProgress } from "@mui/material";
// import MetricCard from "../components/cards/MetricCard";
// import CpuUsageChart from "../components/charts/CpuUsageChart";
// import { useMetrics } from "../hooks/useMetrics";

// export default function Dashboard() {
//   const { metrics, loading, lastUpdated } = useMetrics(5000); // 5s refresh

//   return (
//     <Container maxWidth="xl" sx={{ mt: 4 }}>
//       <Typography variant="h6" gutterBottom>
//         System Metrics
//       </Typography>

//       <Typography variant="caption" color="text.secondary">
//         Last updated:{" "}
//         {lastUpdated ? lastUpdated.toLocaleTimeString() : "—"}
//       </Typography>

//       {loading && metrics.length === 0 ? (
//         <CircularProgress sx={{ mt: 4 }} />
//       ) : (
//         <Grid container spacing={3} sx={{ mt: 1 }}>
//           {metrics.map((metric) => (
//             <Grid key={metric.key} size={{ xs: 12, md: 3 }}>
//               <MetricCard
//                 title={metric.label}
//                 value={metric.value}
//                 status={metric.status}
//               />
//             </Grid>
//           ))}

//           <Grid size={{ xs: 12 }}>
//             <CpuUsageChart />
//           </Grid>
//         </Grid>
//       )}
//     </Container>
//   );
// }

import { Container, Typography, CircularProgress, Box } from "@mui/material";
import Grid from "@mui/material/Grid"; // Using Grid2 for the latest MUI features
import MetricCard from "../components/cards/MetricCard";
import CpuUsageChart from "../components/charts/CpuUsageChart";
import { useMetrics } from "../hooks/useMetrics";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { metrics, loading, lastUpdated } = useMetrics(5000);

  // Helper to find specific metrics if needed, otherwise fallback to index/mock
  const getMetric = (index: number) => metrics[index] || { label: "Loading...", value: "0", status: "neutral" };

  const navigate = useNavigate();

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          System Metrics
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Last updated: {lastUpdated ? lastUpdated.toLocaleTimeString() : "—"}
        </Typography>
      </Box>

      {loading && metrics.length === 0 ? (
        <Box display="flex" justifyContent="center" mt={10}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {/* SYDNEY SECTION - Full Width */}
          <Grid size={12}>
            <Typography variant="subtitle1" color="error" sx={{ mb: 1 }}>
              City 1
            </Typography>
            <Box sx={{ border: "2px solid #FF5722", borderRadius: 1, minHeight: 200 }}>
              <CpuUsageChart title="City 1 Core Performance" />
            </Box>
          </Grid>

          {/* MELBOURNE SECTION - Full Width */}
          <Grid size={12}>
            <Typography variant="subtitle1" color="error" sx={{ mb: 1 }}>
              City 2
            </Typography>
            <Box sx={{ border: "2px solid #FF5722", borderRadius: 1, minHeight: 250, cursor:"pointer" ,
              "&:hover": { backgroundColor: "#fff3e0" },
             }}  onClick={() => navigate("/data")}>
               {/* Example of placing a primary metric card or chart here */}
              <MetricCard 
                title="City 2 Node Status" 
                value={getMetric(0).value} 
                status={getMetric(0).status} 
              />
            </Box>
          </Grid>

          {/* BOTTOM SPLIT SECTION - Two Columns */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ border: "2px solid #FF5722", borderRadius: 1, height: 300, p: 2 }}>
                <Typography variant="body2" color="text.secondary">Regional Logs</Typography>
                {/* Content for the left bottom box */}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ border: "2px solid #FF5722", borderRadius: 1, height: 300, p: 2 }}>
                <Typography variant="body2" color="text.secondary">Network Latency</Typography>
                {/* Content for the right bottom box */}
            </Box>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}