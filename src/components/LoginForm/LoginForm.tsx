import { useContext, useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { OnlineShopContext } from '../../context/OnlineShopContext';
import { users } from '../../data/users';
import './LoginForm.scss'

const ACCESS_TOKEN_EXAMPLE = '3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZC'

const LoginForm = () => {
  const { setCookie, dispatchUser } = useContext(OnlineShopContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const [showError, setShowError] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const enteredUser = users.find((user) => user.email === data.email);
    if (enteredUser && enteredUser.password === data.password) {
      dispatchUser({
        type: "CHANGE_USER",
        payload: { email: data.email, password: data.password },
      });
      navigate("/")
      setCookie('access-token', ACCESS_TOKEN_EXAMPLE, { secure: true, sameSite: 'none' })
    } else {
      setShowError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='loginForm'>
      <input type='email' placeholder='Twój adres e-mail' {...register('email', { required: true, onChange: () => setShowError(false) })} />
      {errors.email && <span>To pole jest wymagane</span>}
      <input type='password' placeholder='Hasło (przynajmniej 3 znaki)' {...register('password', { required: 'To pole jest wymagane', minLength: { value: 3, message: 'Podałeś za krótkie hasło' }, onChange: () => setShowError(false) })} />
      {errors.password && <span>{errors.password.message?.toString()}</span>}
      {showError && <span className='loginForm__error'>Błędne dane logowania</span>}
      <button type='submit' className='loginForm__button'>Zaloguj się</button>
    </form>
  )
}

export default LoginForm