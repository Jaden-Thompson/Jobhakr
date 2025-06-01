## Custom Fonts for JobHackr

### Overview
This directory contains the custom fonts used in the JobHackr project to enhance the cyberpunk theme of the landing page.

### Installation
To use the custom fonts in your project, follow these steps:

1. **Download the Fonts**: Ensure you have the font files (e.g., `.ttf`, `.woff`, `.woff2`) in this directory.

2. **Include in CSS**: Add the following CSS rules to your main stylesheet to include the fonts:

   ```css
   @font-face {
       font-family: 'YourFontName';
       src: url('./YourFontFile.woff2') format('woff2'),
            url('./YourFontFile.woff') format('woff');
       font-weight: normal;
       font-style: normal;
   }
   ```

3. **Usage**: Use the font in your styles by referencing the font-family:

   ```css
   body {
       font-family: 'YourFontName', sans-serif;
   }
   ```

### Fonts Used
- **Font Name**: Description of the font and its purpose in the design.
- **Font Name**: Description of the font and its purpose in the design.

### License
Ensure that you comply with the licensing terms of the fonts used in this project.