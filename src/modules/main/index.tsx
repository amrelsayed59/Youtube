import React, {useState, useEffect} from 'react'
import List from './Components/List'
import Loader from './Components/Loader';
import Header from './Layout/Header'
import { useMainState } from "../../context/gloabal";

// interface ChildProps {
//     color: string;
//     onClick: () => void;
// } 
 


export const Main: React.FC<any> = () => {

    //Loader
    const { loading } = useMainState();
    const [percentLoaded, setPercentLoaded] = useState<number>(0);
    useEffect(() => {
        setInterval(() => {
            let val = percentLoaded + 100;
            if(percentLoaded >= 100) {
                setPercentLoaded(percentLoaded)
            } else {
                setPercentLoaded(val)
            }
        }, 100)
    }, []);

    return (
        <>
            {loading && <Loader percentComplete={percentLoaded}/>}
            <Header/>
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