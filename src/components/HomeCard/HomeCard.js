import React from 'react';

const HomeCard = ({ img, text, des }) => {

    return (
        <div className="info-main" style={{ background: `url(${img})`, backgroundSize: "cover", backgroundPosition: "right", height: "200px" }}>
            <div className="img-info">
                <div><h5>{text}</h5>
                    <p>{des}</p></div>
            </div>
        </div>
    );
};

export default HomeCard;