import { Button, message, Steps } from 'antd';
import React, { useState } from 'react'
import "./Primary_info.css"
import Primary_info_form from './Primary_info_form';
import Secondary_info_form from './Secondary_info_form';
import Education_form from './Education_form';
import Address_details_form from './Address_details_form';
import Bank_details_form from './Bank_details_form';
import Technical_skills_form from './Technical_skills_form';
import Experience_form from './Experience_form';
import Contact_form from './Contact_form';
import { Link, useNavigate } from 'react-router-dom';


const { Step } = Steps;
const steps = [
  {
    title: 'Primary Info',
    content: <Primary_info_form/>,
  },
  {
    title: 'Secondary Info',
    content: <Secondary_info_form/>,
  },
  {
    title: 'Education Details',
    content: <Education_form/>,
  },
  {
    title: 'Address Details',
    content: <Address_details_form/>,
  },
  {
    title: 'Bank Details',
    content: <Bank_details_form/>,
  },
  {
    title: 'Technical Skills',
    content: <Technical_skills_form/>,
  },
  {
    title: 'Experience',
    content: <Experience_form/>,
  },
  {
    title: 'Contact',
    content: <Contact_form/>,
  },
];

function Primary_Info() {

  const navigate=useNavigate()
  function navigateToHome(){
    navigate("/EmpNav")
  }
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  
  return (
    <>
    <Steps
    current={current}>
      {steps.map((item) => (
        <Step key={item.title} title={item.title} />
      ))}
    </Steps>
    <div className="steps-content">{steps[current].content}</div>
    <div className="steps-action stepbroder">
      {current > 0 && (
        <Button
          style={{
            margin: '0 8px',
          }}
          onClick={() => prev()}
        >
          Previous
        </Button>
      )}
      {current === steps.length - 1 && (
        <Button type="primary" onClick={navigateToHome}>
          Submit
        </Button>
      
      )}
      {current 
        < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
      )}
    </div>
  </>
  )
}

export default Primary_Info