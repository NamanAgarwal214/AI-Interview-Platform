import React from 'react';
import styles from '../styles/Features.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faRocket
  } from "@fortawesome/free-solid-svg-icons";

function Features() {
  return (
    <section id={styles.features} className={styles.features}>
      <div className="container">
        <h1>Features</h1>
        <div className={styles.row}>
          <div className={styles.colmd4}>
            <div className={styles.feature}>
              <h3>Collaborative Hiring</h3>
              <p>Collaborative hiring is an effective approach that involves multiple stakeholders in the candidate evaluation and selection process. Our platform streamlines this process by making it easy for your team to collaborate and share feedback on candidates in a central location. This allows for more informed decision-making and helps to ensure that the best candidates are selected for your organization.</p>
            </div>
          </div>
          <div className={styles.colmd4}>
            <div className={styles.feature}>
              {/* <i className="fas fa-rocket"></i> */}
              <h3>Faster Hiring Times</h3>
              <p>Our AI-powered interview process leverages machine learning algorithms to automate candidate screening, resulting in hiring times that are up to 50% faster than traditional methods. This allows recruiters to focus on other important tasks, such as interviewing top candidates and building relationships with potential hires. By streamlining the hiring process, our platform helps organizations to save time and resources while identifying the best candidates for the job.</p>
            </div>
          </div>
          <div className={styles.colmd4}>
            <div className={styles.feature}>
              <i className="fas fa-chart-line"></i>
              <h3>Better Hiring Decisions</h3>
              <p>Our platform enables data-driven hiring decisions by providing comprehensive analytics on candidate performance and recruitment metrics. This data can be used to identify patterns and trends in candidate evaluation, as well as to track the effectiveness of different recruitment strategies over time. By leveraging this information, organizations can continuously refine their recruitment process to ensure better hiring decisions and ultimately, better business outcomes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
