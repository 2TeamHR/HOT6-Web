import * as React from 'react';

import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { callEaCertDocumentAPI } from '../../apis/EaDocumentAPICalls2';


function CertificationInfo({ docu }) {

  const eaCode = docu?.eaCode;
  const dispatch = useDispatch();
  const certDocument = useSelector(state => state.eaDocumentReducer2);

  React.useEffect(() => {
    dispatch(callEaCertDocumentAPI(
      { eaCode }
    ));
  }, []);

  return (
    <>
      <Grid item xs={6}><label>증명서 종류</label></Grid>{certDocument?.eaCode}
    </>
  );
}

export default CertificationInfo;