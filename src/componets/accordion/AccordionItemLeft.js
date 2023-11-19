import React from "react";
import "./AccordionItemLeft.css";
//import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const AccordionItem = ({
  title,
  children,
  isOpen,
  onAccordionClick,
  identifier,
}) => {
  const handleClick = () => {
    if (isOpen) {
      onAccordionClick(null); // If it's already open, close it
    } else {
      onAccordionClick(identifier); // Otherwise, open the clicked one
    }
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={handleClick}>

      <span className="accordion-title">{title}</span>
        <span className="accordion-icon">
          {isOpen ? <img src="/svg/minus.svg" alt=""></img> :<img src="/svg/plus.svg" alt=""></img> }
        </span>
        
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

function AccordionSapLeft({ openedAccordion, setOpenedAccordion }) {
  return (
    <div className="accordion">
      <AccordionItem
        title="Auto Supplier Registration Process"
        identifier="left-1"
        isOpen={openedAccordion === "left-1"}
        onAccordionClick={setOpenedAccordion}
      >
      Seamlessly register suppliers online through our e-Procurement Portal.
      Automatically verify, evaluate, and approve supplier qualifications.
      Certify suppliers and create their profiles in your ERP master data.
      Issue Supplier IDs and promptly notify suppliers with their login details.
      </AccordionItem>

<div className="accordionsecond">


<AccordionItem
title="Processesion Process"
identifier="left-1"
isOpen={openedAccordion === "left-1"}
onAccordionClick={setOpenedAccordion}
>
Seamlessly register suppliers online through our e-Procurement Portal.
Automatically verify, evaluate, and approve supplier qualifications.
Certify suppliers and create their profiles in your ERP master data.
Issue Supplier IDs and promptly notify suppliers with their login details.
</AccordionItem>








</div>





<div className="accordionsecond">


<AccordionItem
title="Delivery Processes"
identifier="left-1"
isOpen={openedAccordion === "left-1"}
onAccordionClick={setOpenedAccordion}
>



</AccordionItem>








</div>
    

    
   
       </div>


       

    
    
  );
}

export default AccordionSapLeft;
