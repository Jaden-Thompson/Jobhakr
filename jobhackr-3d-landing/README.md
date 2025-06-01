# JobHackr 3D Landing Page

## Overview
JobHackr is a cyberpunk-themed 3D landing page designed for a job application AI tool. The application allows users to paste job postings and receive tailored responses in seconds. The landing page features a visually stunning 3D background and an engaging user interface.

## Features
- **3D Background Scene**: Utilizes Three.js to create a dynamic cyberpunk environment with glowing neon grid lines and floating holographic UI panels.
- **Hero Section**: Includes a compelling headline and subheadline to attract users, along with a neon-styled button for navigation.
- **Responsive Navbar**: Provides easy navigation throughout the application while maintaining a cyberpunk aesthetic.
- **Custom Fonts**: Incorporates unique fonts to enhance the visual appeal of the landing page.

## Project Structure
```
jobhackr-3d-landing
├── src
│   ├── components
│   │   ├── CyberpunkScene.tsx
│   │   ├── LandingContent.tsx
│   │   └── Navbar.tsx
│   ├── assets
│   │   └── fonts
│   │       └── README.md
│   ├── styles
│   │   └── main.css
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd jobhackr-3d-landing
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Technologies Used
- **React**: For building the user interface.
- **TypeScript**: For type safety and better development experience.
- **Three.js**: For rendering the 3D background scene.
- **Styled-components/Tailwind CSS**: For styling the components.
- **Custom Fonts**: To enhance the cyberpunk theme.

## Contribution
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.