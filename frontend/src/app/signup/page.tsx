import React from 'react';
import styles from './signup.module.css';

export default function SignupPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
      <h1 className={styles.logo}>FINSIGHT</h1>
        {/* Heading */}
        <h2 className={styles.heading}>Sign up</h2>
        <p className={styles.subheading}>
          Let’s get you all set up so you can access your personal account.
        </p>

        {/* Input Section - Two Fields Side by Side */}
        <div className={styles.row}>
          <div className={styles.inputSection}>
            <label htmlFor="firstName" className={styles.label}>
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Naveed"
              className={styles.input}
            />
          </div>

          <div className={styles.inputSection}>
            <label htmlFor="lastName" className={styles.label}>
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Ahmad"
              className={styles.input}
            />
          </div>
        </div>

        {/* Input Section - Email and Phone Number */}
        <div className={styles.row}>
          <div className={styles.inputSection}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="mnaveed.abid786"
              className={styles.input}
            />
          </div>

          <div className={styles.inputSection}>
            <label htmlFor="phone" className={styles.label}>
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              placeholder="john.doe@gmail.com"
              className={styles.input}
            />
          </div>
        </div>

       {/* Password and Confirm Password */}
<div className={`${styles.inputSection} ${styles.passwordSection}`}>
  <label htmlFor="password" className={styles.label}>
    Password
  </label>
  <input
    id="password"
    type="password"
    placeholder="********"
    className={styles.input}
  />
</div>

<div className={`${styles.inputSection} ${styles.passwordSection}`}>
  <label htmlFor="confirmPassword" className={styles.label}>
    Confirm Password
  </label>
  <input
    id="confirmPassword"
    type="password"
    placeholder="********"
    className={styles.input}
  />
</div>

        {/* Terms and Conditions */}
        <div className={styles.checkboxSection}>
          <input type="checkbox" id="terms" className={styles.checkbox} />
          <label htmlFor="terms" className={styles.termsText}>
            I agree to all the <span className={styles.link}>Terms</span> and{' '}
            <span className={styles.link}>Privacy Policies</span>
          </label>
        </div>

        {/* Create Account Button */}
        <button className={styles.submitButton}>Create account</button>

        {/* Already have an account */}
        <p className={styles.loginText}>
          Already have an account? <span className={styles.link}>Login</span>
        </p>

        {/* OR Divider */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>Or Sign up with</span>
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


