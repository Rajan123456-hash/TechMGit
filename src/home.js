
import React from "react";

export default function Home() {

  const [list,setlist]=React.useState([]);
  const [formdata,setformdata]=React.useState({
    fname:"",
    lname:"",
    gender:"",
    country:"",
    address:""
  })

  React.useEffect(()=>{
    // const data=localStorage.getItem("userlist") !==""?localStorage.getItem("userlist"):[]
    // setlist(data)
    // console.log("getlocaldata",data)
  })

  const handleform=(event)=>{
    event.preventDefault();
    alert("submited")
    setlist([...list,formdata])
    console.log("list data",list)
    // localStorage.setItem("userlist",list)
  }
    return (
      <div className="row">
        <div className="col-md-4 col-sm-12 col-12 offset-md-1">
        <form onSubmit={(event)=>handleform(event)}>
      <div class="form-group">
        <label for="exampleInputEmail1">First Name</label>
        <input type="text" class="form-control"  onChange={(e)=>setformdata({...formdata,fname:e.target.value})}  placeholder="Enter email" /> 
                 
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Last Name</label>
        <input type="text" class="form-control"  onChange={(e)=>setformdata({...formdata,lname:e.target.value})} placeholder="Enter email" /> 
       
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Gender</label>
        <input type="text" class="form-control"  placeholder="Enter email" onChange={(e)=>setformdata({...formdata,gender:e.target.value})} /> 
       
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Address</label>
        <input type="text" class="form-control"  placeholder="Enter email" onChange={(e)=>setformdata({...formdata,address:e.target.value})}/> 
       
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Country</label>
        <input type="text" class="form-control"  placeholder="Enter email" onChange={(e)=>setformdata({...formdata,country:e.target.value})}/> 
       
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
        </div>
          <div className="col-md-6 col-12 offset-md-1">
            <table className="table">
                <thead>
                  <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Gender</th>
                    <th>Country</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((item,index)=>{
                      return(
                        <tr>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.gender}</td>
                        <td>{item.country}</td>
                        <td>{item.address}</td>
                        
                      </tr>
                      )
                  })}
                 
                </tbody>
            </table>
          </div>
      </div>
    );
  }