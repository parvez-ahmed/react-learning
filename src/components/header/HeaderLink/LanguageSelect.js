import React from 'react'
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function LanguageSelect() {
    return (
        <div className="LanguageSelect mr10">
            <LanguageIcon className="mr5"/>
            <span>English</span>
            <ExpandMoreIcon/>
        </div>
    )
}

export default LanguageSelect
