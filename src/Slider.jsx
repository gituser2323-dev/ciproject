import React from 'react'
import './slider.css'

export const Slider = () => {
    return (
        <>
            <section className="logoMarqueeSection">

                <div className="container" id="logoMarqueeSection">
                    <div className="default-content-container flex items-center">
                        <div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
                            <div className="marquee" style={{ animationDuration: '57s' }}>
                                <img src="Image/accenture.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxWidth: 'none' }} />
                                <img src="Image/amazon.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/Citi_logo.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/JP_MOr.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/KPMG.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/Myntra.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />

                                {/* <img src="Image/polygon.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/Pwc.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/Target.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/TechMH.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/uber.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/Vedantu.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/upgrad-logo.svg" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/unitedlex.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/novartis.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} /> */}
                                    
                            </div>
                            {/* <div className="marquee" style={{ animationDuration: '57s' }}>
                                 <img src="Image/polygon.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/Pwc.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/Target.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/TechMH.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/uber.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/Vedantu.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/upgrad-logo.svg" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/unitedlex.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                                <img src="Image/novartis.png" title=""
                                    className="marqueelogo" alt='' style={{ width: 'auto', maxwidth: 'none' }} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
