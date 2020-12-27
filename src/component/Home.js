import React, {useState} from 'react'

const Home = () => {
    const [word, setWord] = useState('');
    const Toggle = () => {
    setWord(!word)
    }
    return (
        <div className="Home__">
            <h1>Hello</h1>
            <button onClick={Toggle}>{word ? 'HI' : 'THERE'}</button>
        </div>
    )
}

export default Home;
