import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          快速实现你的想法
        </h1>

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
