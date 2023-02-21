import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import EsTable from "./EsTable";



function EsMain() {


  return (
    <>
      <h3>전자결재 메인</h3>
      <Container>
        <Grid container direction="row" rowSpacing={4} columnSpacing={8} alignItems={"center"} >
          <Grid item xs="auto">
            <Card sx={{ minWidth: 250 }}>
              <CardContent>
                <Typography variant="" textAlign="center">지연된 결재 요청</Typography>
              </CardContent>
              <CardActions>
                <Button>1건</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{ minWidth: 250 }}>
              <CardContent>
                <Typography variant="subtitle2" textAlign="center">확인하지 않은 결재 요청</Typography>
              </CardContent>
              <CardActions>
                <Button>1건</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{ minWidth: 250 }}>
              <CardContent>
                <Typography variant="subtitle2" textAlign="center">수신참조 결재</Typography>
              </CardContent>
              <CardActions>
                <Button>1건</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{ minWidth: 250 }}>
              <CardContent>
                <Typography variant="subtitle2" textAlign="center">총 결재 내역</Typography>
              </CardContent>
              <CardActions>
                <Button>1건</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs="12">
            <Paper elevation={3}>
              <h5>결재 기안 문서</h5>
              <EsTable></EsTable>
            </Paper>
          </Grid>
          <Grid item xs="12">
            <Paper elevation={3}>
              <h5>결재 대기 문서</h5>
              <EsTable></EsTable>
            </Paper>
          </Grid>
          <Grid item xs="12">
            <Paper elevation={3}>
              <h5>결재 진행 문서</h5>
              <EsTable></EsTable>
            </Paper>
          </Grid>
          <Grid item xs="12">
            <Paper elevation={3}>
              <h5>결재 완료 문서</h5>
              <EsTable></EsTable>
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}

export default EsMain;
