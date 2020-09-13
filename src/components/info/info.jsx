import React from 'react';

import style from './info.css';

const Info = () => (
    <div className="info">
        <h3>RADNO VRIJEME</h3>
        <div className="info-div">Parni dani</div>
        <div>08:00 - 14:00</div>
        <div className="info-div">Neparni dani</div>
        <div>13:00 - 19:00</div>
        <div className="info-office">Ordinacija dr. Mirta Domjanić</div>
    </div>
);

export default Info;