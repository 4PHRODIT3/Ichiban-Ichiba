import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./styles.css";

const Modal = ({children}) => {

    const modal_container = document.getElementById("modal");
    const modalRef = useRef(null);

    if(!modalRef.current){
        modalRef.current = document.createElement("div");
    }

    useEffect(() => {
        modal_container.appendChild(modalRef.current);
        return () => modal_container.removeChild(modalRef.current);
    },[])

    return createPortal(<div className="ichiban__ichiba__modal">{children}</div>,modalRef.current);
}

export default Modal