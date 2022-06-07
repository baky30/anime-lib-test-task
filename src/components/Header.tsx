import React from 'react';

const Header = () => {
    return (
        <div className={'bg-white px-5 py-1.5'}>
            <img src={require('../assets/logo/logo.png')} className={"h-7 sm:h-12"} alt={""} />
        </div>
    );
};

export default Header;
