import React from 'react';
import styles from './setPass.module.css';

export default function ForgotPasswordPage() {
  return (
    <div className={styles.container}>

      
      <div className={styles.card}>
      <h1 className={styles.logo}>FINSIGHT</h1>
        {/* Heading */}
        <h2 className={styles.heading}>Set Password</h2>

        {/* Subheading */}
        <p className={styles.subheading}>
          Your previous password has been reseted. Please enter a new password.
        </p>

        {/* Code Input */}
        <div className={styles.inputSection}>
          <label htmlFor="code" className={styles.label}>
            Create Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="NaveedAhmad123"
            className={styles.input}
          />
        </div>
        <div className={styles.inputSection}>
          <label htmlFor="confirm-password" className={styles.label}>
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="confirm-password"
            placeholder="NaveedAhmad123"
            className={styles.input}
          />
        </div>
        {/* Set Password Button */}
        <button className={styles.SetButton}>Set Password</button>

      </div>
    </div>
  );
}


