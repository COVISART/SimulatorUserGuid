import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import GitHubButton from "react-github-btn";

const features = [
  {
    title: <>Easy Software Management</>,
    imageUrl: "img/feature-intuitive-api.svg",
    description: (
      <>
        All parts of motion system managed by a web based software, Covisart Simulation software controls motion of system and manages simulation softwares at same time.
        Software loads scenario, starts simulation, powers servo motors and starts communication. Now you are ready to take off.
        <div className={styles.featureButtomLink}>
          <Link to="docs/on-pressed-soft-tut">Software Tutorial</Link>
        </div>
      </>
    ),
  },
  {
    title: <>Non-blocking</>,
    imageUrl: "img/feature-non-blocking.svg",
    description: (
      <>
        EasyButton is a non-blocking library, which means it won't affect the
        rest of your code with dangerous delays that impact the overall
        performance of your code.
      </>
    ),
  },
  {
    title: <>Interrupts support</>,
    imageUrl: "img/feature-interrupts-support.svg",
    description: (
      <>
        In order to improve efficiency, the library is able to interface buttons
        through external interrupts. By doing this, it won't be necessary to
        continuously read the state of the buttons. This allows you to write a
        more efficient code.
        <div className={styles.featureButtomLink}>
          <Link to="docs/poll-vs-external-interrupts">
            More on external interrupts
          </Link>
        </div>
      </>
    ),
  },
  {
    title: <>Small footprint</>,
    imageUrl: "img/feature-small-footprint.svg",
    description: (
      <>
        EasyButton has a small footprint and does not depend on third party
        libraries, making it very easy to install and include in your project.
      </>
    ),
  },
  {
    title: <>Well documented</>,
    imageUrl: "img/feature-well-documented.svg",
    description: (
      <>
        EasyButton has a step-by-step guide that lets you get started with the
        library in just a few minutes. Its API is well documented with a
        complete but easy to understand explanation.
        <div className={styles.featureButtomLink}>
          <Link to="docs/introduction">Getting started</Link>
        </div>
      </>
    ),
  },
  {
    title: <>Packed with examples</>,
    imageUrl: "img/feature-packed-with-examples.svg",
    description: (
      <>
        Okay! EasyButton its well documented, but we are all used to having
        examples in Arduino libraries and we always learn a lot from them,
        that's why EasyButton provides several fully functional examples and we
        will continue to add more. <br />
        <div className={styles.featureButtomLink}>
          <Link to="docs/on-single-press-example">Check them out!</Link>
        </div>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The Arduino Library For Buttons"
    >
      <header className={classnames("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>

          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.githubStarButton}>
          </div>
          <div className={styles.heroLinks}>
            <Link
              className={styles.gettingStartedLink}
              to={"docs/introduction"}>
              Getting started
            </Link>
            <div className={styles.upythonLink}>
              <h4>
                Using MicroPython? 🐍 - Check out{" "}
                <a href="#">EasyButton for MicroPython</a> (work in progress).
              </h4>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
