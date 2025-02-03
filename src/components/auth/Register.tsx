'use client';
import InputSelectForm from '@/components/inputs/InputSelectForm';
import InputTextForm from '@/components/inputs/InputTextForm';
import {
  emailRegex,
  nameRegex,
  passwordRegex,
  phoneRegex,
  usernameRegex,
} from '@/shared/utils/regex';
import { useState } from 'react';

const Register = () => {


  const options = [
    { value: 'client', label: 'Cliente' },
    { value: 'admin', label: 'Admin' },
  ];



  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [role, setRole] = useState('');

  const [errorName, setErrorName] = useState('');
  const [errorSurname, setErrorSurname] = useState('');
  const [errorUsername, setErrorUsername] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [errorBirthdate, setErrorBirthdate] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorPasswordRepeat, setErrorPasswordRepeat] = useState('');
  const [errorRole, setErrorRole] = useState('');



  const validateRegister = (): boolean => {
    const errorName = nameRegex(name);
    const errorSurname = nameRegex(surname);
    const errorUsername = usernameRegex(username);
    const errorRole = role === '' ? 'Debes seleccionar una opción' : '';
    const errorBirthdate = !birthdate
      ? 'La fecha de nacimiento es obligatoria'
      : '';
    const errorEmail = emailRegex(email);
    const errorPassword = passwordRegex(password);
    const errorPasswordRepeat =
      password !== passwordRepeat ? 'Las contraseñas no coinciden' : '';

    setErrorName(errorName);
    setErrorSurname(errorSurname);
    setErrorUsername(errorUsername);
    setErrorBirthdate(errorBirthdate);
    setErrorEmail(errorEmail);
    setErrorPassword(errorPassword);
    setErrorPasswordRepeat(errorPasswordRepeat);
    setErrorRole(errorRole);


    if (role === 'client') {
      const errorPhone = phoneRegex(phone);
      setErrorPhone(errorPhone);
      if (errorPhone) {
        return false;
      }
    }

    if (
      errorName ||
      errorSurname ||
      errorUsername ||
      errorEmail ||
      errorPassword ||
      errorPasswordRepeat ||
      errorRole
    ) {
      return false;
    }
    return true;
  };

  const handleRegister = () => {
    if (validateRegister()) {
      console.log('Registrando');
    }
  };

  return (
    <div className="flex flex-col gap-4 w-1/2 mx-auto">
      <div className="flex gap-4">
        <div className="w-2/5">
          <InputTextForm
            label="Nombre"
            type="text"
            id="nameInput"
            placeholder="Nombre"
            data={name}
            onChange={setName}
            error={errorName}
          />
        </div>
        <div className="w-3/5">
          <InputTextForm
            label="Apellidos"
            type="text"
            id="surnameInput"
            placeholder="Apellidos"
            data={surname}
            onChange={setSurname}
            error={errorSurname}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-3/5">
          <InputTextForm
            label="Nombre de usuario"
            type="text"
            id="usernameInput"
            placeholder="ejemplo123"
            data={username}
            onChange={setUsername}
            error={errorUsername}
          />
        </div>
        <div className="w-2/5">
          <InputSelectForm
            label="Selecciona una opción"
            id="mySelect"
            options={options}
            data={role}
            onChange={setRole}
            error={errorRole}
            placeholder="Elige una opción..."
          />
        </div>
      </div>
      {role === 'client' ? <div className="flex gap-4">
        <div className="w-full">
          <InputTextForm
            label="Teléfono"
            type="number"
            id="phoneInput"
            placeholder="654321123"
            data={phone}
            onChange={setPhone}
            error={errorPhone}
          />
        </div>
      </div> : null}

      <div className="flex gap-4">
        <div className="w-3/5">
          <InputTextForm
            label="Email"
            type="email"
            id="emailInput"
            placeholder="ejemplo123@email.com"
            data={email}
            onChange={setEmail}
            error={errorEmail}
          />
        </div>
        <div className="w-2/5">
          <InputTextForm
            label="Fecha de nacimiento"
            type="date"
            id="birthInput"
            placeholder=""
            data={birthdate}
            onChange={setBirthdate}
            error={errorBirthdate}
          />
        </div>
      </div>
      <div className="w-full">
        <InputTextForm
          label="Contraseña"
          type="password"
          id="passwordInput"
          placeholder="contraseña1234"
          data={password}
          onChange={setPassword}
          error={errorPassword}
        />
      </div>
      <div className="w-full">
        <InputTextForm
          label="Repetir contraseña"
          type="password"
          id="passwordRepeatInput"
          placeholder="contraseña1234"
          data={passwordRepeat}
          onChange={setPasswordRepeat}
          error={errorPasswordRepeat}
        />
      </div>
      <button
        className="bg-white text-color3 p-1.5 rounded-lg border-2 border-white hover:bg-color1 hover:text-white transition duration-300 text-ms"
        onClick={handleRegister}
      >
        Registrarse
      </button>
    </div>
  );
};

export default Register;
