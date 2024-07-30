# Contributing to Pop UI 🤝

Thank you for considering contributing to Pop UI! Your help is greatly appreciated. Here are the steps to add a new component to the library:

## Steps to Add a New Component

1. **Create a New Folder in `src/components`**

   - Navigate to the `src/components` directory and add a new folder for your component.
   - Example:
     ```plaintext
     src/
       components/
         Button/
           index.tsx
           style.scss
     ```

2. **Use Local Scope for Styling**

   - Ensure that your styles do not conflict with other components by using a local scope. Prefix your class names with `pop-`.
   - Example:
     ```scss
     // style.scss
     .pop-btn {
       // your styles here
     }
     ```

3. **Import the Component**
   - Once you have finished creating your component, import it in `components/index.ts`.
   - Example:
     ```typescript
     // components/index.ts
     export { default as Button } from './Button'
     ```

## General Guidelines

- Follow the existing code style and conventions.
- Write clear, concise, and meaningful commit messages.
- Ensure your code is well-documented.
- Test your component to make sure it works as expected.

## Submitting a Pull Request

1. Fork the repository.
2. Create a new branch (`git checkout -b new-component`).
3. Commit your changes (`git commit -am 'Add new component'`).
4. Push to the branch (`git push origin new-component`).
5. Create a new Pull Request.

We look forward to your contributions!

Thank you!

The Pop UI Team
