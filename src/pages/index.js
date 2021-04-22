import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const sections = [{
        title: <> API Transactional </>,
        link: '/custom-layout/',
        description: ( <>
            Gestopago provides a Web - API with which its possible the interconection of many types of clients to consume electronic services, entertainment, prepaid services, and process payments. <p> <b> Try it out. </b> <a href = "/custom-layout/"
            target = "_blank"> Gestopago API Transactional </a>. </p> <img src='img/API-Trans.png' alt="My image alternative text" width='400px'/> </>
        ),
    },
    {
        title:<> API Payments </>,
      	link: 'https://gestopago.portalventas.net/sistema/demo/Payments/',
            description: ( <>
            Third-party service used as an intermediary to process payments through Mercadopago with debit or credit cards.<p>  <b> Try it out. </b> <a href="https://gestopago.portalventas.net/sistema/demo/Payments/ "
            target = "_blank" > Gestopago API Payments </a>. </p> <img src='img/Credit_Card.png' alt="My image alternative text" width='250px' />  </>
        ),
    },


];

/**
 *
 * @param {{
 *   title: string | React.ReactNode;
 *   description: string | React.ReactNode;
 *   link?: string;
 * }} param0
 */
function Section({ title, description, link }) {
    const sectionComponent = ( <h3> { title } </h3>
    );
    return ( <
        div className = { clsx('col col--6', styles.feature, styles.featuresCol) } > {
            link ? <Link to = { useBaseUrl(link) } > { sectionComponent } </Link> : sectionComponent} <p> { description } </p> </div>
        );
    }


    function Docs() {
        return ( <Layout title = { "GestoPago" }
            description = { "With different use-cases" } >
            <header className = { clsx('hero hero--primary', styles.heroBanner)}>
            <div className = "container" >
            <h1 className = "hero__title" > { "GPS API" } </h1> <img src='img/gestopago_logo.png' alt="My image alternative text" />  </div > 
            </header> <main > {
                sections && sections.length > 0 && ( <section className = { styles.features } >
                    <div className = "container" >
                    <div className = "row" > {
                        sections.map((props, idx) => ( <
                            Section key = { idx } {...props }/>
                        ))
                    } </div> </div> </section>
                )
            } </main> </Layout>
        );
    }

    export default Docs;
