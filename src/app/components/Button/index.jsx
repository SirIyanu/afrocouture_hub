import { combineClasses } from "../../utils/format";
import style from "./style.module.css";

export const CustomButton = ({ children, ...props }) => {
  console.log("Custom button clicked");
  const classNames = {
    primary: "btn",
    secondary: "btn-grey",
  };
  const className = classNames[props.type] || classNames.primary;
  const classes = combineClasses(className, style.button, props.className);
  return (
    <button {...props} onClick={props.onClick} className={classes}>
      {children}
    </button>
  );
};
