// EnquiryPage.js
import React, { useState } from 'react';
import './Enquiry.css';

const Enquiry= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the enquiry form submission here
    console.log('Enquiry submitted:', { name, email, message });
  };

  const handleEnquireNowClick = () => {
    // Add any logic you want to execute when the "Enquire Now" button is clicked
    console.log('Enquire Now button clicked');
  };

  const handleViewEnquiriesClick = () => {
    // Add any logic you want to execute when the "View Enquiries" button is clicked
    console.log('View Enquiries button clicked');
  };

  return (
    <div className='dod1'>
     <div className="enquiry-container1">
      <div className='head1'><h1><center>Contact Us</center></h1>
      <form onSubmit={handleSubmit} className="enquiry-form1">
        <div className="form-group1">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="button-container1">
        {/* <button className="enquire-now-button" onClick={handleEnquireNowClick}>
          Enquire Now
        </button> */}
        <button className="view-enquiries-button1" onClick={handleViewEnquiriesClick}>
          View Enquiries
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Enquiry;
