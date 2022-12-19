import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3>Objective</h3>
        <p>
          Interested in obtaining the position of Frontend Developer in a decent
          company providing a great software. I am attentive, willing to learn,
          sociable and respectful to subordination.
        </p>
        <br />
        <h3>Experience</h3>
        <p>
          Have 1 year of commercial experience as a Javascript Developer in
          company Apps Delivered. The main tasks were the development of Jira
          applications. Main apps: Vacation planning app. App for creating
          templates and hierarchies for Jira issues. App to send slack
          notifications. For development, we used: Atlassian UI kit to build the
          UI of the app. Forge platform to work with data and hosting. Jira Rest
          API and Slack API to accept and send HTTP requests. In addition,
          created a social network where I used Redux:
        </p>
        <a href="https://github.com/AleksAndriushyn/React-AppSite">GitHub</a>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h3 className={utilStyles.headingLg}>Blog</h3>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
