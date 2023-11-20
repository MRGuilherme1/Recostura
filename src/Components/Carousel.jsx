import style from '../Module/Carousel.Module.css'

import {Swiper, SwiperSlide} from 'swiper/react'

function Carousel() {

   const data =[
      {id: '1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTMSkDmKnvmtM-zSFX-pIG_YGC0oqx4mvAA&usqp=CAU'},
      {id: '2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7xHyGZSJt4HvB2jupFZ8gzqIZLHZ32-Sv2J_vCLA6_CdZUMEEK-kB9cH37xEL59qfqA&usqp=CAU'},
      {id: '3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtqw3MVPnndofhcGXGZ6kqrg16mXf00R8PUg&usqp=CAU'},
      {id: '4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUej81rLC22dKf2eOltt--_9jrwJufAwjZDg&usqp=CAU'},
   ]

   return (
      <div className={style.ConteinerCarousel}>

      <Swiper
         slidesPerView={1}
         pagination = {{ clickable: true }}
         navigation      
      
      >
         {data.map( (item) => (
            <SwiperSlide key={item.id}>
               <img
                  src={item.image} 
                  alt="Slider"
                  className={style.slideitem} 
               />
            </SwiperSlide>
         ))}
      </Swiper>

      </div>
   )
}

export default Carousel