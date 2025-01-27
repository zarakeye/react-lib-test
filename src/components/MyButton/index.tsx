import styles from "./styles.module.css";
import clsx from "clsx";
import React from "react";

interface ComponentProps extends React.ComponentProps<"button"> {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
}

export const MyButton: React.FC<ComponentProps> = ({
  primary = false,
  size = "medium",
  label,
  ...props
}) => {
  const style = clsx(styles.button, {
    [styles['button--primary']]: primary,
    [styles[`button--${size}`]]: size,
  })

  return (
    <button
      type="button"
      className={style}
      {...props}
    >
      {label}
    </button>
  );
}