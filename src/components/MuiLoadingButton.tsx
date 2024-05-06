import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";

export const MuiLoadingButton = () => {
  return (
    <Stack m={2} spacing={2} direction='row'>
        <LoadingButton variant="outlined">Submit</LoadingButton>
        <LoadingButton variant="outlined" loading>Submit</LoadingButton>
        <LoadingButton variant="outlined" loadingIndicator='loading...'>Fetch Data</LoadingButton>
        <LoadingButton variant="outlined" loadingIndicator='loading...' loading>Fetch Data</LoadingButton>
        <LoadingButton variant="outlined" loadingPosition="start"
        startIcon={<Save/>}>Save</LoadingButton>
        <LoadingButton variant="outlined" loadingPosition="start"
        startIcon={<Save/>} loading>Save</LoadingButton>
    </Stack>
  )
}
