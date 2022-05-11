export type Action = {type: "ADD_TOKEN"; payload: string}; //primeira informação é a ação e a segunda o tipo de informação que ela carrega

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token,
});