export const useTheme = () => {
  // Global persistent reactive state across all components
  const isDark = useState<boolean>("theme:isDark", () => true);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  return {
    isDark,
    toggleTheme,
  };
};
