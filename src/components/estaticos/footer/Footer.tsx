import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';

import './Footer.css';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';

function Footer () {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token != ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className='box1'>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h6" align="center" className='textos'>Siga-me nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://www.github.com/santosnicolle" target="_blank">
                    <GitHubIcon className='redes' />
                    </a>
                    <a href="https://www.instagram.com/stringsantos" target="_blank">
                        <InstagramIcon className='redes' />
                    </a>
                    <a href="https://www.linkedin.com/in/santosnicolle" target="_blank">
                        <LinkedInIcon className='redes' />
                    </a>
                </Box>
            </Box>
            <Box className='box2'>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" className='textos'> © 2022 Copyright: Nicolle Santos</Typography>
                </Box>
                <Box>
                    <a target="_blank" href="https://santosnicolle.herokuapp.com">
                        <Typography variant="subtitle2" className='textos' align="center">santosnicolle.herokuapp.com</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>

    }
    
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;