# React Portfolio 🌟

A modern and responsive personal portfolio website built with React.js, designed to showcase your skills, projects, and experience in a visually appealing and interactive way. This project provides a template to create a professional online presence.

## 🚀 Features

- **Responsive Design:** 📱 Adapts seamlessly to different screen sizes, ensuring a consistent experience across devices.
- **Interactive UI:** ✨ Engaging user interface with smooth scrolling and animations using `framer-motion`.
- **Skills Showcase:** 🤹‍♀️ Clearly displays your technical skills with categorized sections and icons.
- **Project Portfolio:** 💼 Showcases your projects with images, descriptions, and links to live demos and GitHub repositories.
- **Experience Timeline:** ⏳ Presents your professional experience in a chronological order.
- **Contact Form:** 📧 Allows visitors to easily get in touch with you through a simple and effective contact form.
- **Typing Animation:** ✍️ Dynamic typing animation in the hero section to highlight key skills.
- **Social Media Links:** 🔗 Prominent links to your social media profiles.
- **Reveal Animations:** 🎭 Fade-in animations on sections as they scroll into view.

## 🛠️ Tech Stack

- **Frontend:**
    - React.js: JavaScript library for building user interfaces.
    - Tailwind CSS: Utility-first CSS framework for styling.
    - Chakra UI: UI component library.
- **Animation:**
    - Framer Motion: A production-ready motion library for React.
    - React Type Animation: For creating typing animations.
- **Icons:**
    - React Icons: Incorporating various icon sets (e.g., `react-icons/ai`, `react-icons/di`, `react-icons/ri`, `react-icons/si`, `react-icons/fa`, `react-icons/io5`).
- **Utilities:**
    - React Scroll: For implementing smooth scrolling navigation.
- **Build Tool:**
    - Vite: A fast build tool and development server.
- **Form Handling:**
    - Getform.io: Third-party service for handling form submissions.
- **Other:**
    - ESLint: For linting JavaScript code.
    - PostCSS: For transforming CSS with JavaScript.

## 📦 Installation

### Prerequisites

- Node.js (>=16)
- npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd react-portfolio
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install
    ```

### Running locally

1.  Start the development server:

    ```bash
    npm run dev # or yarn dev
    ```

    This will start the application in development mode, usually on `http://localhost:5173`.

## 💻 Usage

1.  **Customize Content:**
    - Modify the `src/components` directory to update your personal information, skills, projects, and experience.
    - Update images in the `src/assets` directory.
    - Adjust the styling in `src/index.css` or component-specific CSS files.

2.  **Update Project Data:**
    - Edit the `projects` array in `src/components/Portfolio.jsx` to add or modify your projects.

3.  **Configure Contact Form:**
    - The contact form uses `getform.io`.  Replace the placeholder URL with your actual `getform.io` endpoint.

4.  **Deployment:**
    - Build the project for production:

    ```bash
    npm run build # or yarn build
    ```

    - Deploy the contents of the `dist` directory to your preferred hosting provider (e.g., Netlify, Vercel, GitHub Pages).

## 📂 Project Structure

```
react-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── profpic.png
│   ├── components/
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Reveal.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 📸 Screenshots
<img width="1347" height="600" alt="image" src="https://github.com/user-attachments/assets/2c48ab92-51a3-4ea6-a676-82dd1025ba0c" />

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

If you have any questions or suggestions, feel free to contact me at [amaliyahamel0304@gmail.com](mailto:amaliyahamel0304@gmail.com).

