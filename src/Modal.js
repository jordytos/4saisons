import { useState } from "react";

import "./Modal.css";
import Season from "./Season";

function Modal({ label, children }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  if (!open)
    return (
      <button className="Modal-button" onClick={toggle}>
        {label}
      </button>
    );
  return (
    <div className="Modal-root">
      <div className="Modal-content">{children}</div>
      <div className="Modal-actions">
        <button className="Modal-button" onClick={toggle}>
          Retour...
        </button>
      </div>
    </div>
  );
}

export default Modal;
