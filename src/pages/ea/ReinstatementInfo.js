import * as React from 'react';
import { Grid} from '@mui/material';

export default function ReinstatementInfo() {

  return (
    <>
                <Grid item xs={6}><label htmlFor="">복직 예정일</label></Grid>
                <Grid item xs={6}><label htmlFor="">첨부파일</label></Grid>
    </>
  );
}
