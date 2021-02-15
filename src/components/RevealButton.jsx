import React from 'react'

export default function RevealButton({
    label,
    show=false,
    onReveal
}) {
    return (
        <button onClick={onReveal}>
            {
                show ?
                "+233577075706" :
                label
            }
        </button>
    )
}
