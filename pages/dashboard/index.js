import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/dashboardLogin.module.css'

export default function DashboardLogin() {
  return (
    <>
      <div className={styles.appContainer}>
          <div className={styles.box}>
              <div className={styles.form}>
                <img className={styles.image} src="/favicon.jpg" alt="" srcSet="" />
                <h2 className={styles.heading}>Dashboard Login</h2>
                <div className={styles.inputBox}>
                  <input className={styles.inputBoxInput} type="text" required="required" />
                  <span className={styles.inputBoxSpan}>Username</span>
                  <i className={styles.inputBoxI}></i>
                </div>
                <div className={styles.inputBox}>
                  <input className={styles.inputBoxInput} type="password" required="required" />
                  <span className={styles.inputBoxSpan}>Password</span>
                  <i className={styles.inputBoxI}></i>
                </div>
                <input className={styles.inputSubmit} type="submit" value="Login" />
              </div>
            </div>
      </div>
    </>
  )
}
