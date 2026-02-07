import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  LinearProgress,
  Alert,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { uploadFile } from "../api/fileUploadApi.ts";

export default function File() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setError(null);
      setSuccess(false);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    try {
      setLoading(true);
      await uploadFile(file);
      setSuccess(true);
    } catch (err) {
      setError("File upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        Upload File
      </Typography>

      <Button
        component="label"
        variant="outlined"
        startIcon={<CloudUploadIcon />}
        fullWidth
        sx={{ mb: 2 }}
      >
        Select File
        <input type="file" hidden onChange={handleFileChange} />
      </Button>

      {file && (
        <Typography variant="body2" sx={{ mb: 2 }}>
          Selected: {file.name}
        </Typography>
      )}

      {loading && <LinearProgress sx={{ mb: 2 }} />}

      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">File uploaded successfully</Alert>}

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        disabled={!file || loading}
        onClick={handleUpload}
      >
        Upload
      </Button>
    </Box>
  );
}
