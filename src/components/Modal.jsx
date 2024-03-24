import { Children, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = '', onClose }) {
    const dialogRef = useRef()
    useEffect(() => {
        const modal = dialogRef.current;
        if (open) {
            dialogRef.current.showModal();
        }
        return () => modal.close()
    }, [open]
    )
    return createPortal(
        <dialog ref={dialogRef}
            onClose={onClose}
            className={`model ${className}`}>{children}</dialog>, document.getElementById('modal')
    )
}