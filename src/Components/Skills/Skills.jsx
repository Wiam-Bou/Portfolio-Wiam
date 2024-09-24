import React from 'react';
import './Skills.scss';
import html from '../../assets/html.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import nodeJs from '../../assets/nodejs.png';
import mongoDb from '../../assets/mongo.png';

function Skills() {
  return (
    <section id='skills'>
      <span className="skill-title">Mes compétences</span><br />
      <div className="skills-list">
        
        <div className="skill-element">
          <img src={html} alt="logo html et css" className="skill-img" />
          <div className="skill-text">
            <h2>HTML & CSS</h2>
            <p>Je crée des sites web au design élégant et responsive, avec une structure sémantique claire et adaptée à tous les appareils, en utilisant HTML et CSS.</p>
          </div>
        </div>
        
        <div className="skill-element">
          <img src={javascript} alt=" javascript logo" className="skill-img" />
          <div className="skill-text">
            <h2>JavaScript</h2>
            <p>Je développe des applications web dynamiques et réactives grâce à JavaScript, en maîtrisant les concepts modernes tels que ES6+ et les frameworks populaires.</p>
          </div>
        </div>
        
        <div className="skill-element">
          <img src={react} alt="React JS logo" className="skill-img" />
          <div className="skill-text">
            <h2>React JS</h2>
            <p>React JS est ma technologie préférée pour créer des interfaces utilisateur interactives. J'utilise des composants réutilisables, la gestion d'état avec hooks et le routage pour développer des applications web performantes.</p>
          </div>
        </div>

        <div className="skill-element">
          <img src={nodeJs} alt="NodeJS logo" className="skill-img" />
          <div className="skill-text">
            <h2>NodeJS</h2>
            <p>NodeJS me permet de développer des serveurs et des API performants. J'utilise Express.js pour simplifier le développement des routes et la gestion des requêtes HTTP.</p>
          </div>
        </div>

        <div className="skill-element">
          <img src={mongoDb} alt="MongoDB logo" className="skill-img" />
          <div className="skill-text">
            <h2>MongoDB</h2>
            <p>MongoDB est ma base de données NoSQL préférée pour des performances optimales et une gestion flexible des données.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills;