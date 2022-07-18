const initialstate=[];
const uselist=(state=initialstate,action)=>{

    switch(action.type){
        case "USERLIST":return {data:action.payload};
      
        default: return state
    }

}

export default uselist;