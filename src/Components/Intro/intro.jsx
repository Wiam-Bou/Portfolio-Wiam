import React from 'react'
import './intro.scss';
import profile_img from '../../assets/profile_img.webp'
import {Link} from 'react-scroll';
import { FaHandshake } from 'react-icons/fa';

function intro() {
  return (
   <section id='intro'>
    <div className='intro-content'>
<span className="hello">Bonjour</span>        
<span className="itro-text">Je suis <span className="intro-name">Wiam Bouchaib</span> <br />Développeuse Web</span>
<p className="intro-paragraph"> je suis une developpeuse web avec de l'expérience dans js css html etc </p>
<Link><button className="btn-contact"> <FaHandshake className='collab-icon'/>Développons ensemble</button></Link>
<img className='profile-img' src={profile_img} alt="photo de profil" />

    </div>
   </section>
  )
}

export default intro
