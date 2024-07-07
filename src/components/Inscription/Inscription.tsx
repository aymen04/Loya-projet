import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './Inscription.css'

const Inscription = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/Dashboard')
  }
  return (
    <div className="inscription-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="inscription-inscription">
        <img
          src="/external/rectangle2181942-jtu1-400w.png"
         
          className="inscription-rectangle218"
        />
        <img
          src="/external/rectangle2231942-7e3g-400w.png"
          alt="Rectangle2231942"
          className="inscription-rectangle223"
        />
        <img
          src="/external/rectangle2281942-191q-400w.png"
          alt="Rectangle2281942"
          className="inscription-rectangle228"
        />
       <button className="inscription-buttoncontinuer">
      <span className="inscription-text">
       <span>Continuer</span>
      </span>
      </button>
        <input type="text" placeholder="Adresse mail" className="inscription-text02" />

        <input type="text" placeholder="Mot de passe" className="inscription-text04" />
        
        <input type="text" placeholder="Confirmation Mot de passe" className="inscription-text06" />
        
        <span className="inscription-text08">
          <span>Oya inconnu ! Prêt à rejoindre l’aventure ?</span>
        </span>
        <div className="inscription-google">
          <img
            src="/external/logogoogleavecarriereplansupprime11942-gk4m-200h.png"
            alt="logogoogleavecarriereplansupprime11942"
            className="inscription-logogoogleavecarriereplansupprime1"
          />
          <div className="inscription-smallarrow">
            <img
              src="/external/vector1942-zsjq.svg"
              alt="Vector1942"
              className="inscription-vector"
            />
          </div>
          <span className="inscription-text10">
            <span>Continuer avec Google</span>
          </span>
        </div>
        <div className="inscription-djuncompte"onClick={() => navigate('/Connexion')}>
          <span className="inscription-text12">
            <span className="inscription-text13">
              Déjà un compte ?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Connectes-toi !</span>
          </span>
          <div className="inscription-smallarrow1">
            <img
              src="/external/vector1942-72nq.svg"
              alt="Vector1942"
              className="inscription-vector1"
            />
          </div>
          <div className="inscription-group21">
            <img
              src="/external/vector1942-s0lg.svg"
              alt="Vector1942"
              className="inscription-vector2"
            />
            <img
              src="/external/vector1942-76lr.svg"
              alt="Vector1942"
              className="inscription-vector3"
            />
            <img
              src="/external/vector1942-dx1m.svg"
              alt="Vector1942"
              className="inscription-vector4"
            />
          </div>
        </div>
          <button className="inscription-text15" onClick={handleClick}>
        <span>continuer en tant qu’invité</span>
      </button>

        <div className="inscription-headeriphone">
          <div className="inscription-group5">
            <span className="inscription-text17">
              <span>20:18</span>
            </span>
          </div>
          <div className="inscription-group4">
            <img
              src="/external/vector2094-p1a8.svg"
              alt="Vector2094"
              className="inscription-vector5"
            />
            <img
              src="/external/vector2094-jcyy.svg"
              alt="Vector2094"
              className="inscription-vector6"
            />
            <span className="inscription-text19">
              <span>4G</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Inscription
