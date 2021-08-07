import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

import { Image } from '../../components/Image'
import { StyledDiv, StyledWrapper } from './LoginScreen.styles'

import { Typography } from '../../components/Typography';
import { StyledForm, StyledFormGroup } from '../HomeScreen/HomeScreen.styles';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonGoogle } from '../../components/ButtonGoogle';


import imageBackground from "../../assets/img/bg-watercolor.jpg";
import googleSignin from "../../assets/img/google-label.svg";
import { NavLink } from 'react-router-dom';

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange ] = useForm({
    email: "hugo.mendoza@gmail.com",
    password: "12356789"
  })

  const {email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch( startLoginEmailPassword(email, password))
  };

  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin() )
  }

  return (
    <StyledWrapper>
      
      <Image
        imageSrc={imageBackground}
        alt="Imagen de fondo"
        className="w-full h-full absolute object-cover object-center"
      />

      <StyledDiv>
        <Typography
          variant="h3"
          className="text-center mb-6"
        >
          Ingresa a tu cuenta
        </Typography>

        <StyledForm onSubmit={ handleLogin } >
          <StyledFormGroup>
            <Label value={`Usuario`}></Label>
            <Input
              type="email"
              name="email"
              value={ email }
              onChange={ handleInputChange }
            />
          </StyledFormGroup>
          <StyledFormGroup className="my-4">
            <Label value={`Contraseña`}></Label>
            <Input
              type="password"
              name="password"
              value={ password }
              onChange={ handleInputChange }
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <Button
              type="submit"
              label="Ingresa"
              className="w-full"
            >
            </Button>
          </StyledFormGroup>
        </StyledForm>
        <StyledFormGroup>
          <ButtonGoogle
            icon={<Image imageSrc={googleSignin} />}
            label={`Inicia sesión con Google`}
            className="mt-4 w-full"
            onClick={ handleGoogleLogin }
          >
          </ButtonGoogle>
        </StyledFormGroup>
        <StyledFormGroup>
          <Typography
            variant="link"
          >
            ¿No tienes una cuenta? 
            <NavLink
              exact
              to="/auth/registro"
              className="ml-1 font-sansBold hover:underline"
            >
              Regístrate
            </NavLink>
          </Typography>
        </StyledFormGroup>
      </StyledDiv>
    </StyledWrapper>
  )
}
