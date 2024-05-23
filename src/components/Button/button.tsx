import React from "react";
import styles from "./button.module.css";

const Button = ({ children, onClick }: {
    children: React.ReactNode,
    onClick: () => void;
}) => {
    return (
        <button
            onClick={onClick}
            className={styles.btn}>
            {children}
        </button>
     );
}
 
export default Button;