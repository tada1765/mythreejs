import React, { useEffect, useRef, useState } from "react";

export default function Dropdown({
  options,
  id,
  label,
  prompt,
  value,
  onChange,
}) {

  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [query, setQuery] = useState("");

  useEffect(() => { // when click outside box, close the box
    ["click", "touchend"].forEach((e) => { // do it for support touch
      document.addEventListener(e, toggle);
    });
    
    return () => // cleanUp func
    ["click", "touchend"].forEach((e) => {
      document.removeEventListener(e, toggle);
    });
  }, []);

  function toggle(e) { 
    // console.log([e.target, ref.current])
    setOpen(e && e.target === ref.current)
  }

  function filter(options) {
    return options.filter(
      (option) => 
        option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  function displayValue() {
    if (query.length > 0) return query;
    if (value) return value[label];
    return "";
  } 

  function selectOption(option) {
    setQuery("");
    onChange(option);
    setOpen(false);// when selected close the box
  }

  return (
    <div className="dropdown">
      <div 
        className="control" 
        // onClick={() => setOpen((prev) => !prev)} // not needed
      >
        <div className="selected-value">
          <input type="text"
            ref={ref}
            placeholder={value ? value[label] : prompt}
            value={displayValue()}
            onChange={e => {
              setQuery(e.target.value)
              onChange(null)
            }}
            //onClick={() => setOpen((prev) => !prev)}
            onClick={toggle}
            onTouchEnd={toggle}
          />
        </div>
        <div className={`arrow ${open ? "open" : null}`} />
      </div>
      <div className={`options ${open ? "open" : null}`}>
        { // write js code on html need {}:
          filter(options).map((option) => ( 
            <div 
              key={option[id]}// remove warning 
              className={`option ${value === option ? "selected" : null}`}
              onClick={() => selectOption(option)}
              onTouchEnd={() => selectOption(option)}
            >
              {option[label]}
            </div>
        ))}
      </div>
    </div>
  );
}