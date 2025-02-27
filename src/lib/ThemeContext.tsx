// import React, { createContext, useContext, useState, ReactNode } from "react";

// type Theme = "light" | "dark" | "colorful";

// interface ThemeContextProps {
//   theme: Theme;
//   setTheme: (theme: Theme) => void;
// }

// const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [theme, setTheme] = useState<Theme>("light");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };
