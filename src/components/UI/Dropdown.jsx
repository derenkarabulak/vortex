import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/dropdown.css";
import { Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";

const Dropdown = ({ options, onChange, defaultLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [t] = useTranslation("global");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option.value);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Row>
        <div className="dropdown" ref={dropdownRef}>
          <div className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
            {t("products.categories")}
            <span className={`dropdown__icon ${isOpen ? "open" : ""}`}>
              &#9660;
            </span>
          </div>
          {isOpen && (
            <ul className="dropdown__menu">
              {options.map((option) => (
                <li
                  key={option.value}
                  className="dropdown__item"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Row>
    </Container>
  );
};

export default Dropdown;
