import { actionNameTypes } from "constantAction/constantAction";

export interface defaultStateProps {
	//lists: [{ body: string, id: number, title: string, userId: number | string }] | [];
	lists: any[];
	field: null | number;
};

interface actionAddFieldProps {
	type: actionNameTypes.ADD_FIELD;
	payload: number
};

interface actionAddListProps {
	type: actionNameTypes.ADD_LIST;
	payload: [{ body: string, id: number, title: string, userId: number | string }];
};

interface actionDeleteListProps {
	type: actionNameTypes.DELETE_LIST;
	payload: number
};

interface actionChangeListProps {
	type: actionNameTypes.CHANGE_LIST;
	payload: { body: string; id: number; title: string; userId: number }
};

interface actionAllListProps {
	type: actionNameTypes.ALL_LISTS;
	payload: [{ body: string; id: number; title: string; userId: number }] | []
};

export type actionProps = actionAddFieldProps | actionAddListProps | actionDeleteListProps | actionChangeListProps | actionAllListProps;