import posthog from "posthog-js"
import "./cookie.css"
import { useState } from "react";

   
function CookieBanner() {

    const [showBanner, setShowBanner] = useState(true);

    const acceptCookies = () => {
        posthog.opt_in_capturing();
        setShowBanner(false);
    }
    const declineCookies = () => {
        posthog.opt_in_capturing();
        setShowBanner(false);
    }


   

    return (
        <div className='box'>
            {showBanner && (
                <div className='co-description'>
                    <p>We use cookies to enhance your user experience by using our website, you agree to our use of cookies</p>
                    <button className='btn' onClick={acceptCookies}>Accept</button>
                    <button className='btn' onClick={declineCookies}>Accept</button>
                   
                </div>
            )}
        </div>
    )
}

export default CookieBanner