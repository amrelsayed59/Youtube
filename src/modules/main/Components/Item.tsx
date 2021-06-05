import React from 'react'

// interface ChildProps {
//     color: string;
//     onClick: () => void;
// } 
 

export const Item: React.FC<any> = ({video}) => {
    // console.log('----2', videos);
    console.log('====', video)

    return (
        <>
           <div className="main__list">
               <div className="main__listimg">
                   <img className="main__listimg-img" src={video.snippet.thumbnails.default.url}  alt="item"/>
                   <div className="main__time">
                        <p>6:04</p>
                   </div>
               </div>
               <div className="main__listcontent">
                   <h6 className="title">{video.snippet.title}</h6>
                   <p className="subtitle">{video.snippet.channelTitle} - 54M views - 1 year ago</p>
                   <p className="text">
                       {video.snippet.description}
                    </p>
               </div>
           </div>
        </>
    )
}


export default Item