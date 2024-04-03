import React from 'react'

import Paths from '../../shared/paths'

import { CustomLink } from '../CustomLink'

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
			<input
				type="checkbox"
				checked={agreeIsChecked}
				onChange={() => setAgreeIsChecked((p) => !p)}
				disabled={disabled}
			/>
			Согласны с
			<CustomLink to={Paths.termsAndConditions} target="_blank" className="auth--is-agree__navlink">
				правилами и условиями
			</CustomLink>
		</span>
	)
}

export default AuthServiceAgree
