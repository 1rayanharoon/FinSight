import React from 'react';
import styles from './verify.module.css';

export default function ForgotPasswordPage() {
  return (
    <div className={styles.container}>

      
      <div className={styles.card}>
      <h1 className={styles.logo}>FINSIGHT</h1>
        {/* Back to login link (inside the card and aligned left) */}
        <a href="#" className={styles.backLink}>
          &larr; Back to login
        </a>
        {/* Heading */}
        <h2 className={styles.heading}>Verify Code</h2>

        {/* Subheading */}
        <p className={styles.subheading}>
          An authentication code has been sent to your email.
        </p>

        {/* Code Input */}
        <div className={styles.inputSection}>
          <label htmlFor="code" className={styles.label}>
            Enter Code
          </label>
          <input
            id="code"
            type="code"
            placeholder="ABC-123"
            className={styles.input}
          />
        </div>
        {/* Submit Button */}
        <button className={styles.verifyButton}>Verify</button>

      </div>
    </div>
  );
}


