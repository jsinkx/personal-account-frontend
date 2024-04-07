import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { LOGIN_MISSED_VALUE_MESSAGE } from '@shared/messages/login-messages'
import { UNKNOWN_ERROR_MESSAGE } from '@shared/messages/main-messages'
import Paths from '@shared/paths'
import Status from '@shared/status'

import isErrorWithMessage from '@utils/is-error-with-message'

import { selectAuthStatus } from '@redux/slices/auth/selectors'
import { fetchAuthLogin } from '@redux/slices/auth/slice'

import useAppDispatch from '@hooks/useAppDispatch'
import useAppSelector from '@hooks/useAppSelector'

import Button from '@components/Button'
import { CustomLink } from '@components/CustomLink'

import AuthNavigation from '../AuthNavigation'
import AuthSaveUser from '../AuthSaveUser'
import StyledAuth, { StyledErrorInStep, StyledInput } from '../styles'

type LoginProps = {} & React.ComponentPropsWithoutRef<'div'>

type FormLoginValues = {
	login: string
	email: string
	password: string
}

const Login: React.FC<LoginProps> = ({ ...props }) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const status = useAppSelector(selectAuthStatus)

	const [error, setError] = useState<null | string>(null)
	const [dontSaveUser, setDontSaveUser] = useState(false)

	const {
		register,
		handleSubmit: handleDirtySubmit,
		formState: { isValid },
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

			if ('token' in data)
				!dontSaveUser ? localStorage.setItem('token', data.token) : sessionStorage.setItem('token', data.token)

			navigate(Paths.profile.dynamic(data.id))
		} catch (_err) {
			const err = isErrorWithMessage(_err) ? _err.errorMessage : UNKNOWN_ERROR_MESSAGE

			setError(err)
		}
	}

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault()

		handleDirtySubmit(onSubmit)()
	}

	return (
		<StyledAuth {...props}>
			<AuthNavigation isLogin />
			<form onSubmit={handleSubmit}>
				<StyledInput
					{...register('login', {
						required: LOGIN_MISSED_VALUE_MESSAGE,
					})}
					placeholder="Логин или почта"
					autoComplete="login"
				/>
				<StyledInput
					{...register('password', { required: true })}
					type="password"
					placeholder="Пароль"
					autoComplete="password"
				/>
				{error !== null && <StyledErrorInStep className="auth--error">{error}</StyledErrorInStep>}
				<div className="auth__parameters">
					<CustomLink to={Paths.forgotPassword} className="auth--forgot-password">
						Забыли пароль ?
					</CustomLink>
					<AuthSaveUser
						saveUserIsChecked={dontSaveUser}
						setSaveUserIsChecked={setDontSaveUser}
						disabled={status === Status.LOADING}
					/>
				</div>
				<Button disabled={isDisabledButton} type="submit" width="100%" height="45px">
					Войти
				</Button>
			</form>
		</StyledAuth>
	)
}

export default Login
