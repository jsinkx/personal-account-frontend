import { useDispatch } from 'react-redux'

import type { AppDispatch } from '../redux/types'

const useAppDispatch: () => AppDispatch = useDispatch

export default useAppDispatch
