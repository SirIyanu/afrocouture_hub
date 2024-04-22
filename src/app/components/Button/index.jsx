import { combineClasses } from "../../utils/format";
import style from "./style.module.css";

export const CustomButton = ({
  children,
  onClick,
  type,
  route,
  className,
  ...props
}) => {
  const classNames = {
    primary: "btn",
    secondary: "btn-grey",
  };
  const defaultClassName = classNames[type] || classNames.primary;
  const classes = combineClasses(defaultClassName, style.button, className);

  const handleClick = () => {
    console.log("Custom button clicked");
    if (onClick) {
      onClick();
    }
  };

  return route ? (
    <a href={route} className={classes} {...props}>
      {children}
    </a>
  ) : (
    <button onClick={handleClick} className={classes} {...props}>
      {children}
    </button>
  );
};
