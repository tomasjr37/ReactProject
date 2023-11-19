import React, { useState,useEffect } from 'react';
import styles from './tender.module.css';
import AccordionSapLeft from '../accordion/AccordionItemLeft';
import Slide from '../slide/Slide';
import axios from 'axios';
//import { ReactComponent as TenderCover } from "./../../assets/images/TenderCover.png";
//import ahned from "../../../public/svg/arrowbuttonR.svg"


const Tender = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openedAccordion, setOpenedAccordion] = useState(null);
  const [post, setPost] = useState(null);
  const postId = 1815; // Replace with the actual post ID
  


    useEffect(() => {
      const fetchPost = async () => {
        try {

            //   ==> END POINT OF WP POSTS <== 
          const response = await axios.get(`http://localhost/wp-headless/server/wp-json/wp/v2/posts/${postId}`);
          setPost(response.data);
          console.log( response.data);
        } catch (error) {
          console.error('Error fetching the post:', error);
        }
      };
  
      fetchPost();
    }, [postId]);



  


  return (
    <div>    

       <div>
   
           
                   {/* Tender Cover Image */}



                   <div className={styles.tendercover}>
                   
               
                              <div className={styles.coverContent}>
                                  <h4>Tender solution</h4>
                                  <h1>Discover the Key to Procurement Excellence</h1>
                                  <p>Phoenix Tender Solutions are tailored to streamline your procurement processes with cutting-edge efficiency and transparency</p>
                              
                              
                              </div>

                 

                   </div>

                       
            <div className={styles.sectionone}>
                   {/* our site section     <p>At Phoenix Tender Solutions, we understand that procurement excellence is the cornerstone of business success. Our suite of services is meticulously designed to revolutionize your procurement processes, offering cutting-edge efficiency and unwavering transparency.</p>*/}

                   <div className={styles.oursite}>
    
                   {post ? (
                    <div>
                      <h1>{post.title.rendered}</h1>
                      {post.content && <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />}
                    </div>
                  ) : (
                    <p>Loading post...</p>
                  )}
                 
                



              </div>

              <Slide 
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              
              />

                 </div>
                {/* slides using useState Hooks */}

         
        
              
   




           {/* Section TWo */}

           <div className={styles.sectiontwo}>

         <h1>Critical Processes Covered by Our Comprehensive Phoenix Tender Solution</h1>
  

         <AccordionSapLeft
         openedAccordion={openedAccordion}
         setOpenedAccordion={setOpenedAccordion}
       />     
   
                
           </div>




             <div className={styles.sectionthree}>
              
             
             <h1>Ready to transform your procurement processes</h1>
             <p>Contact us to discover how Phoenix Tender Solutions can elevate your operations to new heights.</p>
             
             
             <button>contact us</button>       
            
            
              </div>
        

     
         </div>
         </div>     


  );




};

export default Tender;