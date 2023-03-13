import mpManagement from '../../resources/css/pages/mypage/mypage-management.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import profileStyle from '../../resources/css/components/profile.module.css';
import Paper from '@mui/material/Paper';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { decodeJwt } from '../../utils/tokenUtils';

import { callChangeProfileImageAPI, callGetMemberAPI } from '../../apis/MemberAPICalls';

function MypageManagement (){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const member = useSelector(state => state.memberReducer);  
    const token = decodeJwt(window.localStorage.getItem("accessToken"));
    const memberDetail = member.data;
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState();
    const imageInput = useRef();

    console.log('memberDetail', memberDetail);

    useEffect(
        () => {
            if(token !== null) {
                dispatch(callGetMemberAPI({
                    memberCode: token.sub
                }));          
            }
        }, []
    );

    useEffect(() => {

            /* 이미지 업로드시 미리보기 세팅 */
            if(image){
                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if( result ){
                        setImageUrl(result);
                    }
                }
                fileReader.readAsDataURL(image);
            }
        }, [image]
    );
      
    if (!memberDetail || Object.keys(memberDetail).length === 0) {
    return <div>Loading...</div>;
    }

    const mypageManagementUpdateHref = () => {
        navigate("/mypage/management/update", { replace: true })
    }

    const changePasswordHref = () => {
        navigate("/changepassword", { replace: true })
    }

    const memberBirth = memberDetail.memberBirth ? new Date(memberDetail.memberBirth) : null;
    const formattedMemberBirthe = memberBirth ? memberBirth.toISOString().slice(0, 10) : '';

    const joinDate = memberDetail.memberBirth ? new Date(memberDetail.joinDate) : null;
    const formattedJoinDate = joinDate ? joinDate.toISOString().slice(0, 10) : '';

    /* 프로필 이미지 변경 핸들러 */
    const onClickImageUploadHandler = (e) => {
        console.log('[ProfileImageUpdate] onClickImageUploadHandler');

        const formData = new FormData();
        imageInput.current.click();

        imageInput.current.onchange = (e) => { // 이미지가 변경되면 실행되는 함수
            const image = e.target.files[0];
            setImage(image);
                if (image) {
                    formData.append("memberImage", image);
                }

            dispatch(callChangeProfileImageAPI({
                form: formData,
                memberCode: memberDetail.memberCode
            })); 
        };

        // alert("마이페이지로 이동합니다.")
        // navigate("/mypage/management/", { replace: true })
        // window.location.reload();
    };

    return(
        <main className={mainTitleStyle.main}>
            <div>
                <div className={mainTitleStyle.title}>
                    <p>개인정보관리</p>
                </div>
                <div className='d-flex ml-5 mr-5'>
                    <Paper elevation={3} className={mpManagement.profileMain}>
                        <div className={mpManagement.mpmProfile}>
                            {memberDetail.profileImageList && memberDetail.profileImageList.length > 0 &&
                                <img className={profileStyle.mpmProfileImg} alt="preview" src={memberDetail.profileImageList[0].profileImageLocation} />
                            }
                            <input
                                style={ { display: 'none' }}
                                type="file"
                                name='memberImage'
                                accept='image/jpg,image/png,image/jpeg,image/gif'
                                ref={ imageInput }
                            />
                            <button className={profileStyle.mpmProfileImgChangeBtn} onClick={onClickImageUploadHandler}>변경</button>
                        </div>
                        <div className={mpManagement.infoBtn}>
                            <button onClick={changePasswordHref}>비밀번호변경</button>
                            <button onClick={mypageManagementUpdateHref}>개인정보수정</button>
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
                                <span className='float-right fw-blod'>{memberDetail.memberName || ''}</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-phone mr-3`}></i>
                                <span>휴대전화</span>
                                <span className='float-right fw-blod'>{memberDetail.memberPhone || ''}</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-envelope mr-3`}></i>
                                <span>이메일</span>
                                <span className='float-right fw-blod'>{memberDetail.memberEmail || ''}</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-home mr-3`}></i>
                                <span>주소</span>
                                <span className='float-right fw-blod'>{memberDetail.memberAddress || ''}</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-calendar-alt mr-3`}></i>
                                <span>생년월일</span>
                                <span className='float-right fw-blod'>{formattedMemberBirthe}</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-male-female mr-3`}></i>
                                <span>성별</span>
                                <span className='float-right fw-blod'> {memberDetail.memberGender === 'F' ? '여자' : memberDetail.memberGender === 'M' ? '남자' : ''}</span>
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
                                <span className='float-right fw-blod'>{memberDetail.team.teamName || ''}</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-buildings mr-3`}></i>
                                <span>직급</span>
                                <span className='float-right fw-blod'>{memberDetail.rank.rankName || ''}</span>
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

export default MypageManagement;