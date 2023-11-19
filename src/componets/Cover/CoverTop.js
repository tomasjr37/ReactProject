import React,{useState,useEffect} from 'react'
import styles from './covertop.module.css';
import { ReactComponent as Dotone } from "./../../assets/svg/dotone.svg";
import { ReactComponent as Dottwo } from "./../../assets/svg/dottwo.svg";
import { ReactComponent as Arrow } from "./../../assets/svg/arrowSeparate.svg";
import { ReactComponent as Polygon } from "./../../assets/svg/Polygon.svg";






//import { ReactComponent as SecTwo } from "./../../assets/svg/who_are.svg";

const CoverTop = () => {

  const [isFirstContent, setIsFirstContent] = useState(true);

  // Function to change the text based on the current content
  const getQuote = () => {
    return isFirstContent
      ? "“Here at Phoenix, we live and breathe inclusivity. It's not just a word; it's the essence of our culture. Our leaders and team members thrive on the strength of our diversity.”"
      : "“Phoenix encourages us to step out of our comfort zone and accomplish more than we ever imagined.";
  };

  // Effect to change the text after a certain time
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Toggle between the first and second content
      setIsFirstContent((prev) => !prev);
    }, 5000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [isFirstContent]);

  const [imageSrc, setImageSrc] = useState('./../../images/Enterprising.png');
  const [imageSrcOne, setImageSrcOne] = useState('./../../images/Client.png');
  const [imageSrctwo, setImageSrctwo] = useState('./../../images/proficiency.png');
  const [imageSrcthree, setImageSrcthree] = useState('./../../images/Care.png');


  // pic one 

  const onMouseEnterone = () => {
    setTimeout(() => {
      setImageSrcOne('./../../images/clientH.png'); // Replace with your hover image path
    }, 200); // Delay in milliseconds (500ms = 0.5s)
  };

  const onMouseLeaveone = () => {
    setImageSrcOne('./../../images/Client.png'); // Replace with your original image path
  };

   // end pic one


    // pic two

  const onMouseEntertwo = () => {
    setTimeout(() => {
      setImageSrctwo('./../../images/proficiencyH.png'); // Replace with your hover image path
    }, 100); // Delay in milliseconds (500ms = 0.5s)
  };

  const onMouseLeavetwo = () => {
    setImageSrctwo('./../../images/proficiency.png'); // Replace with your original image path
  };

   // end pic two


 // pic three

 const onMouseEnterthree = () => {
  setTimeout(() => {
    setImageSrcthree('./../../images/careH.png'); // Replace with your hover image path
  }, 100); // Delay in milliseconds (500ms = 0.5s)
};
const onMouseLeavethree = () => {
  setImageSrcthree('./../../images/Care.png'); // Replace with your original image path
};

 // end pic three
  const onMouseEnter = () => {
    setTimeout(() => {
      setImageSrc('./../../images/EnterprisingH.png'); // Replace with your hover image path
    }, 200); // Delay in milliseconds (500ms = 0.5s)
  };

  const onMouseLeave = () => {
    setImageSrc('./../../images/Enterprising.png'); // Replace with your original image path
  };


 



  return (
    <div>


              <div className={styles.sectionCover}>
               <div className={styles.coverContent}>
               
               <h1>About Phoenix</h1>
               <p>We stand by your side, no matter the circumstances</p>
               
               </div>
         
              </div>
          
    
                {/*who-we-are*/}







           <div className={styles.sectionOne}>
    
   

         <div className={styles.secOneContent}>
                 <h1>WHO WE ARE</h1>
                  {/*who-we-are  pargraph   1  */}
                 <p className={styles.first}>
         
         Phoenix Consulting isn't just an IT solutions provider, we're your trusted partner in optimizing business operations. Since our establishment in 2013, we have been committed to developing a robust service portfolio that incorporates state-of-the-art technologies and specialized offerings.

                 </p>
                 {/*who-we-are  pargraph 2  */}
                 <p className={styles.second}>
         

         Our goal is to provide our clients with the best possible technology experience. As rapidly emerging system integrators and IT solution providers in the MENA region, we specialize in delivering cutting-edge ERP and business transformation solutions to both private and public sector organizations.
         
                 </p>
                 {/*who-we-are  pargraph 3  */}
                 <p className={styles.third}>
         
                 Operating across Egypt, UAE, Qatar, Oman, and Azerbaijan, we offer seamless technology solutions that align with your digitalization and process automation goals, ultimately ensuring maximum efficiency and a strong ROI. Our unwavering dedication is to support your success in the digital era by offering innovative solutions that are tailored to your unique needs and challenges.
         
                  </p>

         </div>
    
           </div> {/* End of who-are-you */}
   



              {/* STart of OUR section */}


            <div className={styles.sectionThree}>
            
                          {/* STart of OUR mission */}
                        <div className={styles.ourMisiion}>

                                  <div className={styles.ourtitle}>
                                       <img className={styles.arrow} src='/svg/ourArrow.svg' alt=''></img>
                                       <h1 className='H-our'>Our Mission </h1>
                                  </div>


                                  <div className={styles.ourText}>
                                          <p>We are dedicated to delivering exceptional value to our clients. We achieve this by providing an unparalleled customer experience, collaborating closely with our clients to develop tailored solutions that cater to their specific needs. Our commitment extends to conducting all corporate activities with unwavering ethical and professional integrity. In doing so, we foster a mutually rewarding environment for all our stakeholders.</p>
                                  </div>

                       
                  
                 
                 </div>

                          {/* STart of OUR purpose */}
                 <div className={styles.ourPurpose}>
                     <div className={styles.ourtitle}>
                      <img className={styles.arrow} src='/svg/ourArrow.svg' alt=''></img>
                      <h1 className='H-our'>Our Purpose </h1>
                </div>

               
                  <div className={styles.ourText}>
                             <p>We aspire to be the preferred global transformation partner for clients who are dedicated to thriving in an ever-evolving world. Our aim is to collaboratively shape the future of business, enabling success in an era of constant change.</p>
                  </div>   
                 
                 </div>

                 <Arrow className={styles.line}/>

                          {/* Why Phoenix? */}


                 <div className={styles.whySection}>
                 
                 <h1 className={styles.whytitle}>Why Phoenix?</h1>

                 <div className={styles.circle}></div>
                <div className={styles.whyimagesOne}>
                
                <img className={styles.imagesOne} 
                src={imageSrcOne}
                onMouseEnter={onMouseEnterone}
                onMouseLeave={onMouseLeaveone}
                alt=''
                ></img>


                <img className={styles.imagesTwo} 
                src={imageSrctwo}
                onMouseEnter={onMouseEntertwo}
                onMouseLeave={onMouseLeavetwo}
                
                alt=''></img>
                
                
                </div>

                       {/*second Row*/}

                <div className={styles.whyimagesOne}>
                
                <img className={styles.imagesthree} 
                src={imageSrcthree}
                onMouseEnter={onMouseEnterthree}
                onMouseLeave={onMouseLeavethree}
                
                alt=''></img>

                
        

                <img className={styles.imagesfour} src={imageSrc} alt='' 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ></img>
                
                
                </div>






                 </div>












            </div>  

  
                          {/* image Vary Section */}
         
                          <div className={styles.vary}>

                          <div className={styles.contentvary}>
                          <h4>{getQuote()}</h4>
                            <p>Proudly shared by one of our team members.</p>

                            <div>
                            {isFirstContent ? <Dotone /> : <Dottwo />}
                            &nbsp;
                            {!isFirstContent ? <Dotone /> :  <Dottwo /> }
                            </div>
                       
                          </div>
          
                        </div>
                      
                     
             
        
 <div></div>

            
             <div className={styles.ourpeoplecover}>
              
               <div className={styles.OurPeopleCoverContent}>
                   <h1>Our people</h1>  
                   <h4>Real results Start with Real leaders</h4>
               
               </div>
         

            </div>
             <div className={styles.ourpeople}>
             
           
             
             <div className={styles.ourpeopleContent}>

                  <h1 className={styles.titleThePeople}> The people make the place, and ours are some of the best in the business</h1>

                  <p className={styles.ourpeoplepraghOne}>At Phoenix, we empower our people with the right mindsets and skills to navigate what’s next, become the transformative leaders the world needs, pursue careers as unique as they are, and build their own exceptional Phoenix experiences.


                  </p>
                   <p className={styles.ourpeoplepraghTwo}>
                  Our more than<span className={styles.smallspan}>120 people </span> leads and inspires others during their time in Phoenix and beyond and brings our purpose to life in the work they do every day. The ability to invite, leverage and learn from different perspectives is key to delivering for our clients. 
      
                  </p>
                
                   <h3 className={styles.ourpeopleheadone}>We believe</h3>
                   <h3 className={styles.ourpeopleheadtwo}>Diversity and inclusion drive growth.</h3>
                 <p className={styles.ourpeoplepraghThree}>
                 We are investing more time and money than ever before in skills and learning for our people. which helps our people develop future-focused skills in areas such as technology, sustainability and leadership.
                 </p>
             
             </div>
             
             
             </div>

             <Arrow className={styles.line}/>


             {/* Ourpeople founder */}


             <div className={styles.founder}>
             <h1>Meet our Founders</h1>
             
                 <div className={styles.founderOne}>
                 
             

                 <div>

             
                 <Polygon className={styles.polygonone}/>
                 <img src='./../../images/founder1.png' alt=""></img>
                 <h3>mohamed mounir</h3>
                 <h4>Ceo founder</h4>

                 </div>


                 <div>

                 <img src='./../../images/founder2.png' alt=""></img>
                
                 <h3>ahmed abdelhadi</h3>
                 <h4>Ceo founder</h4>
                 
                 </div>


                 <div>

                 <img src='./../../images/founder3.png' alt=""></img>
                 <Polygon className={styles.polygontwo}/>
         
            
                 <h3>Sayed Ragab</h3>
                 <h4>Ceo founder</h4>
               
                 </div>
                          
                 </div>
                 
             </div>

    </div>
  )
}

export default CoverTop
