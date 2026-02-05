import './JobCard.css';
// Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { btnAnimation, cardHover, fadeIn, iconHover, staggerContainer } from "../../../../Animation/Animation";

const JobCard = ({ job }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      {...cardHover}
      className="hs-job-card-container border flex-between flex-col">
      <motion.h2
        variants={fadeIn("down", 0.1)}
        className="hs-job-card-title">{job.title}</motion.h2>

      <motion.div
        variants={staggerContainer}
        className="hs-job-card-tags">
        <motion.p variants={fadeIn("up", 0.2)} className="hs-job-tag border">Location: {job.location}</motion.p>
        <motion.p variants={fadeIn("up", 0.2)} className="hs-job-tag border">Department: {job.department}</motion.p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        className="hs-job-card-section">
        <h3 className='hs-sub-title'>About This Job</h3>
        <p className='hs-sub-title-desc'>{job.description}</p>
      </motion.div>
      <div className="hs-job-card-section">
        <motion.h3
          variants={fadeIn("up", 0.4)}
          className='hs-sub-title'>Requirements & Qualifications</motion.h3>

        <motion.ul
          variants={staggerContainer}
          className="hs-jo-requirements">
          {Array.isArray(job.requirements) ? (
            job.requirements.map((requirement, index) => (
              <motion.li
                variants={fadeIn("up", 0.1 * index)}
                whileHover="hover"
                key={index} className='hs-sub-title-desc'>
                <motion.img
                  variants={iconHover}
                  src="/Images/CareersPage/Bag Icon.png" alt="icon" className="hs-requirements-icon" />
                {requirement}
              </motion.li>
            ))
          ) : (
            job.requirements?.split(",").map((req, index) => (
              <li key={index} className='hs-sub-title-desc'>
                <img src="/Images/CareersPage/Bag Icon.png" alt="icon" className="hs-requirements-icon" />
                {req.trim()}
              </li>
            ))
          )}
        </motion.ul>
      </div>
      <motion.button
        variants={fadeIn("up", 0.5)}
        {...btnAnimation}
        className="hs-apply-btn">Apply Now</motion.button>
    </motion.div>
  );
};

export default JobCard;
