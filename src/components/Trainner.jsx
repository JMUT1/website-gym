import Card from "../IU/Card"

import React from 'react'

const Trainner = ({image,name,job, socials}) => {
  return (
    <Card className="trainer">
        <div className="trainer__img">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{job}</p>
            <div className="trainer__socials">
                {
                    socials.map(({icon,link}, index)=>{
                        return <a key={index} href={link} target="_blank" rel="noreffer noopener">{icon} </a>
                    })
                }
            </div>
        </div>
    </Card>

    )
}

export default Trainner