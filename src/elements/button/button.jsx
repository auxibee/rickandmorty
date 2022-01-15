import styles from "./button.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";

const BaseButton = ({ children, ...rest }) => {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
};

const LinkButton = ({ href, children, ...rest }) => {
  return (
    <Link to={href} {...rest}>
      {children}
    </Link>
  );
};

const Button = ({ children, active, notactive, primary, status, ...rest }) => {
  const HocButton = rest.href ? LinkButton : BaseButton;
  return (
    <HocButton
      className={cn(
        styles.button,
        active && styles.active,
        notactive && styles.notactive,
        primary && styles.primary,
        status == "alive" && styles.alive,
        status == "dead" && styles.dead,
        status == "unknown" && styles.unknown
      )}
      {...rest}
    >
      {children}
    </HocButton>
  );
};

export default Button;
