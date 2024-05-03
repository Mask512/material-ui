import { Stack, Alert, AlertTitle, Button } from "@mui/material"
import { Check } from "@mui/icons-material";

export const MuiAlert = () => {
  return (
    <Stack spacing={2} m='2rem'>
        <Alert severity="error">This is error alert</Alert>
        <Alert severity="warning">This is warning alert</Alert>
        <Alert severity="info">This is info alert</Alert>
        <Alert severity="success">This is success alert</Alert>

        <Alert variant="outlined" severity="error">This is error alert</Alert>
        <Alert variant="outlined" severity="warning">This is warning alert</Alert>
        <Alert variant="outlined" severity="info">This is info alert</Alert>
        <Alert variant="outlined" severity="success">This is success alert</Alert>
        
        <Alert variant="filled" severity="error">This is error alert</Alert>
        <Alert variant="filled" severity="warning">This is warning alert</Alert>
        <Alert variant="filled" severity="info">This is info alert</Alert>
        <Alert variant="filled" severity="success">This is success alert</Alert>
        
        <Alert variant="filled" severity="error" onClose={()=> alert('close alert')}>
            <AlertTitle>error</AlertTitle>
            This is error alert</Alert>
        <Alert variant="filled" severity="warning">
            <AlertTitle>warning</AlertTitle>
            This is warning alert</Alert>
        <Alert variant="filled" severity="info">
            <AlertTitle>info</AlertTitle>
            This is info alert</Alert>
        <Alert variant="filled" severity="success" icon={<Check fontSize="inherit"/>}
        action={
            <Button color="inherit" size='small'>
                UNDO
            </Button>
        }>
            <AlertTitle>success</AlertTitle>
            This is success alert</Alert>
    </Stack>
  )
}
