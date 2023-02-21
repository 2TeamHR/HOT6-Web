import React from 'react';
import messageStyle from '../../resources/css/pages/message/message.module.css'
import messageStyle2 from '../../resources/css/pages/message/receivedMessage.module.css'
import {Link} from "react-router-dom";


function MessageSent(){

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
                                <span className="ml-4 fs-5 mr-3 font-weight-bold" ><Link to="/messsage/MessageSent" style={{ color: 'black', textDecoration: 'none'}}>보낸 메세지</Link></span>
                                <span className={`ml-1 fs-5 float-none ${messageStyle.workDay}`}>5</span>
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
                                <input type="checkbox" id="selection_all" className={messageStyle2.buttonCheckboxBlind} />
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
                         <table className={messageStyle2.table}>   
                            <tbody className={messageStyle2.textCenter}>
                            <tr>
                                <td ><input type="checkbox"/></td>
                                <td >인사담당자</td>
                                <td>메세지 확인 부탁드립니다.</td>
                                <td></td>
                                <td>12-22 18:33</td> 
                            </tr>
                            </tbody>
                         </table>   
                         </div>

                    </div>      
                </div>
            </div>
        </div>
        </main>


    </>
    );
}


export default MessageSent;
