/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#8a7d7d",
          "200": "#302b2b",
          "300": "#1f261c",
          "400": "#1c201b",
        },
        gold: {
          "100": "#ffe70c",
          "200": "#f3dc0d",
        },
        goldenrod: "#bfa800",
        white: "#fff",
        gainsboro: "#d9d9d9",
        dimgray: {
          "100": "#706666",
          "200": "#4f544f",
        },
      },
      spacing: {},
      fontFamily: {
        aclonica: "Aclonica",
        abeezee: "ABeeZee",
        "abhaya-libre": "'Abhaya Libre'",
        "abril-fatface": "'Abril Fatface'",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "481xl": "500px",
      "181xl": "200px",
      "106xl": "125px",
      "77xl": "96px",
      "5xl": "24px",
      "381xl": "400px",
      "141xl": "160px",
      "81xl": "100px",
      xl: "20px",
      base: "16px",
      "31xl": "50px",
      "11xl": "30px",
      "17xl": "36px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      mq1825: {
        raw: "screen and (max-width: 1825px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
