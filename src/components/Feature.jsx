import React from 'react'
import { IoIosRibbon } from 'react-icons/io'
import { BiSwim } from 'react-icons/bi'
import { CgGym } from 'react-icons/cg'
import { GiBarracksTent, GiRoad, GiCctvCamera } from 'react-icons/gi'
import { RiPlantFill } from 'react-icons/ri'
import { FaVolleyballBall } from 'react-icons/fa'

export default function Feature({
    label="label",
    type
}) {
    const renderIcon = ()=> {
        if(type==="cert"){
            return <IoIosRibbon />
        }
        if(type==="swimmingPool"){
            return <BiSwim />
        }
        if(type==="gym"){
            return <CgGym />
        }
        if(type==="leisure"){
            return <GiBarracksTent />
        }
        if(type==="garden"){
            return <RiPlantFill />
        }
        if(type==="roads"){
            return <GiRoad />
        }
        if(type==="cctv"){
            return <GiCctvCamera />
        }
        if(type==="playground"){
            return <FaVolleyballBall />
        }
        return null
    }
    return (
        <div className="iconWrapper">
            <div className="icon">
                {
                    renderIcon()
                }
            </div>
            <div className="iconLabel">{label}</div>
        </div>
    )
}
