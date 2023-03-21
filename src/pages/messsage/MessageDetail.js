
import React from 'react';
import messageStyle from '../../resources/css/pages/message/messageDetail.module.css'
import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import {callGetMessageListAPI, callRegistMessageListAPI} from "../../apis/MessageAPICalls";
import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from "../../utils/tokenUtils";
import {useLocation} from "react-router-dom";


function MessageDetail() {

        const navigate = useNavigate();
        const [memberName1, setMemberName1] = useState('');
        const [members, setMembers] = useState([]);
        const [recipients, setRecipients] = useState([])
        const token = decodeJwt(window.localStorage.getItem("accessToken"));
        const [form,setForm] = useState({
            recipients:[],
            messageTitle: '',
            messageContent: ''
        })
        const dispatch = useDispatch();
        const messageReducer = useSelector(state => state.messageReducer);
        const [count , setCount] = useState('');
        const [count2 , setCount2] = useState('');
        const [count3 , setCount3] = useState('');
        const [valueCheck , setValueCheck] = useState('')
        const location = useLocation();

        const messageData = location.state || {};

        console.log("메세지데이터 ",messageData);

        useEffect(() =>{
            if(memberName1) {
                axios.get(`http://localhost:8888/api/v1/message/search/${memberName1}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*",
                        "Authorization": `Bearer ${window.localStorage.getItem('accessToken')}`
                    }})
                .then(response => {
                 const membersData = response.data.data.map(member =>({ name:member.memberName, email:member.memberEmail}));   
                setMembers(membersData);
                console.log("결과값");
                console.log(response);
                }).catch(error =>{
                    console.log(error)
                    console.log("메세지 단 오류 ");
                })
                }
            }, [memberName1]);


        const handlerSearch = (e) => {
            e.preventDefault(); // 기본 동작을 막는다.
        
            const { name, value } = e.target;
            if (name === 'searchInput') {
                setMemberName1(value || '');
            }
        
            setForm({
                ...form,
                [name]: value,
            });
        };

        const handleSelectRecipient = (recipient) => {
            setRecipients([...recipients, recipient]);
            setMembers([]);
            document.getElementById('searchInput').value= '';
        
        }

        const handleRemoveRecipient = (recipient) => {
            setRecipients(recipients.filter( r=> r.id !== recipient.id));
        }

        const complete =(recipient) => {

               

                const names = recipients.map((r)=>r.name).join(', ');
                if(names.length > 0){
                    document.getElementById('searchInput').value = names;
                    setMemberName1(names);
                } else {
                    document.getElementById('searchInput').value ='';
                    setMemberName1('');
                }
                // setRecipients([]);
        }

        const onClickMessageHandler=()=> {
            // if(form.searchInput === '' || form.messageTitle ==='' || form.messageContent ===''){
            //     alert('모든 항목을 입력해 주세요');
            //     return;
            // } 
            console.log(recipients);
      

            const payloadMessage ={
                messageTitle: form.messageTitle,
                messageContent: form.messageContent,
                recipients: recipients,
                memberCode: token.sub,

            }
            console.log(payloadMessage);

            dispatch(callRegistMessageListAPI({
                    payload:payloadMessage
            }))


            };

            const payload ={
                memberCode: token.sub,
            }



    useEffect(() => {
        axios.post(`http://localhost:8888/api/v1/messageReceivedCount`,payload, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": `Bearer ${window.localStorage.getItem('accessToken')}`
            }
        }).then(response => {
            console.log(response.data); // 응답 데이터를 콘솔에 출력
            setCount(response.data.data);
        })
            .catch(error => {
                console.error(error);
            });
    }, []);


    useEffect(() => {
        axios.post(`http://localhost:8888/api/v1/messageSentCount`,payload, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": `Bearer ${window.localStorage.getItem('accessToken')}`
            }
        }).then(response => {
            console.log(response.data); // 응답 데이터를 콘솔에 출력
            setCount2(response.data.data);
        })
            .catch(error => {
                console.error(error);
            });
    }, []);


    useEffect(() => {
        axios.post(`http://localhost:8888/api/v1/messageTrashCount`,payload, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": `Bearer ${window.localStorage.getItem('accessToken')}`
            }
        })
            .then(response => {
                console.log(response.data);
                setCount3(response.data.data);
            })
            .catch(error => {
                console.log("useEffect 쪽 문제");
                console.error(error);
            });
    }, []);


    return (
        <>



    {/* // <!--========== CONTENTS ==========--> */}
        <main>
            <div className={messageStyle.main}>
                <div className={messageStyle.module}>
                    <div className={messageStyle.module2}>
                        <div className={`${messageStyle.infoUpdate} center mt-3`}>
                            <button><Link to="/messsage/message"
                                     style={{ color: 'white', textDecoration: 'none'}}

                                    >메세지 쓰기</Link>
                            </button>
                        </div>

                        <div className="mt-3 pt-3">
                            <div className="ml-4 mr-4 pb-4">
                                <span className="ml-4 fs-5 mr-3"><Link to="/messsage/receivedMessage" style={{ color: 'black', textDecoration: 'none'}}>받은 메세지</Link></span>
                                <span className={`ml-1 fs-5 float-none ${messageStyle.workDay}`}>{count}</span>
                            </div>
                            <div className="ml-4 mr-4 pb-4">
                                <span className="ml-4 fs-5 mr-3"><Link to="/messsage/MessageSent" style={{ color: 'black', textDecoration: 'none'}}>보낸 메세지</Link></span>
                                <span className={`ml-1 fs-5 float-none ${messageStyle.workDay}`}>{count2}</span>
                            </div>
                            <div className="ml-4 mr-4 pb-4">
                                <span className="ml-4 fs-5 mr-3"><Link to="/messsage/MessageTrash" style={{ color: 'black', textDecoration: 'none'}}>휴지통</Link></span>
                                <span className={`ml-1 fs-5 float-none ${messageStyle.workDay}`}>{count3}</span>
                            </div>
                        </div>

                       
                        
                    </div>

                 
                    <div className={messageStyle.messageBlank}>


                        <div className="ml-1 mr-4 pb-3">
                            <span>보낸 사람 &ensp;</span>
                            <input type="text" 
                                   id="searchInput" 
                                   name="searchInput"
                                   value={`${messageData.receivedEmail.name} <${messageData.receivedEmail.email}>`}
                            />

                        </div>

                
                        <div className="ml-1 mr-4 pb-3">
                            <span>제목&emsp;&emsp;&emsp;</span>
                            <input
                                   id="messageTitle"
                                   name="messageTitle"
                                   value={messageData.receivedEmail.title}
                            />

                        </div>


                        <div  className={`${messageStyle.writePlace}`}>
                            <textarea 
                                      id="messageContent"
                                      name="messageContent" 

                                      rows="14"
                                      cols="80"
                                      value={messageData.receivedEmail.name}
                            >

                            </textarea>
                        </div>


                      



                             
                    </div>


                </div>
               
            </div>

</main>

       


    </>
    );
}

export default MessageDetail;