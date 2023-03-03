import { Container, createTheme, Grid, Paper, ThemeProvider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme({
    typography: {
        fontFamily: [

            'Spoqa Han Sans Neo',
        ].join(',')

    },


});

function EsDraftMenu() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container>
                    <h4>전자결재 기안</h4>

                    <Grid container spacing={3}>
                        <Grid item>
                            <Link to="/es/leaveForm" style={{ textDecoration: "none" }}>
                                <Paper elevation={5} sx={{ width: 200, height: 100, borderRadius: 3 }}>
                                    <Typography variant="h5" textAlign="center" sx={{ fontWeight: 'bold', transform: "rotate(0.04deg)" }}>휴가 신청</Typography>
                                </Paper>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/es/salaryForm" style={{ textDecoration: "none" }}>
                                <Paper elevation={5} sx={{ width: 200, height: 100, borderRadius: 3 }} >
                                    <Typography variant="h5" textAlign="center" sx={{ fontWeight: 'bold', transform: "rotate(0.04deg)" }}>급여정정 신청</Typography>
                                </Paper>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/es/retireForm" style={{ textDecoration: "none" }}>
                                <Paper elevation={5} sx={{ width: 200, height: 100, borderRadius: 3 }} >
                                    <Typography variant="h5" textAlign="center" sx={{ fontWeight: 'bold', transform: "rotate(0.04deg)" }}>퇴직 신청</Typography>
                                </Paper>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/es/certificationForm" style={{ textDecoration: "none" }}>
                                <Paper elevation={5} sx={{ width: 200, height: 100, borderRadius: 3 }} >
                                    <Typography variant="h5" textAlign="center" sx={{ fontWeight: 'bold', transform: "rotate(0.04deg)" }}>증명서 신청</Typography>
                                </Paper>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/es/dutyForm" style={{ textDecoration: "none" }}>
                                <Paper elevation={5} sx={{ width: 200, height: 100, borderRadius: 3 }} >
                                    <Typography variant="h5" textAlign="center" sx={{ fontWeight: 'bold', transform: "rotate(0.04deg)" }}>예비군 훈련</Typography>
                                </Paper>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/es/loaForm" style={{ textDecoration: "none" }}>
                                <Paper elevation={5} sx={{ width: 200, height: 100, borderRadius: 3 }} >
                                    <Typography variant="h5" textAlign="center" sx={{ fontWeight: 'bold', transform: "rotate(0.04deg)" }}>휴직 신청</Typography>
                                </Paper>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/es/reinstatementForm" style={{ textDecoration: "none" }}>
                                <Paper elevation={5} sx={{ width: 200, height: 100, borderRadius: 3 }} >
                                    <Typography variant="h5" textAlign="center" sx={{ fontWeight: 'bold', transform: "rotate(0.04deg)" }}>복직 신청</Typography>
                                </Paper>
                            </Link>
                        </Grid>
                    </Grid>





                </Container>
            </ThemeProvider>
        </>
    )
}

export default EsDraftMenu;