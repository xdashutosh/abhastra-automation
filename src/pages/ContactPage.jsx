import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const ContactPage = () => (
  <div className="">
    <Helmet>
      <title>Contact Us - Get in Touch with Abhastra Automation</title>
      <meta name="description" content="Contact Abhastra Automation for AI automation, ERP development, and custom software solutions. Reach out for consultations, project inquiries, or partnership opportunities." />
      <meta name="keywords" content="contact Abhastra, AI consultation, ERP consultation, software development inquiry, automation services contact" />
      <link rel="canonical" href="https://abhastra.com/contact" />
      
      <meta property="og:title" content="Contact Us - Get in Touch with Abhastra Automation" />
      <meta property="og:description" content="Contact Abhastra Automation for AI automation, ERP development, and custom software solutions." />
      <meta property="og:url" content="https://abhastra.com/contact" />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:title" content="Contact Us - Get in Touch with Abhastra Automation" />
      <meta name="twitter:description" content="Contact Abhastra Automation for AI automation and custom software solutions." />
    </Helmet>
    <Contact />
  </div>
);

export default ContactPage;
