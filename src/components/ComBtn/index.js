import React from 'react'

import './style.css'

const ComBtn = ( props) =>{

    const { title, onClickHandle, children } = props

    return (
    
        <div className="btn-box" onClick={onClickHandle}>
            <div className="action-btn">{children}{title}</div>
        </div>
    )
}

export default ComBtn