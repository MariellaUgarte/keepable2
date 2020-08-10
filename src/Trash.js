import React from 'react';
import TrashIcon from './TrashIcon'
import IconWrapper from './IconWrapper'

const Trash = props => {
    return (
        <IconWrapper onClick={props.onClick}>
            <TrashIcon/>
        </IconWrapper>
    );
}

export default Trash