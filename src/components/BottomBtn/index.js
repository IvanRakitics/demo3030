import React from 'react'

import './style.css'

const BottomBtn = ( props) =>{

    const { title, onClickHandle, children } = props

    //console.log(children)

    return (
    <div className="bottom-btn">
        <div className="btn-box" onClick={onClickHandle}>
            <div className="action-btn">{children}{title}</div>
        </div>
    </div>)
}

export default BottomBtn