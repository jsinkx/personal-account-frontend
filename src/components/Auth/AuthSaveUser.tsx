import React from 'react'

type AuthSaveUserProps = {
	saveUserIsChecked: boolean
	setSaveUserIsChecked: React.Dispatch<React.SetStateAction<boolean>>
	disabled?: boolean
}

const AuthSaveUser: React.FC<AuthSaveUserProps> = ({ saveUserIsChecked, setSaveUserIsChecked, disabled }) => {
	return (
		<span className="auth--is-save-user">
			<input
				type="checkbox"
				checked={saveUserIsChecked}
				onChange={() => setSaveUserIsChecked((p) => !p)}
				disabled={disabled}
			/>
			Запомнить пользователя
		</span>
	)
}

export default AuthSaveUser
