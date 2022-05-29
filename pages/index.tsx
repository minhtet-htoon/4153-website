import Head from 'next/head'
import '../styles/Home.module.css'
import SiteHeader from '../components/Header'
import SiteFooter from "../components/Footer";
import Landing from "../components/Landing";
import SiteCalendar from "../components/Calendar";
import Sponsors from "../components/Sponsors";

export default function Home(args: { gKey: any; }) {
console.log(args.gKey)
  return (
    <div>
      <Head>
        <title>Project Y</title>
        <meta name="description" content="FIRST Team 4153 Project Y" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-YYB5P642PC}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YYB5P642PC', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>

      <main>
        <div className="sticky z-50 top-0">
          <SiteHeader/>
        </div>
        <Landing/>
        <Sponsors/>
        <div className="w-full bottom-2 flex justify-center items-center">
          <div className="w-[60%] object-center"><SiteCalendar gKey={args.gKey}/></div>
        </div>
        <div className="h-4 w-full"></div>
      </main>
      <div className="top-4 text-center">
        <SiteFooter/>
      </div>
      
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const gKey = process.env.KEY
  
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      gKey,
    },
  }
}
