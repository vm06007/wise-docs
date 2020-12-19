import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import {useSelector} from 'react-redux';
import ENDOC from './en'
import ZHDOC from './zh'


function DocsMain () {
    const {lang} = useSelector(state => state.app);
    return (
        <>
            {lang === 'zh'?<ZHDOC/>:<ENDOC/>}
        </>
    );
}

export default DocsMain;

