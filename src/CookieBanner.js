import posthog from "posthog-js"
import { useState } from "react";

   
function CookieBanner() {

    const [showBanner, setShowBanner] = useState(true);

    const acceptCookies = () => {
        posthog.opt_in_capturing();
        setShowBanner(false);
    }

    const declineCookies = () => {
        posthog.opt_out_capturing();
        setShowBanner(false);
    }

    return (
        <div>
            {showBanner && (
                <div>
                    <p>We use cookies to make our product better, please accept</p>
                    <button onClick={acceptCookies}>Accept</button>
                    <button onClick={declineCookies}>Decline</button>
                </div>
            )}
        </div>
    )
}

export default CookieBanner