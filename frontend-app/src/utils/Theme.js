export const getDesignToken = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          main: "#FFFFFF",
          // primary: "#edf0f0",
          secondary: "#edf0f0",
          solid: "#0b5b9d",
          border: "#c9ced7",
          activeText: "#fff",
          text: "#172546",
          altText: "#475569",
          scrollbar: "#8B8B8B",
          link: "#20659d",
        }
      : {
          main: "#1E1E2C",
          // primary: "#313947",
          secondary: "#363f4e",
          solid: "#2f7dbd",
          border: "#585b5d",
          text: "#E3E3E3",
          activeText: "#fff",
          altText: "#9AA0A6",
          scrollbar: "#4E4D4D",
          link: "#51a3e6",
        }),
  },
  border: {
    radius: "15px",
    margin: "15px",
  },
  button: {
    radius: "10px",
  },
  typography: {
    main: {
      fontFamily: "Product sans, sans-serif",
      fontSize: ["12px", "13px", "14px", "16px"],
      fontWeight: [400, 500, 600],
      borderRadius: "5px",
    },
    header: {
      fontFamily: "Gloock, sans-serif",
      fontSize: "20px",
      fontWeight: 500,
    },
  },
  spacing: [5, 10, 15, 20],
});
