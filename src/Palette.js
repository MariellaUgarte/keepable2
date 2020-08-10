import React from 'react';
import PaletteIcon from './PaletteIcon';
import IconWrapper from './IconWrapper';

const Palette = props => {
    return (
        <IconWrapper onClick={props.onClick}>
            <PaletteIcon/>
        </IconWrapper>
    );
}

export default Palette