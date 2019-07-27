import React from 'react';

const Header = () => {
    return(
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h1 style={textStyle}>Twitter Search</h1>
                <img style={imgStyle} src='https://www.catalyte.io/wp-content/uploads/twitter-logo-white-png.png' alt ='twitter logo'/>
            </div>
            
            <p style={descriptionStyle}>Search the latest hashtags</p>
        </div>
    );
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    
}

const headerStyle = {
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
}

const textStyle = {
    fontSize: '2.5rem',
    marginRight: '0.3rem'
}

const imgStyle = {
    width: '75px'
}

const descriptionStyle = {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    width: '280px'
}

export default Header;