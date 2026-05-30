
import type { StateData,Action } from "../types/expenseTypes";


export const expenseReducer=(state:StateData,action:Action):StateData=>{
    switch(action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses:[...state.expenses,action.payload]
            };

            case "DELETE_EXPENSE":
                return {
                    ...state,
                    expenses:state.expenses.filter(
                        (expense)=>expense.id!==action.payload
                    ),
                };

                case "EDIT_EXPENSE":
                    return {
        ...state,
        expenses: state.expenses.map((item) =>
            item.id === action.payload.id
                ?{...item,...action.payload}:item 
        ),
    };

                default:
                    return state;

    }

}