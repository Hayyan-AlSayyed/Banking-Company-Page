import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SharedForm.css";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, btnAnimation, iconHover } from "../Animation/Animation";


// Social icons data
const SOCIAL_ICONS = [
  { id: 1, src: "/Banking-Company-Page/Images/LoginPage/Google.png", alt: "Google", url: "https://www.google.com/" },
  { id: 2, src: "/Banking-Company-Page/Images/LoginPage/Facebook.png", alt: "Facebook", url: "https://www.facebook.com/" },
  { id: 3, src: "/Banking-Company-Page/Images/LoginPage/Apple.png", alt: "Apple", url: "https://www.apple.com/" },
];

export default function SharedForm({ title, description, fields, submitText, secondaryText }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleSecondaryClick = () => {
    if (secondaryText === "Sign Up") navigate("/signup");
    else if (secondaryText === "Login") navigate("/login");
  };

  return (
    <section className="mh-login-page">
      <div

        className="image-container">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}

          src="/Banking-Company-Page/Images/LoginPage/MainTexture.png"
          className="mh-mainTexture"
          alt=""
        />

      </div>


      <motion.form
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mh-login-card" onSubmit={(e) => e.preventDefault()}>
        <motion.h1 variants={fadeIn("up")} className="mh-title">{title}</motion.h1>
        <motion.p variants={fadeIn("up")} className="mh-desc">{description}</motion.p>

        <div className="mh-auth-inputs">
          {fields.map((field, index) => {
            if (field.type === "password") {
              return (
                <motion.div
                  variants={fadeIn("up")}

                  key={index} className="mh-password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder={field.placeholder}
                  />
                  <motion.img
                    whileTap={{ scale: 1.5 }}
                    src="/Banking-Company-Page/Images/SignUpPage/ShowPassword.png"
                    alt="toggle password"
                    className="mh-password-eye"
                    onClick={() => setShowPassword(prev => !prev)}
                  />
                </motion.div>
              );
            }

            return (
              <input
                key={index}
                type={field.type}
                placeholder={field.placeholder}
              />
            );
          })}
        </div>

        {title === "Login" && (
          <a className="mh-forgot" href="#">
            Forgot Password?
          </a>
        )}

        <div className="mh-loginOrSignup">
          <motion.input
            variants={btnAnimation}
            whileHover="whileHover"
            whileTap="whileTap"
            className="mh-btn-login" type="submit" value={submitText} />
          <motion.button
            variants={btnAnimation}
            whileHover="whileHover"
            whileTap="whileTap"

            className="mh-btn-signup"
            type="button"
            onClick={handleSecondaryClick}
          >
            {secondaryText}
          </motion.button>
        </div>

        <div className="mh-divider">
          <span></span>
          <p>Or Continue with</p>
          <span></span>
        </div>

        <div className="mh-social">
          {SOCIAL_ICONS.map(icon => (
            <motion.span
              variants={fadeIn("up")}
              whileHover="hover"
              key={icon.id} className="mh-social-icon">
              <a href={icon.url}>
                <motion.img
                  variants={iconHover}

                  src={icon.src} alt={icon.alt} />
              </a>
            </motion.span>
          ))}
        </div>
      </motion.form>
    </section>
  );
}
