import React from 'react';
import styles from './forgotpassword.module.css';

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
        <h2 className={styles.heading}>Forgot your password?</h2>

        {/* Subheading */}
        <p className={styles.subheading}>
          Don’t worry, happens to all of us. Enter your email below to recover your password.
        </p>

        {/* Email Input */}
        <div className={styles.inputSection}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="john.doe@gmail.com"
            className={styles.input}
          />
        </div>

        {/* Submit Button */}
        <button className={styles.submitButton}>Submit</button>

        {/* OR Divider */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>Or login with</span>
        </div>

        {/* Social Buttons */}
        <div className={styles.socialButtons}>
          <button className={styles.socialButton}>
            <img src="/google-icon.png" alt="Google" className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
}


