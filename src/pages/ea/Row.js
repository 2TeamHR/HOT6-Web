import { Box, Chip, Collapse, createTheme, IconButton, Step, StepLabel, Stepper, TableCell, TableRow, ThemeProvider, Typography } from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import EaModalNew from "./EaModalNew";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Row(docu1) {
    const { docu } = docu1;
    const [open, setOpen] = useState(false);
    const [stepCount, setStepCount] = useState(0);
    const [docuStatus, setDocuStatus] = useState('');
    const [statusColor, setStatusColor] = useState('primary');
    const count = 0;


    const theme = createTheme({
        typography: {
            fontFamily: [

                'Spoqa Han Sans Neo',
            ].join(',')
        },


        palette: {
            error: {
                main: '#64748B',
                contrastText: '#fff',
            },
        },

    });

    useEffect(() => {
        docu?.eaStatusCode === 'EA_STATUS_WAITING' ? setStatusColor('info') :
            (docu?.eaStatusCode === 'EA_STATUS_FINISH' ? setStatusColor('success') :
                (docu?.eaStatusCode === 'EA_STATUS_RETURN' ? setStatusColor('error') : setStatusColor('primary')))
    }, [])


    useEffect(() => {

        setDocuStatus(docu?.eaStatusCategory?.eaStatusName);

    }, [])

    console.log("3번째 렌더");
    return (
        <>
            <ThemeProvider theme={theme}>
                <TableRow>
                    <TableCell align="center">{docu?.eaCode}</TableCell>
                    <TableCell align="center">{docu?.dtype}</TableCell>
                    <TableCell align="center">{docu?.eaSubject}</TableCell>
                    <TableCell align="center">{docu?.eaMember?.team?.teamName}</TableCell>
                    <TableCell align="center">{docu?.eaMember?.rank?.rankName}</TableCell>
                    <TableCell align="center">{docu?.eaMember?.memberName}</TableCell>
                    <TableCell align="center">{docu?.eaDate}</TableCell>
                    <TableCell align="center">

                        <Chip label={docuStatus} color={statusColor} />

                    </TableCell>
                    <TableCell align="center">

                        {/* 모달 */}
                        <EaModalNew documentInfo={docu} />


                    </TableCell>
                    <TableCell align="center">
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0, borderBottom: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1, }}>

                                {/* 화살표 내리면 나오는 부분 시작 */}

                                <Typography variant="h6" gutterBottom component="div">
                                    전자결재 미리보기
                                </Typography>
                                <Box sx={{ alignContent: 'center' }}>
                                    <Stepper activeStep={stepCount} alternativeLabel>
                                        <Step>
                                            <StepLabel>{docu?.eaMember?.memberName}</StepLabel>
                                        </Step>

                                        {docu?.eaApproverInfoList?.map((label) => (
                                            <Step key={label?.eaMember?.eaApproverCode}>
                                                <StepLabel>{label?.eaMember?.memberName}</StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>

                                    {/* 끝 */}
                                </Box>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </ThemeProvider>
        </>
    );
}