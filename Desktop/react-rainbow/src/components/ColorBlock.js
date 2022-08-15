import React from 'react'

export function ColorBlock (props) {
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            {props.color}
        </div>
    )
}