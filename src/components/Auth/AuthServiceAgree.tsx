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
		<span className="is-agree">
			<FormGroup>
				<FormControlLabel
					control={
						<Checkbox
							checked={agreeIsChecked}
							onChange={() => setAgreeIsChecked((p) => !p)}
							disabled={disabled}
							size="small"
							className="MUI-checkbox"
						/>
					}
					label={
						<span>
							Согласны с
							<CustomLink to={Paths.termsAndConditions} target="_blank" className="is-agree__navlink">
								правилами и условиями
							</CustomLink>
						</span>
					}
				/>
			</FormGroup>
		</span>
	)
}

export default AuthServiceAgree
