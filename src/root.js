import React, {useState, useCallback} from 'react';

import Dropdown from './components/Dropdown';
import VideoPlayer from './components/VideoPlayer';
import App from './components/App';
import ThemeContext, {theme} from './themeContext';

const options = [
    {id: 1, label: 'option 1'},
    {id: 2, label: 'option 2'},
    {id: 3, label: 'option 3'},
];

// const numbers = Array.from({length: 1000000}).map(n => Math.floor(Math.random() * 1000000));
const numbers = Array.from({length: 10}).map(n => Math.floor(Math.random() * 1000000));

const Root = () => {
    const [option, setOption] = useState('option 1');
    const handleOptionChange = useCallback((item) => setOption(item.label), []);

    return (
        <ThemeContext.Provider value={theme}>
            <App
                items={numbers}
                option={option}
            />
            <Dropdown
                label={option}
                onChange={handleOptionChange}
                items={options}
            />
            <VideoPlayer
                src="/video.mov"
                type="video/mp4"
            />
        </ThemeContext.Provider>
    );
};

export default Root;
