import React from 'react';
import './aside.css'

function Aside() {
    return (
        <aside>
            <div>
                <div className="asidetheme">
                    <img src="https://static.platzi.com/media/blog/unnamed-8089fc33-6322-4bd3-85de-1da032257d4b.png" alt="hola"/>
                </div>
                <div className="asidetheme">
                    <img src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-twitch-square2-512.png" alt="hola"/>
                </div>
                <div className="asidetheme">
                    <img src="logo192.png" alt="hola"/>
                </div>
                <div className="asidetheme">
                    <img src="https://image.flaticon.com/icons/png/512/51/51989.png" alt="hola"/>
                </div>
                <div className="asidetheme">
                    <img src="https://cryptologos.cc/logos/uniswap-uni-logo.png" alt="hola"/>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-right" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="7 7 12 12 7 17" />
                <polyline points="13 7 18 12 13 17" />
            </svg>
        </aside>
    )
}

export default Aside;
