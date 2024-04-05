import React from 'react'

import Paths from '@shared/paths'

import { CustomLink } from '@components/CustomLink'

import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

type AuthServiceAgreeProps = {
	agreeIsChecked: boolean
	setAgreeIsChecked: React.Dispatch<React.SetStateAction<boolean>>
	disabled?: boolean
}

const AuthServiceAgree: React.FC<AuthServiceAgreeProps> = ({
	agreeIsChecked,
	setAgreeIsChecked,
	disabled,
}) => {
	return (
		<span className="auth--is-agree">
			<FormGroup>
				<FormControlLabel
					control={
						<Checkbox
							checked={agreeIsChecked}
							onChange={() => setAgreeIsChecked((p) => !p)}
							disabled={disabled}
							size="small"
							className="auth__MUI-checkbox"
						/>
					}
					label={
						<>
							Согласны с
							<CustomLink to={Paths.termsAndConditions} target="_blank" className="auth--is-agree__navlink">
								правилами и условиями
							</CustomLink>
						</>
					}
				/>
			</FormGroup>
		</span>
	)
}

export default AuthServiceAgree
