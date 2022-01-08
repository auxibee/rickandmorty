import styles from "./button.module.css";
import cn from "classnames";

const BaseButton = ({ children, ...rest }) => {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
};

const LinkButton = ({ href, children, ...rest }) => {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};

const Button = ({
  children,
  active,
  notactive,
  primary,
  alive,
  dead,
  unknown,
  ...rest
}) => {
  const HocButton = rest.href ? LinkButton : BaseButton;
  return (
    <HocButton
      className={cn(
        styles.button,
        active && styles.active,
        notactive && styles.notactive,
        primary && styles.primary,
        alive && styles.alive,
        dead && styles.dead,
        unknown && styles.unknown
      )}
      {...rest}
    >
      {children}
    </HocButton>
  );
};

export default Button;
