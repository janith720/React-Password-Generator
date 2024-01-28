import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    marginLeft: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default function TilesAndSwitch(props) {
  let {
    upCase,
    setUpCase,
    lowCase,
    setLowCase,
    num,
    setNum,
    symbols,
    setSymbols,
  } = props;

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            background: "white",
            padding: "20px",
            margin: "10px",
            width: "300px",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
            borderRadius: "8px",
          }}
        >
          <p style={{ padding: "10px" /* color: changeColor1 */ }}>Uppercase</p>
          <FormControlLabel
            control={
              <IOSSwitch
                checked={upCase}
                onChange={(e) => setUpCase(e.target.checked)}
                id="uppercase-letters"
                name="uppercase-letters"
              />
            }
            style={{ marginLeft: "auto" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            background: "white",
            padding: "20px",
            margin: "10px",
            width: "300px",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
            borderRadius: "8px",
          }}
        >
          <p style={{ padding: "10px" /* color: changeColor2 */ }}>Lowercase</p>
          <FormControlLabel
            control={
              <IOSSwitch
                checked={lowCase}
                onChange={(e) => setLowCase(e.target.checked)}
                id="lowercase-letters"
                name="lowercase-letters"
              />
            }
            style={{ marginLeft: "auto" }}
          />
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            background: "white",
            padding: "20px",
            margin: "10px",
            width: "300px",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
            borderRadius: "8px",
          }}
        >
          <p style={{ padding: "10px" /* color: changeColor3 */ }}>Numbers</p>
          <FormControlLabel
            control={
              <IOSSwitch
                checked={num}
                onChange={(e) => setNum(e.target.checked)}
                id="numbers"
                name="numbers"
              />
            }
            style={{ marginLeft: "auto" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            background: "white",
            padding: "20px",
            margin: "10px",
            width: "300px",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
            borderRadius: "8px",
          }}
        >
          <p style={{ padding: "10px" /* color: changeColo4 */ }}>Symbols</p>
          <FormControlLabel
            control={
              <IOSSwitch
                checked={symbols}
                onChange={(e) => setSymbols(e.target.checked)}
                id="symbols"
                name="symbols"
              />
            }
            style={{ marginLeft: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
