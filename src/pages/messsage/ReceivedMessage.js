import React from 'react';
import messageStyle from '../../resources/css/pages/message/message2.module.css'
import messageStyle2 from '../../resources/css/pages/message/receivedMessage.module.css'
import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { padding } from '@mui/system';
import {useDispatch, useSelector} from "react-redux";
import { callGetMessageReceiveCountAPI, callGetMessageReceiveListAPI, callGetMessageSentCountAPI, callGetMessageSentListAPI } from '../../apis/MessageAPICalls';
import {decodeJwt} from "../../utils/tokenUtils";






function ReceivedMessage(){

    const [emailSelect, setEmailSelect] = useState('');
    const [count , setCount] = useState('');
    const [count2 , setCount2] = useState('');
    const [count3 , setCount3] = useState('');
    const dispatch = useDispatch();
    const messageReducer = useSelector(state => state.messageReducer);
    const [isSelectAll, setIsSelectAll] = useState(false);
    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    const memberCode = token.sub;


    useEffect(()=>{

        
        dispatch(callGetMessageReceiveListAPI())
            .then((receivedData) => {
                setEmailSelect(receivedData);
            }).catch(error => console.log(error))
    
        }, []);


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
            })
            .then(response => {
              console.log(response.data);
              setCount(response.data.data);
            })
            .catch(error => {
              console.log("useEffect 쪽 문제");
              console.error(error);
            });
          }, []);

          useEffect(() => {
            axios.post(`http://localhost:8888/api/v1/messageSentCount`, payload,{
              headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": `Bearer ${window.localStorage.getItem('accessToken')}`
              }
            })
            .then(response => {
              console.log(response.data);
              console.log("보낸메세지 카운트");
              setCount2(response.data.data);
            })
            .catch(error => {
              console.log("useEffect 쪽 문제");
              console.error(error);
            });
          }, []);

          function selectAll() {
            const checkboxes = document.querySelectorAll("input[type='checkbox']");
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = !isSelectAll;
              }
              
              setIsSelectAll(!isSelectAll);
            
            
          }
          
          



    return (
    <>
        


    {/* // <!--========== CONTENTS ==========--> */}
        <main>
            <div className={messageStyle.main}>
                <div className={messageStyle.module}>
                    <div className={messageStyle.module2}>
                        <div className={`${messageStyle.infoUpdate} center mt-3`}>
                            <button><Link to="/messsage/message" style={{ color: 'white', textDecoration: 'none'}} >메세지 쓰기</Link></button>
                        </div>

                        <div className="mt-3 pt-3">
                            <div className="ml-4 mr-4 pb-4">
                                <span className="ml-4 fs-5 mr-3 font-weight-bold"><Link to="/messsage/receivedMessage" style={{ color: 'black', textDecoration: 'none'}}>받은 메세지</Link></span>
                                <span className={`ml-1 fs-5 float-none ${messageStyle.workDay}`}>{count}</span>
                            </div>
                            <div className="ml-4 mr-4 pb-4">
                                <span className="ml-4 fs-5 mr-3 " ><Link to="/messsage/MessageSent" style={{ color: 'black', textDecoration: 'none'}}>보낸 메세지</Link></span>
                                <span className={`ml-1 fs-5 float-none ${messageStyle.workDay}`}>{count2}</span>
                            </div>
                            <div className="ml-4 mr-4 pb-4">
                                <span className="ml-4 fs-5 mr-3"><Link to="/messsage/MessageTrash" style={{ color: 'black', textDecoration: 'none'}}>휴지통</Link></span>
                                <span className={`ml-1 fs-5 float-none ${messageStyle.workDay}`}>5</span>
                            </div>
                        </div>



                    </div>



                   

            
                    <div className="mt-5">

                        
                        <div className={messageStyle2.function}>

                            
                        <div className={messageStyle2.buttonOptionalSelect}>
                            <div className={messageStyle2.buttonTaskWrap} >
                                <input type="checkbox" id="selection_all" className={messageStyle2.buttonCheckboxBlind} onClick={selectAll} checked={isSelectAll} />
                            </div>
                
                            <div className={messageStyle2.buttonTaskWrap}>
                                <button type="button" className={messageStyle2.buttonTaskSvg}>
                                    <span className="text">읽음</span>
                                </button>
                            </div>
                            <div className={`${messageStyle2.buttonTaskWrap}`}>
                                <button type="button" className={messageStyle2.buttonTaskSvg}>
                                    <span className="text">삭제</span>
                                </button>
                            </div>
                        </div>  

                        <div className={`${messageStyle2.tableBox}`} >
                          {emailSelect.length>0 && emailSelect.map((receivedEmail,index) => (  
                         <table key={index} className={messageStyle2.table}>   
                            <tbody className={messageStyle2.textCenter}>
                            <tr>
                                <td><input type="checkbox"/></td>
                                <td>{receivedEmail.name}</td>
                                                            
                                <td></td>
                                <td colSpan="2" style={{ textAlign: "center", 
                                                         width:"200px",
                                                         overflow:'hidden',
                                                         whiteSpace:'nowrap',
                                                         textOverflow:'clip'

                                                      }}>{receivedEmail.title}</td>   
                                <td></td>

                                {/* <td></td> */}
                                <td colSpan="2">{moment(receivedEmail.date).format('YY-MM-DD hh:mm')}</td> 
                            </tr>
                            </tbody>
                         </table>
                         ))}   
                        </div>

                    </div>      
                </div>
            </div>
        </div>
        </main>


    </>
    );
}


export default ReceivedMessage;
