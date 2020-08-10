import React from 'react';

const TrashIcon = props => {
    return (
        
            <svg width="17" height="18" viewBox="0 0 17 18" fill={props.color ? props.color : "#999B9E"} xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4583 1V0H5.20833V1H0V3H1.04167V16C1.04167 17.1 1.97917 18 3.125 18H13.5417C14.6875 18 15.625 17.1 15.625 16V3H16.6667V1H11.4583ZM13.5417 16H3.125V3H13.5417V16Z"/>
                <path d="M5.20837 5H7.29171V14H5.20837V5ZM9.37504 5H11.4584V14H9.37504V5Z"/>
            </svg>
    );
};

export default TrashIcon;