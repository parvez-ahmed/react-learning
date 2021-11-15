import React from 'react'
import logo from '../../../assets/wizardlogo.jpg';

function BecomeMember() {
    return (
        <div className="BecomeMemberLinkContainer">
            <div className="BecomeMemberLinkContentContainer">
                <img src={logo} alt="not found"/>
                <div>
                    <div className="promoCard__text d-text14 is-fontBold">Become a Member</div>
                    <div className="promoCard__subtext d-text12">Additional 10% Off on stays</div>
                </div>
            </div>
        </div>
    )
}

export default BecomeMember
