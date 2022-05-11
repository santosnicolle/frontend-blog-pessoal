import React, { ChangeEvent, useState, useEffect } from 'react';

import { Grid, Box, Typography, TextField, Button } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Services';

import './Login.css';
import UserLogin from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';

function Login() {

    let history = useNavigate(); //fazer com que a pessoa usuaria navegue na nossa aplicação
    const [token, setToken] = useState(''); //manipular o armazenamento interno do navegador
    //os hooks são utilizados para manipular os estados dos nossos componentes

    const dispatch = useDispatch();

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: "",
        senha: "",
        token: ""
    }) // o useState() é um hook

    // const userLogin = ""

    /*
        Imutabilidade indica que não posso alterar o valor de uma variavel diretamente nela
        variaveis do tipo state

        para atualizar esse tipo de função:

        setUserLogin("Nicolle")

    */

   function updateModel(e: ChangeEvent<HTMLInputElement>){ // definindo o evento
       setUserLogin({
          
        /* spread operator = operador para espalhar que permite que pegue todos os campos da nossa função login
           e atualize apenas o que for necessário
        */

          ...userLogin,

          /*
            o código entende dessa forma:
            id: 0,
            usuario: "",
            senha: "",
            token: ""
          */

          [e.target.name]: e.target.value
          // acessando o alvo do evento usuario: "fajfljadlsfç"
       })
   }

{/*    function logar(e: ChangeEvent<HTMLFormElement>){ // função disparada quando enviamos as informações
        e.preventDefault() // previne que faça o recarregamento da página para não perdermos os ideais de single page application
        console.log("UserLogin: " + Object.values(userLogin))
    }
*/}
        useEffect(() => {
            if(token != ''){ //hook focado em efeitos colaterais, só executa quando houve outra alteração na variável que ele observa
                dispatch(addToken(token));
                history('/home')
            }
        }, [token])

        async function logar (e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login('/usuarios/logar', userLogin, setToken)

                alert('Usuario logado com sucesso!');

            }catch(error){
                alert('Dados do usuário inconsistentes. Erro ao logar');
            }
   }

    return (
        <Grid container direction="row" justifyContent="center" alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={ logar }> {/* no vídeo da Gen: { onSubmit }*/}
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        
                        <TextField 
                            value = { userLogin.usuario }
                            onChange={ (e: ChangeEvent<HTMLInputElement>) => updateModel(e) }
                            id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        
                        <TextField 
                            value = { userLogin.senha }
                            onChange={ (e: ChangeEvent<HTMLInputElement>) => updateModel(e) }
                            id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        
                        <Box marginTop={2} textAlign='center'>
                                <Button className='botao1' type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to="/usuarios/cadastrar" className='text-decorator-none cadastro'>
                        <Typography variant='subtitle1' gutterBottom align='center'>Cadastre-se</Typography>
                        </Link>
                        
                    </Box>
                </Box>
            </Grid>

            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login;