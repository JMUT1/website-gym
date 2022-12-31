import Image from '../images/values.jpg'
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
      </div>
      </div>
    </section>
  )
}

export default Values