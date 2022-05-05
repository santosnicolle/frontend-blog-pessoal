import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';
import Tema from '../../../models/Tema'
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Services';

function ListaTema() {

  let history = useNavigate();

  const [temas, setTemas] = useState<Tema[]>([])
  /*
    temas: [
      { id: 1, desc: "Tema1"},
      { id: 2, desc: "Tema2"} **essa é a listagem que o back-end nos proporcionava
                                um array de temas 
    ]
  */

  const [token, setToken] = useLocalStorage('token'); //garante acesso ao token armazenado no useLocalStorage

  useEffect(() => {
    if(token === ""){
      alert("Você precisa estar logado")
      history('/login') /* no vídeo da Gen history.push("/login") */
    }
  }, [token])

  async function getTemas(){
    await busca("/temas", setTemas, {
      headers: {
        "Authorization": token
      }
    })
  }

  useEffect(() => {
    getTemas()
  }, [temas.length])
    
    return (
    //   {/* 
    //     <>
    //       {
    //         temas.map((item) => {
    //           return (
    //             <h1>{ item.descricao}</h1>
    //           )
    //         })
    //       }
    //     </>
    // //  */}
      <>
        {
          temas.map( temas => (
              <Box m={2} >
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Tema
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Minha descrição
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Box display="flex" justifyContent="center" mb={1.5} >
        
                      <Link to={`/formularioTema/${temas.id}`} className="text-decorator-none">
                        <Box mx={1}>
                          <Button variant="contained" className="btnAtualizar1" size='small' color="primary" >
                            atualizar
                          </Button>
                        </Box>
                      </Link>
                      <Link to={`/deletarTema/${temas.id}`} className="text-decorator-none">
                        <Box mx={1}>
                          <Button variant="contained" size='small' className="btnDeletar1" color="secondary">
                            deletar
                          </Button>
                        </Box>
                      </Link>
                    </Box>
                  </CardActions>
                </Card>
              </Box>
              ))
            }
      </>
    );
  }
  
  
  export default ListaTema;