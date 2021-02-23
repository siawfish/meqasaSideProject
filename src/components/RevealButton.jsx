import React from 'react'

export default function RevealButton({
    label,
    number,
    onReveal
}) {
    return (
        <button onClick={onReveal}>
            {number}
        </button>
    )
}
