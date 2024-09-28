import React from 'react';
import './Home.scss';
import profile_pic from '../../assets/profile_pic.jpg';
import { Link } from 'react-scroll';
import { FaHandshake, FaFileAlt } from 'react-icons/fa';  // Import de l'icône pour le CV

function Home() {
  return (
    <section id='intro'>
      <div className='intro-content'>
        <span className="intro-text">
          Je suis <span className="intro-name">Wiam Bouchaib</span> <br />
          Développeuse Web
        </span>
        <p className="intro-paragraph">  
          Développeuse web passionnée, je crée des solutions modernes et intuitives pour améliorer l'expérience utilisateur. J'aime relever de nouveaux défis, apprendre en continu, et transformer des idées en projets concrets et impactants.
        </p>

        {/* Bouton 'Développons ensemble' */}
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn-contact">
            <FaHandshake className='collab-icon' /> Développons ensemble
          </button>
        </Link>

        {/* Lien vers le CV avec icône */}
        <a href="https://www.doyoubuzz.com/wiam-bouchaib" target="_blank" rel="noopener noreferrer" className="btn-cv">
          <FaFileAlt className='cv-icon' /> Mon CV
        </a>
      </div>
      <img className='profile_pic' src={profile_pic} alt="photo de profil" />
    </section>
  );
}

export default Home;