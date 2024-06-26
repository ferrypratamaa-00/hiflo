import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                "text-dark dark:text-light border-primary-300  focus:border-primary-500 focus:ring-0 rounded-md shadow-sm " +
                className
            }
            ref={input}
        />
    );
});
