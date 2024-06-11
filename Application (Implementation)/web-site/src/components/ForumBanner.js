import React from 'react';

const ForumBanner = ({ imgUrl, heading, subheading }) => {
    return (
        <div className="forum-banner" style={{ position: "relative", textAlign: "center" }}>
            <img src={imgUrl || "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg"} alt="Forum Banner" className="banner-image" style={{ width: "100%", height: "auto" }} />
            <div className="banner-text" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <h1 className="banner-heading" style={{ fontFamily: "Arial, sans-serif", fontSize: "48px", fontWeight: "bold" }}>{heading}</h1>
                <h2 className="banner-sub" style={{ fontStyle: "italic" }}>{subheading}</h2>
            </div>
        </div>
    );
}

export default ForumBanner;
