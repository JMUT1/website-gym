import Image from '../images/pexels-dalila-dalprat-2281695.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from "../data"
import Card from "../IU/Card"

const Values = () => {
  return (
    <section className='values'>
      <div className='container values__container'>
      <div className="values__left">
        <div className="values__image">
          <img src={Image} alt="Values Image" />
        </div>
      </div>
      <div className="values__right">
        <SectionHead icon={<GiCutDiamond/>} title="Values"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam facilis</p>
        <div className='values__wrapper'>
          {
            values.map(({id,icon,title,desc}, index)=>{
              return <Card className="values__value" key={index}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{desc}</small>
              </Card>
            })
          }
        </div>
      </div>
      </div>
    </section>
  )
}

export default Values