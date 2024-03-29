// /** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["*", "./pages/*html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "20px",
        lg: "24px",
        xl: "40px",
        "2xl": "60px"
      }
    },
    extend: {
      fontFamily: {
        sans: ["SF Pro Display", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: "#026F86",
        secondary: "#0095C0",
        tertiary: "#393E50",
        success: "#ED4B9E",
        accent: "#ECF1F4",
        light: "#FAFCFE"
      },
      backgroundImage: {
        "dotted-bg": "url('./assets/images/about_us/dotted.png')",
        "blog-bg": "url('./assets/images/blog/blog_bg.png')",
        "single-blog": "url('./assets/images/single_blog/single_bg.png')",
        "single-blog-mob":
          "url('./assets/images/single_blog/single_bg_mob.png')",
        "single-bg": "url('/assets/images/single_blog/post_img.png')"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base",
      strategy: "class"
    })
  ]
};
