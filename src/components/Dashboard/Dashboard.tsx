import React from 'react'
import { useNavigate } from 'react-router-dom';


import { Helmet } from 'react-helmet'

import './Dashboard.css'

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNav1Click = () => {
    navigate('/VideoCapture');
  };
  const handleNav2Click = () => {
    navigate('/Map');
  };
  return (
    <div className="dashboard-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="dashboard-dashboard">
        <img
          alt="Rectangle2562020"
          src="/external/rectangle2562020-6xdq-200h.png"
          className="dashboard-rectangle256"
        />
        <img
          alt="Rectangle2582020"
          src="/external/rectangle2582020-3o5h-200w.png"
          className="dashboard-rectangle258"
        />
        <img
          alt="Rectangle2572020"
          src="/external/rectangle2572020-ogl-300h.png"
          className="dashboard-rectangle257"
        />
        <img
          alt="Rectangle2592020"
          src="/external/rectangle2592020-kaon-200h.png"
          className="dashboard-rectangle259"
        />
        <img
          alt="Rectangle2602020"
          src="/external/rectangle2602020-hbqk-500w.png"
          className="dashboard-rectangle260"
        />
        <div className="dashboard-flche">
          <img
            alt="Vector1943"
            src="/external/vector1943-m3zq.svg"
            className="dashboard-vector"
          />
        </div>
        <div className="dashboard-flche1">
          <img
            alt="Vector2163"
            src="/external/vector2163-iddp.svg"
            className="dashboard-vector1"
          />
        </div>
        <span className="dashboard-text">
          <span>Oya Ngone !</span>
        </span>
        <span className="dashboard-text02">
          <span>
            Astuces
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>de Pom’</span>
        </span>
        <span className="dashboard-text06">
          <span>Actus de Pom’</span>
        </span>
        <span className="dashboard-text08">
          <span>À venir</span>
        </span>
        <span className="dashboard-text10">
          <span>Waw !</span>
        </span>
        <span className="dashboard-text12">
          <span>407</span>
        </span>
        <span className="dashboard-text14">
          <span>
            Déchets recyclés
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>en 3 mois</span>
        </span>
        <span className="dashboard-text18">
          <span>Voir plus</span>
        </span>
        <span className="dashboard-text20">
          <span>Voir mes badges</span>
        </span>
        <span className="dashboard-text22">
          <span>Un t-shirt troué n’est pas un vieux t-shirt à jeter...</span>
          <br></br>
          <span>Laisse-le devenir ton meillleur torchon !</span>
        </span>
        <div className="dashboard-group120">
          <div className="dashboard-flche2">
            <img
              alt="Vector2165"
              src="/external/vector2165-2owl.svg"
              className="dashboard-vector2"
            />
          </div>
          <span className="dashboard-text26">
            <span>Voir plus</span>
          </span>
        </div>
        <div className="dashboard-group121">
          <div className="dashboard-flche3">
            <img
              alt="Vector2166"
              src="/external/vector2166-dmzp.svg"
              className="dashboard-vector3"
            />
          </div>
          <span className="dashboard-text28">
            <span>Voir plus</span>
          </span>
          <span className="dashboard-text30">
            <span>
              Le 7 mai, la France à atteint son jour
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>du dépassement....</span>
          </span>
        </div>
        <div className="dashboard-group122">
          <div className="dashboard-flche4">
            <img
              alt="Vector2166"
              src="/external/vector2166-vra.svg"
              className="dashboard-vector4"
            />
          </div>
          <span className="dashboard-text34">
            <span>Voir plus</span>
          </span>
          <span className="dashboard-text36">
            <span>
              Les compostes arrivent en masse
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>dans la ville de Lyon</span>
          </span>
        </div>
        <span className="dashboard-text40">
          <span>
            Ikéa a mis en place une politique
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>d’éco-conception dans ses locaux</span>
        </span>
        <span className="dashboard-text44">
          <span>Pense à sortir ta poubelle jaune !</span>
        </span>
        <img
          alt="Vector2127"
          src="/external/vector2127-zi5c.svg"
          className="dashboard-vector5"
        />
        <div className="dashboard-group99">
          <img
            alt="Rectangle2622021"
            src="/external/rectangle2622021-iinr-200h.png"
            className="dashboard-rectangle262"
          />
          <div className="dashboard-group86">
            <img
              alt="Visage2020"
              src="/external/visage2020-sbg7.svg"
              className="dashboard-visage"
            />
            <img
              alt="Bouche2020"
              src="/external/bouche2020-c2a.svg"
              className="dashboard-bouche"
            />
            <img
              alt="Yeux2020"
              src="/external/yeux2020-tvx9.svg"
              className="dashboard-yeux"
            />
          </div>
        </div>
        <span className="dashboard-text46">
          <span>Passage lun 08 avril :</span>
        </span>
        <div className="dashboard-group87">
          <img
            alt="Rectangle2632021"
            src="/external/rectangle2632021-47w-200h.png"
            className="dashboard-rectangle263"
          />
          <img
            alt="Rectangle2642021"
            src="/external/rectangle2642021-x3sd-200h.png"
            className="dashboard-rectangle264"
          />
          <img
            alt="Rectangle2652021"
            src="/external/rectangle2652021-jn6a-200h.png"
            className="dashboard-rectangle265"
          />
        </div>
        <span className="dashboard-text48">
          <span>Récolte</span>
          <br></br>
          <span>de vêtements pour une association</span>
        </span>
        <div className="dashboard-group126">
          <div className="dashboard-group127">
            <img
              alt="Ellipse171943"
              src="/external/ellipse171943-kzij.svg"
              className="dashboard-ellipse17"
            />
            <img
              alt="Poubelle2021"
              src="/external/poubelle2021-y6m.svg"
              className="dashboard-poubelle"
            />
          </div>
        </div>
        <div className="dashboard-illus">
          <img
            alt="ExcludeI2021"
            src="/external/excludei2021-bl2g.svg"
            className="dashboard-exclude"
          />
        </div>
        <span className="dashboard-text52">
          <span className="dashboard-text53">Lyon 02 -</span>
          <span className="dashboard-text54">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>14 juillet</span>
        </span>
        <div className="dashboard-ecolodebutant">
          <span className="dashboard-text56">
            <span>10</span>
          </span>
        </div>
        <div className="dashboard-nav">
          <img
            alt="Rectangle21943"
            src="/external/rectangle21943-s4nj.svg"
            className="dashboard-rectangle2"
          />
          
          <div className="dashboard-frame15">

            <img
              alt="Nav1998"
              src="/external/dashvert.png"
              className="dashboard-nav1"
            />
            <button onClick={handleNav2Click}className='dashboard-nav2-button'>
            <img
              alt="Nav2018"
              src="/external/nav2018-4z0m.svg"
              className="dashboard-nav2"
            />
            </button>
                      <button onClick={handleNav1Click} className="dashboard-nav1-button">

            <img
              alt="Nav2018"
              src="/external/nav2018-karx.svg"
              className="dashboard-nav3"
            />
            </button>
            <img
              alt="Nav2018"
              src="/external/nav2018-315c.svg"
              className="dashboard-nav4"
            />
            <div className="dashboard-nav5">
              <img
                alt="BoucheI2018"
                src="/external/bouchei2018-fmia.svg"
                className="dashboard-bouche1"
              />
              <img
                alt="VisageI2018"
                src="/external/visagei2018-h3lr.svg"
                className="dashboard-visage1"
              />
              <img
                alt="YeuxI2018"
                src="/external/yeuxi2018-60ou.svg"
                className="dashboard-yeux1"
              />
            </div>
          </div>
        </div>
        <div className="dashboard-headeriphone">
          <div className="dashboard-group5">
            <span className="dashboard-text58">
              <span>20:18</span>
            </span>
          </div>
          <div className="dashboard-group4">
            <img
              alt="Vector2021"
              src="/external/vector2021-3ssr.svg"
              className="dashboard-vector6"
            />
            <img
              alt="Vector2021"
              src="/external/vector2021-niky.svg"
              className="dashboard-vector7"
            />
            <span className="dashboard-text60">
              <span>4G</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
