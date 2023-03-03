
import React from 'react';
import messageStyle from '../../resources/css/pages/message/message.module.css'
import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Message() {


        const [memberName, setMemberName] = useState('');
        const [members, setMembers] = useState([]);
        const [recipients, setRecipients] = useState([])


        useEffect(() =>{
        if(memberName) {
            axios.get(`http://localhost:8888/api/v1/message/search/${memberName}`)
            .then(response => {
             const membersData = response.data.data.map(member =>({ name:member.memberName, email:member.memberEmail}));   
            setMembers(membersData);
            }).catch(error =>console.log(error))
            }    
        }, [memberName]);


        const handlerSearch = (event) => {
            event.preventDefault(); //기본 동작을 막는다.
            const input = document.getElementById('searchInput').value;
            setMemberName(input || '');
        }

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
                    setMemberName(names);
                } else {
                    document.getElementById('searchInput').value ='';
                    setMemberName('');
                }
                setRecipients([]);
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
                                <span className="ml-4 fs-5 mr-3"><Link to="/messsage/receivedMessage" style={{ color: 'black', textDecoration: 'none'}}>받은 메세지</Link></span>
                                <span className={`ml-1 fs-5 float-none ${messageStyle.workDay}`}>5</span>
                            </div>
                            <div className="ml-4 mr-4 pb-4">
                                <span className="ml-4 fs-5 mr-3"><Link to="/messsage/MessageSent" style={{ color: 'black', textDecoration: 'none'}}>보낸 메세지</Link></span>
                                <span className={`ml-1 fs-5 float-none ${messageStyle.workDay}`}>5</span>
                            </div>
                            <div className="ml-4 mr-4 pb-4">
                                <span className="ml-4 fs-5 mr-3"><Link to="/messsage/MessageTrash" style={{ color: 'black', textDecoration: 'none'}}>휴지통</Link></span>
                                <span className={`ml-1 fs-5 float-none ${messageStyle.workDay}`}>5</span>
                            </div>
                        </div>

                       
                        
                    </div>

                 
                    <div className={messageStyle.messageBlank}>

                    <div className={` ml-1 mr-4 pb-3 ${messageStyle.infoUpdate2}`} >
                        <button >보내기</button>
                    </div>

                        
                        <div className="ml-1 mr-4 pb-3">
                            <span>받는 사람 &ensp;</span>
                            <input type="text" 
                                   id="searchInput" 
                                   name="searchInput"
                                   onChange={handlerSearch}
                                   />
                            <button>주소록</button>

                            
                            {recipients.map((recipient, index)=> (
                            <div key={index} className={messageStyle.selectName}>
                                <b>{recipient.name} {recipient.email}</b>
                                <button onClick={()=>handleRemoveRecipient(recipient)}>삭제</button>
                                <button onClick={() =>complete(recipient)}>완료</button>
                            </div>
                                
                            ))}
                            
                            {members.map((member,index) => (
                                <div key={index} className={messageStyle.selectName}>
                                    <b>{member.name} {member.email}</b>
                                    <button onClick ={() =>
                                        handleSelectRecipient(member)
                                        }> 선택 </button> 
                                    </div>
                                 
                            ))}

                                        {/* 목록값에서 가져와 선택 */}
                                        {/* <button onClick ={() =>{
                                        const searchInput = document.getElementById("searchInput")
                                        searchInput.value = member.name;
                                        setMembers([])
                                    }}> 선택 </button>  */}  
                       
                            
                        </div>
                        <div className="ml-1 mr-4 pb-3">
                            <span>참조&emsp;&emsp;&emsp;</span>
                            <input/>
                        </div>
                        <div className="ml-1 mr-4 pb-3">
                            <span>제목&emsp;&emsp;&emsp;</span>
                            <input/>
                        </div>
                        <div className="ml-1 mr-4 pb-3">
                            <span>파일첨부&emsp;</span>
                            
                            <input type="file" id="input-file" display="none"/>
                            
                        </div>
                        <div className={`${messageStyle.fileUpload} ml-1 mr-4 pb-3`}>
                            <span>&emsp;&emsp;&emsp;&emsp;&emsp;</span>
                            <input/>
                        </div>

                        <div  className={`${messageStyle.writePlace}`}>
                            <input />
                        </div>


                    </div>


                </div>
               
            </div>

</main>

       


    </>
    );
}

export default Message;