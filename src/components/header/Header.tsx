import React from 'react'
import Link from 'next/link'
import styles from './header.module.css'
import Navbarr from './navbar'
const Header = () => {
  return (
    
    
    
    
    <header className={styles.header}>
<Navbarr />
    
            <div className={styles.right}>
        <Link  className={styles.btn} href="/login">login</Link>
    <Link className={styles.btn} href="/register">register</Link>
        </div>
    </header>
  )
}

export default Header