import React, { useRef, useState } from 'react';

import {
  Container,
  Wrapper,
  CustomImage,
  Label,
  LoginButton,
  ButtonText,
} from './styles';

import TInput from '~/components/Input';
import logo from '~/assets/icons/logo.png';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <CustomImage source={logo} />
      <Wrapper>
        <Label>E-mail</Label>
        <TInput
          icon="envelope"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          placeholder="Digite seu e-mail"
          ref={emailRef}
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
      </Wrapper>
      <Wrapper>
        <Label>Senha</Label>
        <TInput
          icon="lock"
          returnKeyType="send"
          placeholder="Digite sua senha"
          secureTextEntry
          ref={passwordRef}
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={() => console.tron.log(email, password)}
        />
      </Wrapper>
      <LoginButton>
        <ButtonText>Login</ButtonText>
      </LoginButton>
    </Container>
  );
}
