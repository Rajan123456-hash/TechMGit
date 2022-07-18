import React from "react";
// import './getstyle.less';
// import './scss/mystyle.sass'
// import './scss/scssstyle.scss';


export default function () {
    const [data, setdata] = React.useState("")
    return (
        <div className="container px-0 py-2">
            <h1>Week 1</h1>
            <h4>Html5 Form input</h4>
            <div className="row">
                <div className="offset-md-4 col-md-4">
                <form>
      <div class="form-group">
        <label for="exampleInputEmail1">type text</label>
        <input type="text" class="form-control"   placeholder="input type text" required /> 
                 
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input type="email" class="form-control"   placeholder="Enter email" required /> 
       
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Select</label>
        <select className="form-control" name="" id="" required>
            <option value="1">option1</option>
            <option value="2">option2</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">number</label>
        <input type="number" class="form-control"  placeholder="number" /> 
       
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">color</label>
        <input type="color" class="form-control"  placeholder="color" /> 
       
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
      
                </div>
                <div className="col-md-12 px-0 pt-5">
                    <h2>List and Selectors, Css Box Model</h2>
                    <br/>
                    <h4>Lists</h4>
                    <ul className="class-selector" id="idselector">
                        <li className="first" >first elemet</li>
                        <li className="second">Second elemet</li>
                        <li className="third">Third Elemet</li>
                        <li className="fourth">Fourth Element</li>

                    </ul>
                    <h4>Active Selectors</h4>
                    <button> <a href="#" className="useselector">Click here</a></button>
                </div>

                <div className="col-md-12 col-12 px-0 mx-0 pt-3">
                  <h2>Responsive design , View port and Grid</h2>

                  <div className="row gridsystem ">
                      <div className="col-md-3 col-sm-4 col-6">
                          <div className="grideitems"></div>
                      </div>
                      <div className="col-md-3 col-sm-4 col-6">
                          <div className="grideitems"></div>
                      </div>
                      <div className="col-md-3 col-sm-4 col-6">
                          <div className="grideitems"></div>
                      </div>
                      <div className="col-md-3 col-sm-4 col-6">
                          <div className="grideitems"></div>
                      </div>
                      
                  </div>

                </div>
            </div>
            </div>
    )
}