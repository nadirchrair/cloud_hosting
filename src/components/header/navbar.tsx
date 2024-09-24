import React from 'react'
import styles from './header.module.css'
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from 'next/link'

const Navbarr = () => {
  return (
    <nav className={styles.navbar}>
    <div>
        <Link href='/' className={styles.logo}> Cloud
        <FaCloudDownloadAlt />

         Hosting</Link>
    </div>
    <ul className={styles.navLinks}>
    <Link  className={styles.navLink} href="/">Home</Link>
<Link className={styles.navLink} href="/articles">articles</Link>
<Link className={styles.navLink} href="/about">about</Link>
<Link className={styles.navLink} href="/admin">Admin Dash</Link>

    </ul>
</nav>  )
}

export default Navbarr