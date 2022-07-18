export const increment=(payload)=>{
    return {
        type:"INCREMENT",
        payload:payload
    }
}

export const decrement=(payload)=>{
    return {
        type:"DECREMENT",
        payload:payload
    }
}
export const userlist=(payload)=>{
    return {
        type:"USERLIST",
        payload:payload
    }
}