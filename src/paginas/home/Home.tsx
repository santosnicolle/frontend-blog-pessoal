import React from "react";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Button , Grid , Typography, Avatar} from '@material-ui/core';
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import './Home.css';

// Criando o corpo do nosso componente
// Nossos componentes são nada mais nada menos que funções

function Home(){

    return(
       
        <>
             <Grid container direction="row" justifyContent="center" alignItems="center" className="background">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={18} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo lado2">Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo2 lado2">Encontre postagens sobre programação, tecnologia e cultura pop nerd relacionadas aos meus gostos pessoais.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} alignContent="center" className="lado">
                    <img src="https://media.giphy.com/media/6aTiw13Zi8XruWOPU6/giphy.gif" alt="Abby-TurningRed"/>
                </Grid>
                <Grid xs={12} className="postagem">
                    {/* <TabPostagem /> */}
                </Grid>

                
                

            </Grid>
        </>
    );
}

export default Home;

{/* function Home() {
    return ( //aqui dentro posso colocar tudo que eu queirá, mas um componente só pode retornar 1 elemento
        <>
            <Paper>
                <Box p={2}>
                    <Box display="flex" justifyContent="flex-start">
                        <h1>Título</h1>
                        <img src='https://media.giphy.com/media/sEx9935mTBrXSWHByf/giphy.gif'
                            alt='urso vermelho chorando animação' style={{ width:"100%", height:"100%"}} />
                    </Box>
                    <Box display="flex" justifyContent="center" p={2}>
                        <Button variant="contained" color='primary'>Texto 1</Button>
                        <Button variant="contained" color='secondary'>Texto 2</Button>
                    </Box>
                </Box>
            </Paper>
        </> //caminhos abreviados com <></>
    );
}

{/* Exemplo utilizando Grid
    function Home() {
        return ( //aqui dentro posso colocar tudo que eu queirá, mas um componente só pode retornar 1 elemento
            <>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                        <Paper style={{ height: "100vh", background: "lightgrey" }}/>
                        viewport e height - altura da tela*
                    </Grid>
                    <Grid item container direction="column" xs={12} sm={4} spacing={2}>
                        <Grid item>
                            <Paper style={{ height: "49vh", background: "orange" }}/>
                        </Grid>
                        <Grid item>
                            <Paper style={{ height: "49vh", background: "green" }}/>
                        </Grid>
                    </Grid>
                    propriedades textuais com aspas duplas " ",
                    propriedades numéricas (a menos q necessário o valor e unidade fixos)
                    fazemos com chaves { }
                </Grid>

            </> //caminhos abreviados com <></>
        );

    } */}

