import React from 'react'
import CookieConsent from 'react-cookie-consent'


export const CookieBanner = () => {
  return (
    <div className='cookie'>
            <CookieConsent 
            debug={false}
            location='bottom'
            style={{zIndex:"50000",}}
            expires={365}
            buttonStyle={{
               padding:"5px",
               zindex:"500",
            }}
            >
                This site uses cookies. See our privacy policy for more
            </CookieConsent>

    </div>
  )
}

export default CookieBanner