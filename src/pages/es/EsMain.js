import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import EsTable from "./EsTable";




function EsMain() {


  return (
    <>
      <Container maxWidth={"lg"}>
        <h4>전자결재 메인</h4>
        <Grid container direction="row" rowSpacing={4} columnSpacing={4} justifyContent="space-between" >
          <Grid item xs="auto">
            <Card sx={{ minWidth: 250 }}>
              <CardContent>
                <Typography variant="h6" textAlign="center" sx={{ fontWeight: 'bold' }}>지연된 결재 요청</Typography>
              </CardContent>
              <CardActions>
                <Button>1건</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{ minWidth: 250 }}>
              <CardContent>
                <Typography variant="h6" textAlign="center" sx={{ fontWeight: 'bold' }}>확인하지 않은 결재 요청</Typography>
              </CardContent>
              <CardActions>
                <Button>1건</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{ minWidth: 250 }}>
              <CardContent>
                <Typography variant="h6" textAlign="center" sx={{ fontWeight: 'bold' }}>수신참조 결재</Typography>
              </CardContent>
              <CardActions item>
                <Button>1건</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{ minWidth: 250 }}>
              <CardContent>
                <Typography variant="h6" textAlign="center" sx={{ fontWeight: 'bold' }}>총 결재 내역</Typography>
              </CardContent>
              <CardActions>
                <Button>1건</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs="12">
            <Paper elevation={5}>
              <Grid item container justifyContent="space-between">
                <h4>결재 기안 문서</h4>
                <Button>더보기</Button></Grid>
              <Divider />
              <EsTable></EsTable>
            </Paper>
          </Grid>
          <Grid item xs="12">
            <Paper elevation={5}>
              <Grid item container justifyContent="space-between">
                <h4>결재 대기 문서</h4>
                <Button>더보기</Button></Grid>
              <Divider />
              <EsTable></EsTable>
            </Paper>
          </Grid>
          <Grid item xs="12">
            <Paper elevation={5}>
              <Grid item container justifyContent="space-between">
                <h4>결재 진행 문서</h4>
                <Button>더보기</Button></Grid>
              <Divider />
              <EsTable></EsTable>
            </Paper>
          </Grid>
          <Grid item xs="12">
            <Paper elevation={5}>
              <Grid item container justifyContent="space-between">
                <h4>결재 완료 문서</h4>
                <Button>더보기</Button></Grid>
              <Divider />
              <EsTable></EsTable>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default EsMain;
