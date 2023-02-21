import { Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";


function EsDraftMenu() {
    return (
        <>
            <h4>전자결재 기안</h4>

            <Grid container>
                <Grid item>
                    <Link to="/es/leaveForm" style={{ textDecoration: "none" }}>
                        <Card sx={{ width: 200, height: 100 }}>휴가 신청</Card>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/es/salaryForm" style={{ textDecoration: "none" }}>
                        <Card sx={{ width: 200, height: 100 }}>급여정정 신청</Card>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/es/retireForm" style={{ textDecoration: "none" }}>
                        <Card sx={{ width: 200, height: 100 }}>퇴직 신청</Card>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/es/certificationForm" style={{ textDecoration: "none" }}>
                        <Card sx={{ width: 200, height: 100 }}>증명서 신청</Card>
                    </Link>
                </Grid>
            </Grid>







        </>
    )
}

export default EsDraftMenu;