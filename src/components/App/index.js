import React, {useState, useEffect, useMemo, useContext} from 'react';

import ThemeContext from '../../themeContext';

const App = ({items, option}) => {
    useEffect(() => {
        if (option) {
            alert(option);
        }
    }, [option]);
    const [value, setValue] = useState(0);
    setInterval(() => setValue(Math.random()), 5000);
    const result = useMemo(() => [...items].sort(), [items]);
    // const result = [...items].sort();

    const context = useContext(ThemeContext);

    return (
        <div>
            <span
                style={{
                    backgroundColor: context.primaryColor,
                    color: context.secondaryColor,
                }}
            >
                {result.length}
            </span>
        </div>
    );
};

export default App;
