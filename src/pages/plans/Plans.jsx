
import {plans} from '../../data'
import Head from "../../components/Head"
import Card from "../../IU/Card";
import HeaderImg from "../../images/header_bg_4.jpg"
import "./plans.css";

export default function Plans() {
  return <>
  <Head title="Membership Plans" image={HeaderImg}>
    Descubre los planes que tenemos para ti
  </Head>
  <section className='plans'>
    <div className='container plans__container'>
      {
        plans.map(({id,name, desc, price, features})=>{
          return <Card key={id} className="plan">
            <h3>{name}</h3>
            <small>{desc}</small>
            <h1>{`$${price}`}</h1><h2>/mo</h2>
            <h4>Features</h4>
            {
              features.map(({feature,available},index)=>{
                return <p key={index} className={!available ? 'disable' : ""}>{feature}</p>
              })
            }
            <button className='btn lg'>Choose Plan</button>
          </Card>
        })
      }
    </div>
  </section>

  
  
  </>
}
