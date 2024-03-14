import React from 'react'

import MainLayout from '../../layouts/MainLayout'

import StyledTermsAndConditionsPage from './styles'

const TermsAndConditionsPage: React.FC = () => {
	// TODO: Create normal terms and conditions with MD and get from backend

	return (
		<MainLayout
			title="Пользовательское соглашение"
			description="Согласие на обработку персональных данных и использование на платформе и в экосистеме WISH EDU "
		>
			<StyledTermsAndConditionsPage>
				<p>
					1. Данное Согласие дается на обработку персональных данных. как без использования средств автоматизации.
					так и с их использованием.
				</p>
				<p>2. Согласие дается на обработку следующих персональных данных Пользователя:</p>
				<p>3. Персональные данные. не являющиеся специальными или биометрическими.</p>
				<p>
					4. Цели обработки персональных данных указаны в п.4 Политики защиты персональной информации Пользователей
					сайта WISH EDU
				</p>
				<p>
					5. Основанием для обработки персональных данных являются: Ст. 24 Конституции Российской Федерации; ст.6
					Федерального закона №152-ФЗ «О персональных данных».
				</p>
				<p>
					6. В ходе обработки с персональными данными будут совершены следующие действия: сбор; запись;
					систематизация; накопление; хранение; уточнение (обновление. изменение); извлечение; использование;
					передачу (распространение. предоставление. доступ); обезличивание; блокирование; удаление; уничтожение.
				</p>
				<p>
					7. Передача персональных данных третьим лицам осуществляется на основании законодательства Российской
					Федерации. договора с участием субъекта персональных данных или с согласия субъекта персональных данных.
					Пользователь дает свое согласие на возможную передачу своих персональных данных третьим лицам.
				</p>
				<p>
					8. Персональные данные обрабатываются до окончания обработки. Так же обработка персональных данных может
					быть прекращена по запросу субъекта персональных данных. Срок или условие прекращения обработки
					персональных данных: прекращение деятельности Администрации сайта.
				</p>
				<p>
					9. Согласие дается. в том числе на возможную трансграничную передачу персональных данных и информационные
					(рекламные) оповещения. 10. Согласие может быть отозвано субъектом персональных данных или его
					представителем. путем направления письменного заявления Администрации сайта или его представителю по
					адресу. указанному в начале данного Согласия. 11. В случае отзыва субъектом персональных данных или его
					представителем согласия на обработку персональных данных Администрация сайта вправе продолжить обработку
					персональных данных без согласия субъекта персональных данных при наличии оснований. указанных в пунктах
					2 - 11 части 1 статьи 6. части 2 статьи 10 и части 2 статьи 11 Федерального закона №152-ФЗ «О
					персональных данных» от 26.06.2006 г.
				</p>
			</StyledTermsAndConditionsPage>
		</MainLayout>
	)
}

export default TermsAndConditionsPage