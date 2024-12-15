import React from 'react';
import styles from './login.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Binance Logo */}
        <h1 className={styles.logo}>FINSIGHT</h1>

        {/* Welcome Heading */}
        <h2 className={styles.heading}>Welcome to FinSight</h2>

        {/* Email/Phone Section */}
        <div className={styles.inputSection}>
          <label htmlFor="email" className={styles.label}>
            Email/Phone number
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email/Phone (without country code)"
            className={styles.input}
          />
        </div>

        {/* Password Section */}
        <div className={styles.inputSection}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className={styles.input}
          />
        </div>

        {/* Checkbox Section */}
        <div className={styles.checkboxSection}>
          <input type="checkbox" id="terms" className={styles.checkbox} />
          <label htmlFor="terms" className={styles.termsText}>
            By creating an account, I agree to Binance's{' '}
            <a href="#" className={styles.link}>
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className={styles.link}>
              Privacy Policy
            </a>
          </label>
        </div>

        {/* Next Button */}
        <button className={styles.nextButton}>Next</button>

        {/* OR Divider */}
        <div className={styles.divider}>
          <span>or</span>
        </div>

        {/* Social Login Buttons */}
        <button className={styles.socialButton}>
          <img src="/google-icon.png" alt="Google" className={styles.icon} />
          Continue with Google
        </button>
      </div>

      {/* Footer Outside the Card */}
      <div className={styles.footerOutside}>
        <a href="#" className={styles.footerLink}>
          Sign up as an entity
        </a>{' '}
        or{' '}
        <a href="#" className={styles.footerLink}>
          Log in
        </a>
      </div>
    </div>
  );
}


