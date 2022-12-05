import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Editor Demo Field!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://grapesjs.com/demo.html" className={styles.card}>
            <h2>grapesjs &rarr;</h2>
            <p>功能强大,支持导入导出</p>
          </a>

          <a href="https://www.vvveb.com/vvvebjs/editor.html#" className={styles.card}>
            <h2>VvvebJs &rarr;</h2>
            <p>BootStrap加成,交互优雅</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span>
            <a href='https://blog.ez-listen.app' target='_blank'>EZ listen</a>
          </span>
        </a>
      </footer>
    </div>
  )
}
