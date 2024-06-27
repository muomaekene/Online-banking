export const getDesignToken = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          main: "#FFFFFF",
          // primary: "#edf0f0",
          danger: "#f21616",
          secondary: "#f0f5f5",
          solid: "#11204f",
          border: "#c9ced7",
          activeText: "#fff",
          text: "#172546",
          altText: "#475569",
          scrollbar: "#8B8B8B",
          link: "#20659d",
          hover: "#f9f9f9",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
        }
      : {
          main: "#1E1E2C",
          // primary: "#313947",
          danger: "#ef4343",
          secondary: "#454a58",
          solid: "#0a57ae",
          border: "#585b5d",
          text: "#E3E3E3",
          activeText: "#fff",
          altText: "#a6adb4",
          scrollbar: "#828181",
          link: "#51a3e6",
          boxShadow:
            "rgba(47, 47, 47, 0.5) 0px 1px 3px 0px, rgba(72, 73, 73, 0.15) 0px 0px 0px 1px;",
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

  borderRadius: ["10px", "15px"],

  spacing: [5, 10, 15, 20],
});
