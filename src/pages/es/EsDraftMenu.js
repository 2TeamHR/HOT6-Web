import { Card, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";


function EsDraftMenu() {
    return (
        <>
            <Container>
                <h4>전자결재 기안</h4>

                <Grid container spacing={3}>
                    <Grid item>
                        <Link to="/es/leaveForm" style={{ textDecoration: "none" }}>
                            <Card sx={{ width: 200, height: 100 }}><Typography textAlign="center">휴가 신청</Typography></Card>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/es/salaryForm" style={{ textDecoration: "none" }}>
                            <Card sx={{ width: 200, height: 100 }} ><Typography textAlign="center">급여정정 신청</Typography></Card>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/es/retireForm" style={{ textDecoration: "none" }}>
                            <Card sx={{ width: 200, height: 100 }} ><Typography textAlign="center">퇴직 신청</Typography></Card>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/es/certificationForm" style={{ textDecoration: "none" }}>
                            <Card sx={{ width: 200, height: 100 }} ><Typography textAlign="center">증명서 신청</Typography></Card>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/es/" style={{ textDecoration: "none" }}>
                            <Card sx={{ width: 200, height: 100 }} ><Typography textAlign="center">예비군 훈련</Typography></Card>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/es/" style={{ textDecoration: "none" }}>
                            <Card sx={{ width: 200, height: 100 }} ><Typography textAlign="center">휴직 신청</Typography></Card>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/es/" style={{ textDecoration: "none" }}>
                            <Card sx={{ width: 200, height: 100 }} ><Typography textAlign="center">복직 신청</Typography></Card>
                        </Link>
                    </Grid>
                </Grid>





            </Container>

        </>
    )
}

export default EsDraftMenu;