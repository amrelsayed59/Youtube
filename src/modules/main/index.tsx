import React,{useState, useEffect} from 'react'
import Item from './Components/Item'
import Loader from './Components/Loader';
import Header from './Layout/Header'
import { useMainState } from "../../context/gloabal";
import MobHeader from './Layout/MobHeader';
import axios from "axios";
import {getVideos} from "../../services/youtube";
import youtube from "../../services/youtube";
import Filter from './Components/Filter';

// interface ChildProps {
//     color: string;
//     onClick: () => void;
// } 
 


export const Main: React.FC<any> = () => {

    const [searchInput, setSearchInput] = useState("");
    //list items
    const [videos, setvideos] = useState([]);

    const [filter, setFilter] = useState([]);

    const onFormSubmit = async (e:any) => {
        alert(searchInput)
        e.preventDefault();
        onSearchSubmit(e)
    }

       const onSearchSubmit = async (term:any) => {
        const response = await youtube.get('/search', {params: {q: term}})
        console.log('---',response)
    }    

    const fetchVideos = async () => {
		const data  = await getVideos();
		setvideos(data.items);
        setFilter(data.pageInfo)
        // console.log(data.items)
	};

    useEffect(() => {
		fetchVideos();
	}, []);


    const AllVideos = videos.map(((video:any, i:number) => (
        <Item video={video} index={i} key={i}/>
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
                    <Filter filter={filter}/>
                    {AllVideos}
                </div>
            </section>
        </>
    )
}


export default Main