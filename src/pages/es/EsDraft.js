import { Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";


function EsDraft() {
    return (
        <>
            <h4>전자결재 양식</h4>

            <Grid container>
                <Grid>
                    <Link to="/es/leaveForm" style={{ textDecoration: "none" }}>
                        <Card>휴가 신청</Card>
                    </Link>
                </Grid>
                <Grid>
                    <Link to="/es/salaryForm" style={{ textDecoration: "none" }}>
                        <Card>급여정정 신청</Card>
                    </Link>
                </Grid>
                <Grid>
                    <Link to="/es/retireForm" style={{ textDecoration: "none" }}>
                        <Card>퇴직 신청</Card>
                    </Link>
                </Grid>
                <Grid>
                    <Link to="/es/certificationForm" style={{ textDecoration: "none" }}>
                        <Card>증명서 신청</Card>
                    </Link>
                </Grid>
            </Grid>







        </>
    )
}

export default EsDraft;