import React from 'react'

type AuthSaveUserProps = {
	saveUserIsChecked: boolean
	setSaveUserIsChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthSaveUser: React.FC<AuthSaveUserProps> = ({ saveUserIsChecked, setSaveUserIsChecked }) => {
	return (
		<span className="auth--is-save-user">
			<input type="checkbox" checked={saveUserIsChecked} onChange={() => setSaveUserIsChecked((p) => !p)} />
			Запомнить пользователя
		</span>
	)
}

export default AuthSaveUser
