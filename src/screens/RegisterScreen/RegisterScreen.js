import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { StyledDiv, StyledWrapper } from '../LoginScreen/LoginScreen.styles';
import { Typography } from '../../components/Typography';
import { StyledForm, StyledFormGroup } from '../HomeScreen/HomeScreen.styles';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useForm } from '../../hooks/useForm';

import { Image } from '../../components/Image'
import imageBackground from "../../assets/img/bg-watercolor.jpg";
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const [ formValues, handleInputChange ] = useForm({
    name: "Hugo Mendoza",
    email: "hugo.mendoza@gmail.com",
    password: "12356789",
    password2: "12356789"
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch( startRegisterWithEmailPasswordName(email, password, name) );
  };

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
          Regístrate
        </Typography>

        <StyledForm onSubmit={handleRegister}>
          <StyledFormGroup>
            <Label value={`Usuario`}></Label>
            <Input
              type="text"
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
            />
          </StyledFormGroup>
          <StyledFormGroup className="my-4">
            <Label value={`Correo electrónico`}></Label>
            <Input
              type="text"
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <Label value={`Contraseña`}></Label>
            <Input
              type="password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={handleInputChange}
            />
          </StyledFormGroup>
          <StyledFormGroup className="my-4">
            <Label value={`Confirma tu contraseña`}></Label>
            <Input
              type="password"
              name="password2"
              autoComplete="off"
              value={password2}
              onChange={handleInputChange}
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <Button
              type="submit"
              label="Regístrate"
              className="w-full"
            >
            </Button>
          </StyledFormGroup>
          <StyledFormGroup>
            <Typography
              variant="link"
            >
              ¿Ya tienes una cuenta? 
              <Link
                to="/"
                className="ml-1 font-sansBold hover:underline"
              >
                Ingresa aquí
              </Link>
            </Typography>
          </StyledFormGroup>
        </StyledForm>
      </StyledDiv>
    </StyledWrapper>
  )
}
