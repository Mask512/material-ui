import { Link, Stack, Typography } from "@mui/material"

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
        <Link href='#'>Link</Link>
        <Link href='#' color='secondary'>Secondary</Link>
        <Link href='#' color='secondary' underline="hover">Underline hover</Link>
        <Link href='#' color='secondary' underline="none">Underline none</Link>
        <Typography variant="h6">
        <Link href='#' color='secondary' underline="none">h6 element</Link>
        </Typography>
        <Link href='#' variant="body2">body 2</Link>
    </Stack>
  )
}
