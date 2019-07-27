import React from 'react';

function Search (props) { 
    return(
        <form style={formStyle} onSubmit={props.search}>
            <input style={inputStyle} type='text' placeholder=' #latestTweet' onChange={props.updateInput}></input>
            <button style={btnStyle} type='button'>Search</button>
        </form>
    );
};

const formStyle = {
    fontSize: '1.5rem',
    width: '280px',
    borderRadius: '55%'
}
const inputStyle = {
    height: '2rem',
    width: '70%'
}

const btnStyle = {
    height: '2rem',
    width: '30%',
}

export default Search;