import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        fetch('http://localhost:5001')
            .then((response) => 
                {
                    console.log(response);

                    return response.text();
                })
            .then((data) => setMessage(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Hello from the Frontend!</h1>
            <p>{message}</p>
        </div>
    );
};

export default App;
