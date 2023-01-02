import Head from "../../components/Head"
import HeaderImg from "../../images/header_bg_3.jpg"
import "./gallery.css";

function Gallery() {

const galleryLength = 15;
const images = [];

for(let i = 1; i <=galleryLength; i++){
  images.push(require(`../../images/gallery${i}.jpg`))
}

console.log(images);



  return <>
  <Head title="Our Gallery" image={HeaderImg}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ex repudiandae repellat voluptate officia minima?
  </Head> 

  <section className="gallery">
    <div className="container gallery__container">
      {
        images.map((image, index)=>{
          return <article key={index}>
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </article>
        })
      }
    </div>
  </section>
  
  
  </>;
}

export default Gallery;
