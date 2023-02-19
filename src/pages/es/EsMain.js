import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material';

function EsMain() {


    return (<>
        <h3>전자결재 메인</h3>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 250, height: 120 }}>
                    <CardContent>
                        <Typography variant='subtitle2'>지연된 결재 요청</Typography>
                    </CardContent>
                    <CardActions>
                        <Button>1건</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 250, height: 120 }}>
                    <CardContent>
                    <Typography variant='subtitle2'>확인하지 않은 결재 요청</Typography>
                    </CardContent>
                    <CardActions>
                        <Button>1건</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 250, height: 120 }}>
                    <CardContent>
                    <Typography variant='subtitle2'>수신참조 결재</Typography>
                    </CardContent>
                    <CardActions>
                        <Button>1건</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 250, height: 120 }}>
                    <CardContent>
                    <Typography variant='subtitle2'>총 결재 내역</Typography>
                    </CardContent>
                    <CardActions>
                        <Button>1건</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>


        














    </>
    );





}

export default EsMain;