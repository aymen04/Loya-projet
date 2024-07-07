import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './Connexion.css'

const Connexion = () => {
    const navigate = useNavigate()
  
    const handleClick = () => {
      navigate('/Dashboard')
    }
  return (
    <div className="connexion-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="connexion-connexion">
        <img
          alt="Rectangle2181942"
          src="/external/rectangle2181942-qz4y-400w.png"
          className="connexion-rectangle218"
        />
        <img
          alt="Rectangle2231942"
          src="/external/rectangle2231942-e62a-400w.png"
          className="connexion-rectangle223"
        />
        <div className="connexion-continuer">
          <span className="connexion-text">
            <span>Continuer</span>
          </span>
        </div>
        <span className="connexion-text02">
          <span>Adresse mail</span>
        </span>
        <span className="connexion-text04">
          <span>Mot de passe</span>
        </span>
        <span className="connexion-text06">
          <span>Mot de passe oublié ?</span>
        </span>
        <button className="connexion-text08" onClick={handleClick}>
        <span>continuer en tant qu’invité</span>
      </button>
        <span className="connexion-text10">
          <span>Tu es de retour ? Connectes-toi !</span>
        </span>
        <div className="connexion-google">
          <img
            alt="logogoogleavecarriereplansupprime11942"
            src="/external/logogoogleavecarriereplansupprime11942-xtrc-200h.png"
            className="connexion-logogoogleavecarriereplansupprime1"
          />
          <span className="connexion-text12">
            <span>Continuer avec Google</span>
          </span>
          <div className="connexion-smallarrow">
            <img
              alt="Vector1942"
              src="/external/vector1942-4y4d.svg"
              className="connexion-vector"
            />
          </div>
        </div>
        <div className="connexion-pasencoredecompte"onClick={() => navigate('/Inscription')}>
          <span className="connexion-text14">
            <span className="connexion-text15">
              Pas encore de compte ?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Inscris-toi !</span>
          </span>
          <div className="connexion-smallarrow1">
            <img
              alt="Vector1942"
              src="/external/vector1942-s2qc.svg"
              className="connexion-vector1"
            />
          </div>
          <div className="connexion-group21">
            <img
              alt="Vector1942"
              src="/external/vector1942-8vin.svg"
              className="connexion-vector2"
            />
            <img
              alt="Vector1942"
              src="/external/vector1942-pze.svg"
              className="connexion-vector3"
            />
            <img
              alt="Vector1942"
              src="/external/vector1942-fio4.svg"
              className="connexion-vector4"
            />
          </div>
        </div>
        <div className="connexion-headeriphone">
          <div className="connexion-group5">
            <span className="connexion-text17">
              <span>20:18</span>
            </span>
          </div>
          <div className="connexion-group4">
            <img
              alt="Vector2094"
              src="/external/vector2094-243q.svg"
              className="connexion-vector5"
            />
            <img
              alt="Vector2094"
              src="/external/vector2094-0btp.svg"
              className="connexion-vector6"
            />
            <span className="connexion-text19">
              <span>4G</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connexion
