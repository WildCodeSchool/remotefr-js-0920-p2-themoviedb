import React from 'react';
import { Link } from 'react-router-dom';
import styles from './QuiSommesNous.module.css';

function QuiSommesNous() {
  return (
    <article className={styles.QuiSommesNous}>
      <h2>En savoir plus</h2>
      <div className={styles.areaOfText}>
        <div className={styles.pourquoi}>
          <h3>Pourquoi utiliser ce site&nbsp;?</h3>
          <p>
            Pour nos soirées film, on tourne toujours autour des mêmes
            choix&nbsp;!
            <br />
            <strong>Comment trouver de l’inspiration rapidement&nbsp;?</strong>
          </p>
          <p>
            Rends-toi sur <Link to="./">ton-film.com</Link>, le site qui va
            organiser tes meilleures soirées film&nbsp;!
          </p>
          <p>
            Tu y trouveras les <Link to="/nouveautes">nouveautés</Link> des
            films sortis il y a moins de 6 mois, tu peux aussi{' '}
            <Link to="./">envoyer ta sélection de films</Link> à tes amis...{' '}
          </p>
          <p>
            Et si l’inspiration te manque,{' '}
            <Link to="./">laisse-toi guider sur cette page</Link> pour trouver
            les films qui correspondent à ton profil&nbsp;!
          </p>
          <h3>Loi RGPD</h3>
          <p>
            Tout va bien, aucune donnée personnelle n’est conservée sur ce site.
          </p>
        </div>
        <div className={styles.qui}>
          <h3>Qui sommes-nous&nbsp;?</h3>
          <p className={styles.developpers}>
            <div>
              <img src="https://loremflickr.com/200/240" alt="Emilie Martel" />
              <h4>Emilie Martel</h4>
            </div>
            <div>
              <img
                src="https://loremflickr.com/200/240"
                alt="Maxime Delannoy"
              />
              <h4>Maxime Delannoy</h4>
            </div>
            <div>
              <img
                src="https://loremflickr.com/200/240"
                alt="Valérie Tylski Vincent"
              />
              <h4>Valérie Tylski Vincent</h4>
            </div>
          </p>
          <p>
            Tout a commencé en novembre 2020&nbsp;!
            <br />
            Étudiant en développement web, nous avions un challenge à
            résoudre&nbsp;:
            <br />
            construire un site web permettant d’organiser rapidement ses soirées
            film.
          </p>
          <p>
            Et voilà comment est né <strong>« Je suis ton FILM. »</strong>, un
            site qui va révolutionner tes soirées télé&nbsp;!
          </p>
        </div>
        <h3>Nous vous souhaitons d’excellentes soirées film&nbsp;!</h3>
      </div>
    </article>
  );
}

export default QuiSommesNous;
