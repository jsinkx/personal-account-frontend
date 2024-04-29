import React from 'react'

import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

type AuthSaveUserProps = {
	saveUserIsChecked: boolean
	setSaveUserIsChecked: React.Dispatch<React.SetStateAction<boolean>>
	disabled?: boolean
}

const AuthSaveUser: React.FC<AuthSaveUserProps> = ({ saveUserIsChecked, setSaveUserIsChecked, disabled }) => {
	return (
		<span className="is-save-user">
			<FormGroup>
				<FormControlLabel
					control={
						<Checkbox
							checked={saveUserIsChecked}
							onChange={() => setSaveUserIsChecked((p) => !p)}
							disabled={disabled}
							size="small"
							className="MUI-checkbox"
						/>
					}
					label="Не запоминать пользователя ?"
				/>
			</FormGroup>
		</span>
	)
}

export default AuthSaveUser
