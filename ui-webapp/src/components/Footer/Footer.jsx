import React from 'react'
import "./Footer.css"
import { FaFacebook,FaDiscord,FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="container-fluid">
                <div className='row '>
                   <div className="col-sm-3 text-center mb-4" style={{color:"white",textAlign:"justify"}} >
                     <h5 className="mt-4">UI/Visual Community</h5>
                
                        <a href="https://www.facebook.com/groups/440546053340638" style={{fontSize: "1.8rem",marginRight:"20px"}}> <FaFacebook/></a>
                        <a href="https://discord.com/channels/874955190028095518/875222479617011734" style={{fontSize: "1.8rem",marginRight:"20px"}}> <FaDiscord/></a>
                       
                     
                    </div>
                    
                      <div className="col-sm-5 text-center" style={{color:"white"}}>
                          <hr className="d-sm-none"></hr>
                      <h5 className="mt-4">Other Community</h5>  
                      <div><a href="https://www.facebook.com/groups/414464819194468 ">AI Learner</a></div>
                      <div><a href="https://www.facebook.com/groups/736759720092121 ">Creators</a></div>
                     <div><a href="https://www.facebook.com/groups/642179072953677 ">Game Dev</a></div>
                     <div><a href="https://www.facebook.com/groups/857865105165454 ">Biz Core</a></div>
                     <div className="d-sm-none text-end"><a href="#" style={{fontSize: "2rem"}}> <FaArrowCircleUp/></a></div>
                    </div>

                    <div className="col-sm-4 text-end d-none d-sm-block">
                         <a href="#" style={{fontSize: "2rem"}}> <FaArrowCircleUp/></a>
                    </div>
                    </div>
                </div>
                <br/><br/>
            </div>
        </div>
    )
}

export default Footer
