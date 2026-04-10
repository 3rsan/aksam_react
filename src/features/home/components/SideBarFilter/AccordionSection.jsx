import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

export default function AccordionSection({
  title,
  defaultOpen = false,
  children,
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="sf-accordion">
      <button
        type="button"
        className="sf-accordion__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <FaChevronDown
          className={`sf-accordion__arrow ${open ? 'sf-accordion__arrow--open' : ''}`}
        />
      </button>
      <div
        className={`sf-accordion__body ${open ? 'sf-accordion__body--open' : ''}`}
      >
        <div className="sf-accordion__inner">{children}</div>
      </div>
    </div>
  );
}
