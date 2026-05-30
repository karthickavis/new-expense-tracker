
export type ExpenseData={
    id:number;
    title:string;
    category:string;
    amount:number;
    date:string;
}
export type StateData={
    expenses:ExpenseData[]
}

export type Action=
|{
    type:"ADD_EXPENSE";
    payload:ExpenseData;
}
|{
    type:"DELETE_EXPENSE";
    payload:number;
}
|{
    type:"EDIT_EXPENSE";
    payload:ExpenseData;
}
 