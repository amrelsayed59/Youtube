import React from 'react'
import List from './Components/List'
import Loader from './Components/Loader';
import Header from './Layout/Header'
import { useMainState } from "../../context/gloabal";
import MobHeader from './Layout/MobHeader'

// interface ChildProps {
//     color: string;
//     onClick: () => void;
// } 
 


export const Main: React.FC<any> = () => {

    //Loader
    const { loading } = useMainState();

    return (
        <>
            {loading && <Loader/>}
            <Header/>
            <MobHeader/>
            <section className="main">
                <div className="container">
                    <div className="main__head">
                        <p>About 13,000,000 filtered results</p>
                        <p>
                            <i className="fas fa-filter"></i>
                            Filter
                        </p>
                    </div>
                    <List/>
                </div>
            </section>
        </>
    )
}


export default Main