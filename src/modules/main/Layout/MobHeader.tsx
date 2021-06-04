import React, {useState, useEffect, useRef} from 'react'

// interface ChildProps {
//     color: string;
//     onClick: () => void;
// } 
 

//Component Type Annotation
export const MobHeader: React.FC<any> = () => {

    //showToggle search input
	const [show, setShow] = useState(false);
    const showToggle = () => {
		setShow(!show);
	};
    const showInput:any = {
		// display: "block",
        width: "100%",
        padding: "0 .5rem",
        border: "1px solid #ced4da"
	};
   
    //onFocus input
    const inputRef = useRef<HTMLInputElement | null>(null); 
    useEffect(() => {
        inputRef.current?.focus();
    }, [])


    return (
        <>
            <header className="header-mob">
                <div className="container p-sm-0">
                    <div className="header__box">
                        <div className="header__logo">
                            <i className="fab fa-youtube fa-2x text-dark-blue"></i>
                        </div>
                        <div className="filter">
                            <div className="filter__inputgroup">
                                <input 
                                    type="text" className="form-control" 
                                    placeholder="Search"
                                    ref={inputRef}
                                    style={show? showInput : null}
                                    />
                                <div className="filter__inputgroup-prepend" onClick={showToggle}>
                                    <span className="filter__inputgroup-text" id="inputGroup-sizing-sm"> <i className="fas fa-search fa-fw"></i></span>
                                </div>  
                            </div>
                        </div>
                    </div>
                    </div>
            </header>

        
        </>
    )
}


export default MobHeader