import Head from 'next/head';
import { useEffect, useState } from 'react';
import Section from '../components/section/section';
import site from '../site.conf';

export default function Home() {
  const prestations = [{
    name: "SEANCE INDIVIDUELLE ",
    description: "Rendez-vous avec le coach pour une séance au choix:  travail spécifique, test d'évaluation, compte rendu détailleé de la séance.",
    img: "/img/prestation-1.png"
  }, {
    name: "CLUBS & ASSOCIATIONS",
    description: "Breizh Training peut se déplacer ou recevoir un club, un groupe et adaptera le contenu à la demande de la structure: travail physique, technique ou tactique, préparation d'un objectif, travail de cohésion de groupe, découverte du territoire.",
    img: "/img/prestation-2.png"
  }, {
    name: "DIRECTEUR SPORTIF",
    description: "Gestion d'un groupe en compétition, briefing et analyse tecnico-tactique, mise en place d'une stratégie collective, suivi en course et bilan.",
    img: "/img/prestation-3.png"
  }, {
    name: "ECOLES PRIMAIRES & SECONDAIRES",
    description: "''Savoir rouler à vélo'', cycle de 10 heures.",
    img: "/img/prestation-4.png"
  }]

  const page = {
    title: "Beizh training",
    description: `Breizh Training s'est bâti autour de nos expériences respectives
    de sportifs compétiteurs et d'entraîneurs de jeunes sportives et sportifs.`
  }

  const [stages, setStages] = useState([]);
  useEffect(() => {
    fetch("https://sheets.googleapis.com/v4/spreadsheets/1AWIDHqtH7m6715XM7yhVqrOUumjJZzzPCBLwpvlSKAw/values/stages!2:1000?key=AIzaSyBjxkfGwlThS3JGnh95mYG4vvEgXK4pxb0").then(res => res.json()).then(({values}) => {
      values && setStages(values.map(value => ({
        name: value[0],
        startDate: value[1],
        endDate: value[2],
        location: value[3],
        link: value[4]
      })));
    })
  })

  const cta = {href: site.tarifs_link, label: 'Voir les tarifs'}

  return ([
    <Head>
      <title>{`${ site.title }, ${ page.title }.`}</title>
      <meta name="description" content={`${ site.title }, ${ page.title }. ${ page.description }`}/>
    </Head>,
    <Section identifier="vision" key="vision">
      <div className="row">
        <div className="col-md-2 my-auto">
          <img src="/img/logo-vision.png" alt={ site.title } className="img-fluid" />
        </div>
        <div className="col-md-10">
          <h2 className="text-uppercase">bienvenue sur Breizh Training</h2>
          <p>Breizh Training s'est bâti autour de nos expériences respectives de sportifs compétiteurs et d'entraîneurs de jeunes sportives et sportifs. Celles-ci nous ont permis de construire notre vision de la réussite sportive autour des émotions qu'elle procure. De bonnes qualités physiques ne suffisent pas et une bulle de ''performance'' est indispensable pour exploiter la totalité de ses capacités. Un environnement sain et favorable est essentiel: famille, lien social, école, travail, santé, nutrition, sommeil...Ecouter son corps et accepter les expériences pour que le sport reste toujours un plaisir.</p>
        </div>
      </div>
    </Section>,
    <Section identifier="bio" key="bio" background="secondary" title="bio">
      {
        site.authors.map((author, key) => (
          <div className="row my-3" key={key}>
            <div className={`my-auto col-md-2 ${key % 2 !== 0 && 'order-2'}`}>
              <img src={ author.img } alt={ author.name } className="img-fluid" />
            </div>
            <div className={`my-auto col-md-10 ${key % 2 !== 0 && 'order-1'}`}>
              <h3>{ author.name }</h3>
              <p>{ author.description }</p>
            </div>
          </div>
        ))
      }
    </Section>,
    <Section identifier="suivi" key="suivi" cta={cta} title="suivi">
      <div className="row">
        <div className="col-6">
          <img src="/img/suivi-1.jpg" alt="" className="img-fluid" />
        </div>
        <div className="col-6">
          <img src="/img/suivi-2.png" alt="" className="img-fluid" />
        </div>
      </div>
      <p className="mt-5">Vous aimez le vélo, la course à pied, vous avez de nouveaux objectifs, de nouvelles résolutions, de nouveau défis? Rouler, courir à l'aveugle ne suffit pas. Nous vous proposons de bâtir avec vous un plan d'entrainement personnalisé pour pouvoir progresser et ce quel que soit l'âge, la place que vous donnez à votre pratique et votre niveau. L'objectif sera d' entretenir et de booster votre motivation pour que pédaler, courir reste toujours un plaisir.  Notre volonté est d'accompagner des sportifs et sportives aux objectifs bien définis. Nous proposons un suivi de séances régulier grâce au logiciel d'analyse de performance TraininPeaks et nous nous adaptons à votre emploi du temps.</p>
    </Section>,
    <Section identifier="prestations" key="prestations" background='light' cta={cta} title="prestations">
      <p className="pb-3">En plus du suivi personnalisé et des stages BT nous proposons nos services aux clubs ou écoles. Nous pouvons nous déplacer et encadrer vos structures à la demande sur une journée ou plus.</p>
      <div className="row">
        {prestations.map((prestation, key) => (
          <div className="col-md-6 my-2" key={key}>
            <img src={ prestation.img } alt={ prestation.name } className="img-fluid" />
            <h3 className="my-3">{ prestation.name }</h3>
            <p>{ prestation.description }</p>
          </div>
        ))}
      </div>
    </Section>,
    <Section identifier="stages" key="stages" title="stages">
      <p>Le cyclisme, la course à pied sont des sports exigeants. Pour progresser et continuer à prendre du plaisir dans la pratique de votre sport, un travail de qualité est nécessaire. Bénéficiez de l'expérience d'entraineurs diplômés qui vous proposeront un encadrement adapté pour tous. Améliorez votre capacités en prenant plaisir à pédaler dans un cadre enchanteur entre terre et mer en toute convivialité. Nous vous proposons des stages à la journée ou sur plusieurs jours.</p>
      <p>Stages d'entraînement organisés par BREIZH TRAINING avec des thématiques variées.</p>
      <p>Selon lieu, thème et durée. Les dates et lieux des stages vous seront communiqués via les réseaux sociaux , le site internet et par mail pour les membres de "Breizh Training"	</p>
      <h3 className="my-3">Prochains stages</h3>
      {
        stages.map((stage, key) => (
          <div className="row my-3" key={key}>
            <div className="col-12">
              <span>Du {stage.startDate} au {stage.endDate} à {stage.location} → {stage.name}</span>
              <a href={stage.link} target="_blank" rel="nofollow" className="btn btn-secondary ml-5 rounded-pill shadow">En savoir +</a>
            </div>
          </div>
        ))
      }
      {
        !stages.length && <p>Aucun stage planifié actuelement.</p>
      }
    </Section>
  ])
}
