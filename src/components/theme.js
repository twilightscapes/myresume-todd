/** @jsx jsx */
import { jsx } from "theme-ui"
import { useColorMode } from "theme-ui"
import { FiMoon, FiSun } from "react-icons/fi"

const Theme = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <div sx={themeStyles.modeOption}>
      <button
        onClick={e => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
        aria-label="Theme Color"
      >
        <div sx={themeStyles.modeIcons}>
          <div>{colorMode === "default" ? <FiMoon /> : <FiSun />}</div>
          <div sx={themeStyles.modeText}>
            {/* {colorMode === "default" ? "Dark Mode" : "Light Mode"} */}
            {colorMode === "default" ? "" : ""}
          </div>
        </div>
      </button>
    </div>
  )
}
export default Theme

const themeStyles = {
  modeOption: {
    button: {
      fontSize: "120%",
      bg: "transparent",
      border: "none",
      cursor: "pointer",
      mt: "-2px",
      p: "0 0 0 0",
      "&:hover": {
        color: "",
      },
    },
  },
  modeIcons: {
    display: "flex",
    alignItems: "center",
    color: "",
    mt: "5px",
    "&:hover": {
      color: "color:",
    },
  },
  modeText: {
    fontSize: "14px",
    display: ["block", "block", "block", "block"],
    p: " 0 10px",
    mt: "-5px",
    letterSpacing: "1px",
  },
}
