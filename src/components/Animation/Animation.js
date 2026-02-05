/**
 * Animation Configuration
 */

// Custom bezier curve for smooth motion
const customEase = [0.22, 1, 0.36, 1];

/**
 * 1. Containers & Layout
 */

// Page transitions and sequential child reveal
export const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.1,
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: "easeIn" }
  }
};

// Simple stagger effect for list containers
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

/**
 * 2. Entrance Animations
 */

// Fade in from different directions (up, down, left, right)
export const fadeIn = (direction = "up", delay = 0, duration = 0.8, type = "tween") => {
  const offset = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: -0, y: 0 },
    right: { x: 0, y: 0 },
    none: { x: 0, y: 0 }
  };

  return {
    hidden: { opacity: 0, ...offset[direction] },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: type,
        duration,
        delay,
        ease: type == "spring" ? undefined : customEase
      }
    }
  };
};

// Entrance with rotation and fade
export const rotateIn = (delay = 0.3) => ({
  hidden: { rotate: -20, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.6, delay, ease: customEase },
  },
});

/**
 * 3. Interaction & Hover
 */

// Lift and scale effect for cards
export const cardHover = {
  hover: {
    y: -8,
    scale: 1.01,
    backgroundColor: "#c9ff331a",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Rotate and scale effect for icons
export const iconHover = {
  hover: {
    rotate: 5,
    scale: 1.1,
    y: -3,
    transition: { type: "spring", stiffness: 400, damping: 15 }
  }
};

// Subtle scale for buttons on hover and tap
export const btnAnimation = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.95 },
  layout: true
};

// Diagonal movement for arrow icons
export const arrowMotion = {
  initial: { x: 0, y: 0 },
  hover: {
    x: 8,
    y: -8,
    transition: { type: "spring", stiffness: 400, damping: 15 }
  }
};



// Infinite floating effect (up and down)
export const floatAnimation = (index = 0) => ({
  initial: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 0.3,
    },
  },
});

// Infinite heartbeat/scaling pulse
export const pulseAnimation = {
  animate: {
    scale: [1, 1.1, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
};

// Smooth entry/exit for dynamic lists
export const dynamicListItem = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: {
    layout: { type: "spring", stiffness: 200, damping: 50 },
    opacity: { duration: 0.2 }
  }
};


// Smooth text color transition on hover
export const textHoverVariant = (activeColor = "#c9ff33", defaultColor = "#4C4C4D") => ({
  initial: { color: defaultColor },
  visible: { color: defaultColor },
  hover: {
    color: activeColor,
    transition: { duration: 0.3, ease: "easeOut" }
  }
});




// Flash effect: Appearance then disappearance within 1 second

export const flashHoverVariant = (color = "#c9ff33") => ({
  initial: {
    boxShadow: `0px 0px 0px rgba(0, 0, 0, 0)`,
    filter: "brightness(1)",
    transition: { duration: 0.5, ease: "easeInOut" }
  },
  hover: {
    boxShadow: `0px 0px 40px ${color}55`,
    filter: "brightness(1.1)",
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
});
