
import React from 'react';
import messageStyle from '../../resources/css/pages/message/message.module.css'
import {Link} from "react-router-dom";
import attendenceManage from "../../resources/css/pages/attendence/attendence.module.css";

function Message() {

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
                            <input/>
                            <button>주소록</button>
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