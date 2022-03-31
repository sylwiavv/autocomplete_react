import React from 'react';
import ReactDOM from 'react-dom';
import App from 'views/App';
import { ThemeContext } from "./providers/ThemeContext";

ReactDOM.render(
        <ThemeContext>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ThemeContext>,

document.getElementById('root')
);
