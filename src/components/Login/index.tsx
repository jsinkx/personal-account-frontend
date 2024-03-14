import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Paths from '../../shared/paths'
import Status from '../../shared/status'

import isErrorWithMessage from '../../utils/is-error-with-message'

import { selectAuthData, selectAuthStatus } from '../../redux/slices/auth/selectors'
import { fetchAuthLogin } from '../../redux/slices/auth/slice'

import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'

import Button from '../Button'
import CustomNavLink from '../CustomLink'
import Error from '../Error'
import Logo from '../Logo'

import LoginNavigation from './LoginNavigation'
import StyledLogin, { StyledErrorInStep, StyledInput } from './styles'

type LoginProps = {} & React.ComponentPropsWithoutRef<'div'>

type FormLoginValues = {
	login: string
	email: string
	password: string
}

const Login: React.FC<LoginProps> = ({ ...props }) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const authData = useAppSelector(selectAuthData)
	const status = useAppSelector(selectAuthStatus)

	const [error, setError] = useState<null | string>(null)

	const isAuth = !!authData

	useEffect(() => {
		if (isAuth) {
			navigate(Paths.profile.dynamic(authData.id))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth, navigate])

	const {
		register,
		handleSubmit: handleDirtySubmit,
		formState: { isValid, errors },
	} = useForm<FormLoginValues>({
		mode: 'onChange',
		defaultValues: {
			login: '',
			password: '',
		},
	})

	const isDisabledButton = status === Status.LOADING || !isValid

	const onSubmit: SubmitHandler<FormLoginValues> = async (values) => {
		const { login, password } = values
		const loginBody = {
			login,
			password,
		}

		try {
			const data = await dispatch(fetchAuthLogin(loginBody)).unwrap()

			// TODO: FIX: throwing error

			if ('token' in data) {
				localStorage.setItem('token', data.token)

				navigate(Paths.profile.dynamic(data.id))
			} else throw ''
		} catch (_err) {
			const err = isErrorWithMessage(_err) ? _err.errorMessage : 'Произошла неизвестная ошибка'

			setError(err)
		}
	}

	// FIX: NEED FAST PERFORMANCE BUG FIX, BAD RENDER ON CHANGE VALUES !!!
	// FIX: After success registration and redirect to profile page, got error https://github.com/facebook/react/issues/18178

	// Handlers

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault()
		handleDirtySubmit(onSubmit)()
	}

	return (
		<StyledLogin {...props}>
			<CustomNavLink className="header__logo" to={Paths.home}>
				<Logo />
			</CustomNavLink>
			<LoginNavigation />
			<form onSubmit={handleSubmit}>
				<StyledInput
					{...register('login', {
						required: 'Введите логин или почту',
					})}
					placeholder="Логин или почта"
					autoComplete="login"
					height="45px"
				/>
				{errors.password?.message && <StyledErrorInStep> {errors.password.message} </StyledErrorInStep>}
				<StyledInput
					{...register('password', { required: 'Введите пароль' })}
					type="password"
					placeholder="Пароль"
					autoComplete="new-password"
					height="45px"
				/>
				{error !== null && <Error className="login--error">{error}</Error>}
				<Button disabled={isDisabledButton} type="submit" width="100%" height="45px">
					Войти
				</Button>
			</form>
		</StyledLogin>
	)
}

export default Login
