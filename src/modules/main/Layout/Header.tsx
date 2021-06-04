import React, {useState, useEffect, useRef} from 'react'
import logo from "../../../assets/images/logo.png";

// interface ChildProps {
//     color: string;
//     onClick: () => void;
// } 
 

//Component Type Annotation
export const Header: React.FC<any> = () => {
    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef<any>(null);

    // handle scroll event
    const handleScroll = (elTopOffset:any, elHeight:any) => {
        if (window.pageYOffset > (elTopOffset + elHeight)) {
        setSticky({ isSticky: true, offset: elHeight });
        } else {
        setSticky({ isSticky: false, offset: 0 });
        }
    };

      // add/remove scroll event listener
    useEffect(() => {
        var header = headerRef.current.getBoundingClientRect();
        const handleScrollEvent = () => {
        handleScroll(header.top, header.height)
        }

        window.addEventListener('scroll', handleScrollEvent);

        return () => {
        window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);


    return (
        <>
            <section style={{ marginTop: sticky.offset }}>
                <header className={`header ${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
                <div className="container">
                    <div className="header__box">
                        <div className="header__logo">
                            <img className="header__logo-img" src={logo} alt="logoImg"/>
                        </div>
                        <div className="filter">
                            <div className="filter__inputgroup">
                                <input type="text" className="form-control" placeholder="Search"/>
                                <div className="filter__inputgroup-prepend">
                                    <span className="filter__inputgroup-text" id="inputGroup-sizing-sm"> <i className="fas fa-search fa-fw"></i></span>
                                </div>  
                            </div>
                        </div>
                    </div>
                    </div>
                </header>
            </section>
        
        </>
    )
}


export default Header