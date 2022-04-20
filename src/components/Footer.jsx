import React from 'react'
import logo from '../assets/images/logo.png'
import '../stylesheets/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
        <div className="logo">
            <img src={logo} alt="Efest" />
        </div>
        <div className="socials">
            <h1>Check us out</h1>
            <div className="social_icons">

            <InstagramIcon onClick={()=>window.open("http://instagram.com/sparcrux") }/>&nbsp;
            <LinkedInIcon onClick={()=> window.open("https://www.linkedin.com/company/sparcrux")}/>
            </div>
            
        </div>
    </div>
  )
}

export default Footer