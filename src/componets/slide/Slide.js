import React,{useState} from 'react'
import styles from '../tender/tender.module.css';
import { ReactComponent as SlideActive } from "./../../assets/svg/SlideActive.svg";
import { ReactComponent as SlideNonActive } from "./../../assets/svg/SlideNonActive.svg";

const Slide = () => {

    const [currentSlide, setCurrentSlide] = useState(0);


    const slides = [
        {
          title: 'Slide 1',
          boxInfo: [
            {
              heading: 'Transparency',
              description: 'Gain complete visibility into your procurement processes',
            },
            {
              heading: 'Zero Paperwork',
              description:
                'Bid farewell to mountains of paperwork. Our digital solutions are designed to minimize your environmental footprint and maximize efficiency.',
            },
            {
              heading: 'Spend Analysis',
              description:
                "Make informed decisions based on deep insights into your organization's spending patterns.",
            },
            {
              heading: 'Effortless Supply Chain Management',
              description:
                'Our platform simplifies the complexities of supply chain management, optimizing your operations.',
            },
          ],
        },
       


        {
          title: 'Slide 2',
          boxInfo: [
            {
              heading: 'Time-Saving',
              description:
                'Reduce the time spent on manual procurement processes and allocate it where it matters most.',
            },
            {
                heading: 'Audit Compliance & Risk Analysis',
                description:
                  'Stay compliant and assess risks effectively through our comprehensive auditing and analysis features.',
              },
              {
                heading: 'System Auto Alerts & Notifications',
                description:
                  'Receive timely alerts and notifications through various channels such as email, SMS, and social networks.',
              },
    
          ],
        },





        

      ];
    
      const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      };
    
      const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
      };

      const handleNextClick = () => {
        nextSlide();  // Call the nextSlide function

      };

      const goToSlide = (index) => {
        setCurrentSlide(index);
      };



  return (
    <div>
      
    <div className={styles.slide}>

    {slides[currentSlide].boxInfo.map((box, index) => (

      <div className={styles.boxinfo} key={index}>
        <h1>{box.heading}</h1>
        <p>{box.description}</p>
      </div>
     
      
               ))}

            </div>

 {/* buttom for slides */}

 <div className={styles.controls}>

 


 <div className={styles.activation}>
 {slides.map((_, index) => (
   <div
     key={index}
     className={styles.controlButton}
     onClick={() => goToSlide(index)}
   >
     {index === currentSlide ? <SlideActive /> : <SlideNonActive />}
   </div>
 ))}
</div>
 







 <div className={styles.arrowslide}>
 <img 
 onClick={handleNextClick}
 src='/svg/Lbutton.svg'
  alt=''>
  </img>

 <img 
 onClick={prevSlide}
 src='/svg/Rbutton.svg' alt=''></img>   
 
 </div>
         </div>
    </div>
  )
}
export default Slide
