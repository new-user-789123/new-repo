import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/createPassword.module.css'

export default function createPassword() {
  return (
    <>
    <div className={styles.appContainer}>
        <div className={styles.box}>
            <div className={styles.form}>
              <h2 className={styles.heading}>Create Password</h2>
              <span className={styles.heading}>Foo Name</span>
              <img className={styles.image} src="/favicon.jpg" alt="" srcset="" />
              <div className={styles.inputBox}>
                <input className={styles.inputBoxInput} type="password" required="required" />
                <span className={styles.inputBoxSpan}>Password</span>
                <i className={styles.inputBoxI}></i>
              </div>
              <div className={styles.inputBox}>
                <input className={styles.inputBoxInput} type="password" required="required" />
                <span className={styles.inputBoxSpan}>Confirm Password</span>
                <i className={styles.inputBoxI}></i>
              </div>
              <input className={styles.inputSubmit} type="submit" value="Login" />
            </div>
          </div>
    </div>
    </>
  )
}
