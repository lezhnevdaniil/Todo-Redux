export interface defaultStateProps {
    //lists: [{body: string, id: number, title: string, userId: number | string}] | [];
    lists: any[];
    field: null | number;
};

export enum actionNameTypes {
    ADD_FIELD = "ADD_FIELD",
    ADD_LIST = "ADD_LIST",
    DELETE_LIST = "DELETE_LIST",
    CHANGE_LIST = "CHANGE_LIST",
    ALL_LISTS = "ALL_LISTS",
}

interface actionAddFieldProps {
    type: actionNameTypes.ADD_FIELD;
    payload: number
};

interface actionAddListProps {
    type: actionNameTypes.ADD_LIST;
    //payload: [{ body: string, id: number, title: string, userId: number | string }];
    payload: any[];
};

interface actionDeleteListProps {
    type: actionNameTypes.DELETE_LIST;
    payload: number
};

interface actionChangeListProps {
    type: actionNameTypes.CHANGE_LIST;
    //payload: { body: string; id: number; title: string; userId: number }
    payload: any[]
};

interface actionAllListProps {
    type: actionNameTypes.ALL_LISTS;
    //payload: [{ body: string; id: number; title: string; userId: number }]
    payload: any[]
};

export type actionProps = actionAddFieldProps | actionAddListProps | actionDeleteListProps | actionChangeListProps | actionAllListProps;
