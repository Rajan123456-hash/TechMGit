const initialstate=0;
const incrDecre=(state=initialstate,action)=>{

    switch(action.type){
        case "INCREMENT":return state+1;
        case "DECREMENT":return state-1;
        default: return state;
    }

}

export default incrDecre;