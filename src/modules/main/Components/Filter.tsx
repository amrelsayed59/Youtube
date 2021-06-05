import React from 'react'

const Filter: React.FC<any> = ({filter}) => {
    return (
        <>
            <div className="main__head">
                <p>About {filter.totalResults} filtered results</p>
                <p>
                    <i className="fas fa-filter"></i>
                    Filter
                </p>
            </div>
        </>
    )
}

export default Filter