# ALX Listing App

## About the Project
The **ALX Listing App** is a foundational scaffold for a modern Airbnb clone, focusing on creating a well-organized, scalable codebase using **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**. This milestone establishes the groundwork for developing a dynamic, responsive, and user-friendly property listing page. The project emphasizes reusable components, clean folder structures, and adherence to best practices for maintainable and scalable development.

---

## Learning Objectives
This milestone is designed for professional developers to strengthen their expertise in modern web application development. By completing this milestone, learners will:
- Gain hands-on experience scaffolding a Next.js project tailored for production readiness.
- Implement TypeScript for type safety and reusable interfaces to enhance code maintainability and robustness.
- Configure TailwindCSS for building responsive, accessible, and visually appealing UI components.
- Structure a Next.js project following industry-standard best practices, ensuring scalability and readability.
- Create foundational reusable components and organize assets effectively for real-world applications.

---

## Requirements
### Prerequisites:
- Basic knowledge of Next.js, React, and TypeScript.
- Familiarity with TailwindCSS and modern styling techniques.
- Understanding of ESLint and its role in maintaining code quality.
- Proficiency in organizing and structuring projects for scalability.

### Technical Requirements:
- **Next.js** version 13+
- **Node.js** version 16+ installed locally
- Text editor (e.g., VS Code) with TypeScript and TailwindCSS extensions installed

---

## Key Highlights
### Project Setup:
1. **Initialize Next.js App**:
   - Scaffold the application with TypeScript, ESLint, and TailwindCSS enabled.
   - Command:
     ```bash
     npx create-next-app@latest alx-listing-app --typescript --tailwind --eslint --no-app-router --no-src-dir
     ```
   - Disable the App Router and avoid creating a `src` directory.

2. **Configure TailwindCSS**:
   - Update `tailwind.config.js`:
     ```javascript
     module.exports = {
       content: [
         './pages/**/*.{ts,tsx}',
         './components/**/*.{js,ts,jsx,tsx}',
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     ```
   - Modify `styles/globals.css`:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

### Folder Structure:
- **`components/common/Card.tsx`**: Defines a reusable `Card` component for displaying property information.
- **`components/common/Button.tsx`**: Creates a reusable `Button` component for actions like “Book Now” or “Details.”
- **`interfaces/index.ts`**: Contains TypeScript interfaces like `CardProps` and `ButtonProps`.
- **`constants/index.ts`**: Stores reusable constants such as API URLs and configuration settings.
- **`public/assets/`**: Contains project assets like images and SVGs.

---

## Instructions to Run Locally
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/natnael-shiferaw/alx-listing-app.git
   cd alx-listing-app
