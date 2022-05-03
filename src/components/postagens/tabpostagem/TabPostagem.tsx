import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='appBar'>
          <Tabs className="textoApp" centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre mim" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel className="fundo" value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel className="fundo" value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="tituloApp">Sobre mim</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Atualmente estudo na Universidade Federal do ABC, matriculada no Bacharelado Interdisciplinar de Ciência e Tecnologia com foco para o Pós-BI em Neurociência e Computação, meu objetivo é integralizar as duas áreas e trabalhar com o desenvolvimento de novas tecnológicas relacionadas a neurociência computacional. :)</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;