export const getDesignToken = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          main: "#FFFFFF",
          // primary: "#edf0f0",
          danger: "#ff2e2e",
          secondary: "#EEEEEE",
          solid: "#201E43",
          focus: "#0e0d20",
          border: "#a1a0a085",
          activeText: "#fff",
          text: "#172546",
          altText: "#475569",
          scrollbar: "#8B8B8B",
          link: "#1831a4",
        }
      : {
          main: "#0d0d0d",
          // primary: "#313947",
          danger: "#c63030",
          secondary: "#464646a4",
          solid: "#134B70",
          focus: "#989898d2",
          border: "#585858ca",
          text: "#E3E3E3",
          activeText: "#fff",
          altText: "#a6adb4",
          scrollbar: "#828181",
          link: "#51a3e6",
        }),
  },

  typography: {
    main: {
      fontFamily: "DM Sans, sans-serif",
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

  borderRadius: ["4px", "6px"],

  spacing: [5, 10, 15, 20],
});
