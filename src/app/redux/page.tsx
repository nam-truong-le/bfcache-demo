"use client";

import {AppBar, Button, Container, Stack, TextField, Toolbar, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {selectValue, setValue} from "@/valueSlice";

export default function Home() {
    const dispatch = useAppDispatch()
    const value = useAppSelector(selectValue)

    return (
        <main>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" component="div">cfcache demo</Typography>
                </Toolbar>
            </AppBar>
            <Container fixed sx={{paddingTop: "2rem", paddingBottom: "2rem"}}>
                <Stack spacing={2}>
                    <Typography color="error" fontWeight="bold">
                        Internal state value: {value}
                    </Typography>
                    <Button variant="contained" onClick={() => window.location.href = "https://google.com"}>Click
                        me</Button>
                    <TextField label="A input field" value={value} onChange={e => dispatch(setValue(e.target.value))}/>
                </Stack>
            </Container>
        </main>
    )
}
