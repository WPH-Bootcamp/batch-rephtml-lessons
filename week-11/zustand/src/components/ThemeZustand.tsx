import { useThemeStore } from "../store/theme.store";

export default function ThemeZustand() {
  const theme = useThemeStore((state) => state.theme);

  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div
      className={`container ${theme === "dark" ? "dark-mode" : "light-mode"}`}
    >
      <h2>Current Theme: {theme}</h2>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
