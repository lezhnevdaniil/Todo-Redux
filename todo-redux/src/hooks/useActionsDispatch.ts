import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as listActionCreators from "../store/asyncActions/customers"

export const useActionsDispatch = () => {
	const dispatch = useDispatch()
	return bindActionCreators(listActionCreators, dispatch)
}