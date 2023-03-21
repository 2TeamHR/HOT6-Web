import mpManagement from '../../resources/css/pages/mypage/mypage-management.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import profileStyle from '../../resources/css/components/profile.module.css';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { decodeJwt } from '../../utils/tokenUtils';

import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-bootstrap/Modal';

import {
    callGetMemberAPI,
    callMyInfoUpdateAPI
} from '../../apis/MemberAPICalls';

function MypageManagementUpdate (){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const member = useSelector(state => state.memberReducer);  
    const token = decodeJwt(window.localStorage.getItem("accessToken"));   
    const memberDetail = member.data;

    console.log('memberDetail', memberDetail);

    useEffect(
        () => {    
            if(token !== null) {
                dispatch(callGetMemberAPI({
                    memberCode: token.sub
                }));          
            }
        }
        ,[]
    );

    const [address, setAddress] = useState('');

    const handleComplete = (data) => {
        setAddress(data.address);
        setShow(false);;
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /* 변경할 데이터 form */
    const [form, setForm] = useState({
        memberPhone: memberDetail.memberPhone || '',
        memberEmail: memberDetail.memberEmail || '',
        memberAddress: memberDetail.memberAddress || ''
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    /* 개인 정보 변경 핸들러 */
    const onClickMyInfoUpdateHandler = () => {

        console.log('[MyInfoUpdate] onClickMyInfoUpdateHandler');

        const formData = new FormData();

        formData.append("memberPhone", form.memberPhone);
        formData.append("memberEmail", form.memberEmail);
        formData.append("memberAddress", form.memberAddress);

        dispatch(callMyInfoUpdateAPI({
            form: formData,
            memberCode: memberDetail.memberCode
        }));        
        
        alert("마이페이지로 이동합니다.")
        navigate("/mypage/management/", { replace: true })
        window.location.reload();
    }

    /* 취소시 메인 이동 */
    const mypageManagementUpdateHref = () => {
        alert("수정이 취소 되었습니다.");
        navigate("/mypage/management/", { replace: true })
    }
    
    /* 날짜 형식 변환 */
    const memberBirth = memberDetail.memberBirth ? new Date(memberDetail.memberBirth) : null;
    const formattedMemberBirthe = memberBirth ? memberBirth.toISOString().slice(0, 10) : '';

    const joinDate = memberDetail.memberBirth ? new Date(memberDetail.joinDate) : null;
    const formattedJoinDate = joinDate ? joinDate.toISOString().slice(0, 10) : '';

    return(
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>개인정보관리</p>
                </div>

                <div className='d-flex ml-5 mr-5 mb-5'>
                    <Paper elevation={3} className={mpManagement.profileMain}>
                        <div className={mpManagement.mpmProfile}>
                            <img className={profileStyle.mpmProfileImg} alt="profile_img" src={memberDetail.profileImageList[0].profileImageLocation} />
                        </div>
                        <div className={mpManagement.infoBtn}>
                            <button onClick={onClickMyInfoUpdateHandler}>완료</button>
                            <button onClick={mypageManagementUpdateHref}>취소</button>
                        </div>
                    </Paper>
                    <div className={mpManagement.profileMain2}>
                        <Paper elevation={3} className={mpManagement.profileInfoBox}>
                            <div className={mpManagement.infoTitle}>
                                <p>개인정보</p>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-user mr-3`}></i>
                                <span>이름</span>
                                <span className='float-right fw-blod'>{memberDetail.memberName}</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-phone mr-3`}></i>
                                <span>전화번호</span>
                                <TextField 
                                    size="small" 
                                    className={mpManagement.managementInput} 
                                    name="memberPhone"
                                    id="outlined-basic" 
                                    label={memberDetail.memberPhone} 
                                    variant="outlined" 
                                    onChange={onChangeHandler}
                                />
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-envelope mr-3`}></i>
                                <span>이메일</span>
                                <TextField 
                                    size="small" 
                                    className={mpManagement.managementInput} 
                                    name="memberEmail"
                                    id="outlined-basic" 
                                    label={memberDetail.memberEmail} 
                                    variant="outlined" 
                                    onChange={onChangeHandler}
                                />
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-home mr-3`}></i>
                                <span>주소</span>
                                <TextField 
                                    size="small" 
                                    className={mpManagement.managementInput}
                                    onClick={handleShow}
                                    name="memberAddress" 
                                    id="outlined-basic" 
                                    label={memberDetail.memberAddress} 
                                    variant="outlined" 
                                    onChange={onChangeHandler}
                                />
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>주소 검색</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="text-center">
                                            <DaumPostcode
                                                onComplete={handleComplete}
                                                autoClose
                                                width={500}
                                                height={600}
                                            />
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-calendar-alt mr-3`}></i>
                                <span>생년월일</span>
                                <span className='float-right fw-blod'>{formattedMemberBirthe}</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-male-female mr-3`}></i>
                                <span>성별</span>
                                <span className='float-right fw-blod'>{memberDetail.memberGender === 'F' ? '여자' : memberDetail.memberGender === 'M' ? '남자' : ''}</span>
                            </div>
                        </Paper>
                        <Paper elevation={3} className={`mt-3 ${mpManagement.profileInfoBox}`}>
                            <div className={mpManagement.infoTitle}>
                                <p>회사정보</p>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-buildings mr-3`}></i>
                                <span>사번</span>
                                <span className='float-right fw-blod'>{memberDetail.memberCode || ''}</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-buildings mr-3`}></i>
                                <span>소속팀</span>
                                <span className='float-right fw-blod'>{memberDetail.teamName || ''}</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-buildings mr-3`}></i>
                                <span>직급</span>
                                <span className='float-right fw-blod'>{memberDetail.rankName || ''}</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-buildings mr-3`}></i>
                                <span>내선번호</span>
                                <span className='float-right fw-blod'>{memberDetail.inlinePhone || ''}</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-buildings mr-3`}></i>
                                <span>입사일</span>
                                <span className='float-right fw-blod'>{formattedJoinDate}</span>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MypageManagementUpdate;