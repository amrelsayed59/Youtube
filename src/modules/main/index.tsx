import React,{useState, useEffect} from 'react'
import List from './Components/List'
import Loader from './Components/Loader';
import Header from './Layout/Header'
import { useMainState } from "../../context/gloabal";
import MobHeader from './Layout/MobHeader';
import axios from "axios";

import youtube from "../../services/youtube";

// interface ChildProps {
//     color: string;
//     onClick: () => void;
// } 
 


export const Main: React.FC<any> = () => {

    const [searchInput, setSearchInput] = useState("");
    

    const onFormSubmit = (e:any) => {
        alert(searchInput)
        e.preventDefault();
        
    }

    const [videos, setvideos] = useState([]);
    // const [selectedVideo, setSelectedVideo] = useState(null)

//    const onSearchSubmit = async (term:any) => {
//         const { data: { items: videos } } = await youtube.get("/search", { params: { q: term } });
//         // setvideos(videos);

//         setvideos({ ...videos, selectedVideo: videos[0] })
//     }

    // const onSelectVideo = (selectedVideo:any) => {
    //     setSelectedVideo(selectedVideo)
    // }

    useEffect(() => {
		axios.get("../testJson.json").then((res) => {
			setvideos(res.data.productList);
		});
	}, []);

    const AllVideos = videos.map(((video:any, i:number) => (
        <List videos={video} index={i} key={i}/>
    )))

    //Loader
    const { loading } = useMainState();

    return (
        <>
            {loading || <Loader/>}
            <Header onSubmit={onFormSubmit} searchInput={searchInput} setSearchInput={setSearchInput}/>
            <MobHeader onSubmit={onFormSubmit} searchInput={searchInput} setSearchInput={setSearchInput}/>
            <section className="main">
                <div className="container">
                    <div className="main__head">
                        <p>About 13,000,000 filtered results</p>
                        <p>
                            <i className="fas fa-filter"></i>
                            Filter
                        </p>
                    </div>
                    {/* <List videos={videos} onVideoSelect={onSelectVideo}/> */}
                    {AllVideos}
                </div>
            </section>
        </>
    )
}


export default Main