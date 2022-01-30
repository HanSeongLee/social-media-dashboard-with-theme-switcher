import Head from 'next/head';
import styles from './style.module.scss';
import SocialCounterContainer from "../containers/SocialCounterContainer";
import SocialOverviewContainer from "../containers/SocialOverviewContainer";
import DarkModeToggleSwitch from "../containers/DarkModeToggleSwitch";

export default function Home() {
  return (
      <>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport"
                content="width=device-width, initial-scale=1.0"
          />

          <title>{process.env.NEXT_PUBLIC_TITLE}</title>
          <meta name="description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />

          <meta name="description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />

          <meta property="og:url"
                content={process.env.NEXT_PUBLIC_URL}
          />
          <meta property="og:type"
                content="website"
          />
          <meta property="og:title"
                content={process.env.NEXT_PUBLIC_TITLE}
          />
          <meta property="og:description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />
          <meta property="og:image"
                content={process.env.NEXT_PUBLIC_OG_IMAGE}
          />

          <meta name="twitter:card"
                content="summary_large_image"
          />
          <meta property="twitter:url"
                content={process.env.NEXT_PUBLIC_URL}
          />
          <meta name="twitter:title"
                content={process.env.NEXT_PUBLIC_TITLE}
          />
          <meta name="twitter:description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />
          <meta name="twitter:image"
                content={process.env.NEXT_PUBLIC_OG_IMAGE}
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
        </Head>

        <main className={styles.main}>
          <div className={styles.container}>
            <div className={styles.topContainer}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>
                  Social Media Dashboard
                </h1>
                <p className={styles.totalFollowers}>
                  Total Followers: 23,004
                </p>
              </div>
              <div className={styles.darkModeContainer}>
                <span>Dark Mode</span>
                <DarkModeToggleSwitch/>
              </div>
            </div>

            <div className={styles.socialCounterContainer}>
              <SocialCounterContainer/>
            </div>

            <h2 className={styles.overviewTitle}>
              Overview - Today
            </h2>
            <div className={styles.socialOverviewContainer}>
              <SocialOverviewContainer/>
            </div>
          </div>
        </main>
      </>
  );
}
