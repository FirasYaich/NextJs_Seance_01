'use client';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

/* Debut : Methode 2 : tableau */

    const tabSliders = [
      {src: "https://res.cloudinary.com/isetsfax/image/upload/v1703754829/images/pc_portable_cz8v2b.jpg"},
      {src: "https://res.cloudinary.com/isetsfax/image/upload/v1703754821/images/gaer_banniere_40_g1ktuz.jpg"},
      {src: "https://res.cloudinary.com/isetsfax/image/upload/v1703754784/images/Banner-2-Code-Promo_smhykd.jpg"},
      {src: "https://res.cloudinary.com/isetsfax/image/upload/v1703754792/images/banniere_smartphone_1_p0ftki.jpg"}
      ]

/* Fin : Methode 2 : tableau */

  return (

    /* Debut : Methode 1 */
    /*
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
    <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1703754829/images/pc_portable_cz8v2b.jpg" />
    </Carousel.Item>
    <Carousel.Item>
    <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1703754821/images/gaer_banniere_40_g1ktuz.jpg" />
    </Carousel.Item>
    <Carousel.Item>
    <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1703754784/images/Banner-2-Code-Promo_smhykd.jpg" />
    </Carousel.Item>
    <Carousel.Item>
    <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1703754792/images/banniere_smartphone_1_p0ftki.jpg" />
    </Carousel.Item>
    </Carousel>
    */
    /* Fin : Methode 1 */

    /* Debut : Methode 2 */

    <Carousel activeIndex={index} onSelect={handleSelect}>

      {/* Debut : Mappage tableau */}
        {tabSliders.map((tab, i) => <Carousel.Item key={i}>
          <img src={tab.src} />
        </Carousel.Item>)
        }
      {/* Fin : Mappage tableau */}

    </Carousel>

    /* Fin : Methode 2 */
  )
}

export default ControlledCarousel
