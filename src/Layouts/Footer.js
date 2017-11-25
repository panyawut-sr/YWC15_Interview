import React, {Component} from 'react'
import {
    Tab,
    Tabs,
    Jumbotron } from 'react-bootstrap'
import background from '../Media/Image/footer.jpg'
import circle from '../Media/Image/circle2.png'

class Footer extends Component{
    render(){
        return(
            <div style={{height: 'calc(100vh - 50px)', minHeight: "500px", overflow:"auto"}}>
                <div style={{backgroundImage:`url(${background})`, 
                             height:"100%", 
                             backgroundSize:"cover",
                             }}>

                <div style={{position: "relative",
                            width: "50%",
                            left: "50%",
                            transform: "translate(-50%,0%)",}}>   
                        
                    <div style={{backgroundImage : `url(${circle})`,
                                 backgroundSize : "cover",
                                }}>
                        <div  style={{  backgroundColor:"transparent", 
                                        textAlign:"center",
                                       }}>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                            <h1>Contact Us</h1>
                            <h3>064-174-7080 (พี่เบ๊บ)</h3>
                            <h3>092-458-7067 (พี่ฟง)</h3>
                            <h3>085-666-7571 (พี่เบนซ์)</h3>
                            <h3>Email: ywc@webmaster.or.th</h3>
                            <br/>
                            <br/>
    
                    </div>
                    </div>
                </div>
                </div>
                
            </div>
        )
    }
}
export default Footer