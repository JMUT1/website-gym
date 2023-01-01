import React from 'react'
import SectionHead from './SectionHead'
import {ImQuotesLeft} from 'react-icons/im'
import Card from '../IU/Card'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io"
import { testimonials } from '../data'
import { useState } from 'react'



const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const {name,quote,job, avatar} =  testimonials[index];



  return (
    <section className='testimonials'>
        <div className="container testimonials__container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonials__head"/>
            <Card className="testimonial">
                <div className="testimonial__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className='testimonial__quote'>{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className='testimonial__title'>{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <button className='testimonial__btn'><IoIosArrowDropleftCircle/></button>
                <button className='testimonial__btn'><IoIosArrowDroprightCircle/></button>

            </div>
        </div>
    </section>
  )
}

export default Testimonials