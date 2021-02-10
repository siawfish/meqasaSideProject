import React from 'react'

export default function RevealButton({
    label
}) {
    const [show, setShow] = React.useState(false)
    return (
        <button onClick={()=>setShow(true)}>
            {
                show ?
                "+233577075706" :
                label
            }
        </button>
    )
}
