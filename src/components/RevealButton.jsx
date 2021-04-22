import React from 'react'

export default function RevealButton({
    number,
    onReveal
}) {
    return (
        <button onClick={onReveal}>
            {number}
        </button>
    )
}
