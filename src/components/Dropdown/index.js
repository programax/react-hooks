import React, {useCallback, useState} from 'react';

import './style.scss';

const Dropdown = ({onChange, label, items}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);
    const handleItemClick = useCallback((item) => {
        onChange(item);
        setIsOpen(false);
    }, [onChange]);

    return (
        <div className="dropdown" onClick={handleClick}>
            <div className={`dropdown__label ${isOpen ? 'open' : ''}`}>{label}</div>
            {isOpen &&
                <ul className="dropdown__list">
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className="dropdown-item"
                            onClick={() => handleItemClick(item)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default Dropdown;
