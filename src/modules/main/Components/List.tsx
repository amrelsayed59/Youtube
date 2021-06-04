import React from 'react'
import listImg from "../../../assets/images/listimg.webp";


// interface ChildProps {
//     color: string;
//     onClick: () => void;
// } 
 

export const List: React.FC<any> = ({videos}) => {
    console.log('----', videos)

    return (
        <>
           <div className="main__list">
               <div className="main__listimg">
                   <img className="main__listimg-img" src={listImg}  alt="item"/>
                   <div className="main__time">
                        <p>6:04</p>
                   </div>
               </div>
               <div className="main__listcontent">
                   <h6 className="title">Spongebob In Real Life Episode 2</h6>
                   <p className="subtitle">JChaseFilms -54M views - 1 year ago</p>
                   <p className="text">
                       SpongeBob and patrik are back in the real world and this time they are here to stay!
                       SpongeBob and patrik are back in the real world and this time they are here to stay!
                    </p>
               </div>
           </div>
           <div className="main__list">
               <div className="main__listimg">
                   <img className="main__listimg-img" src={listImg}  alt="item"/>
                   <div className="main__time">
                        <p>6:04</p>
                   </div>
               </div>
               <div className="main__listcontent">
                   <h6 className="title">Spongebob In Real Life Episode 2</h6>
                   <p className="subtitle">JChaseFilms -54M views - 1 year ago</p>
                   <p className="text">
                       SpongeBob and patrik are back in the real world and this time they are here to stay!
                       SpongeBob and patrik are back in the real world and this time they are here to stay!
                    </p>
               </div>
           </div>
           <div className="main__list">
               <div className="main__listimg">
                   <img className="main__listimg-img" src={listImg}  alt="item"/>
                   <div className="main__time">
                        <p>6:04</p>
                   </div>
               </div>
               <div className="main__listcontent">
                   <h6 className="title">Spongebob In Real Life Episode 2</h6>
                   <p className="subtitle">JChaseFilms -54M views - 1 year ago</p>
                   <p className="text">
                       SpongeBob and patrik are back in the real world and this time they are here to stay!
                       SpongeBob and patrik are back in the real world and this time they are here to stay!
                    </p>
               </div>
           </div>
           <div className="main__list">
               <div className="main__listimg">
                   <img className="main__listimg-img" src={listImg}  alt="item"/>
                   <div className="main__time">
                        <p>6:04</p>
                   </div>
               </div>
               <div className="main__listcontent">
                   <h6 className="title">Spongebob In Real Life Episode 2</h6>
                   <p className="subtitle">JChaseFilms -54M views - 1 year ago</p>
                   <p className="text">
                       SpongeBob and patrik are back in the real world and this time they are here to stay!
                       SpongeBob and patrik are back in the real world and this time they are here to stay!
                    </p>
               </div>
           </div>
           <div className="main__list">
               <div className="main__listimg">
                   <img className="main__listimg-img" src={listImg}  alt="item"/>
                   <div className="main__time">
                        <p>6:04</p>
                   </div>
               </div>
               <div className="main__listcontent">
                   <h6 className="title">Spongebob In Real Life Episode 2</h6>
                   <p className="subtitle">JChaseFilms -54M views - 1 year ago</p>
                   <p className="text">
                       SpongeBob and patrik are back in the real world and this time they are here to stay!
                       SpongeBob and patrik are back in the real world and this time they are here to stay!
                    </p>
               </div>
           </div>
           <div className="main__list">
               <div className="main__listimg">
                   <img className="main__listimg-img" src={listImg}  alt="item"/>
                   <div className="main__time">
                        <p>6:04</p>
                   </div>
               </div>
               <div className="main__listcontent">
                   <h6 className="title">Spongebob In Real Life Episode 2</h6>
                   <p className="subtitle">JChaseFilms -54M views - 1 year ago</p>
                   <p className="text">
                       SpongeBob and patrik are back in the real world and this time they are here to stay!
                       SpongeBob and patrik are back in the real world and this time they are here to stay!
                    </p>
               </div>
           </div>
        </>
    )
}


export default List