import React from 'react'


export default (props, {store}) => {

function handleCheck(){
    console.log('checked')
}

return (
    <div>
    <form className='mt-5' onSubmit={fields=>props.updateEntry(fields)}>
{/* {console.log(props)} */}
              {/* Name Row */}
              <div className="form-group row">
                <label  className="col-sm-2 col-form-label"> Name : </label>
                <input 
                name='Name' 
                value={props.Name} 
                className="col-sm-8" 
                type="text"
                onChange={e=>props.grabValue(e)}/>
              </div>
              
              {/* Email Row */}
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" > E-mail Id : </label>
                <input 
                className="col-sm-8" 
                value={props.email} 
                type="email" 
                name="email" 
                onChange={e=>props.grabValue(e)}/>
              </div>
              
              {/* Phone Row */}
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" > Phone : </label>
                <input 
                className="col-sm-8" 
                type="number" 
                value={props.phone} 
                name="phone"
                onChange={e=>props.grabValue(e)} />
              </div>
              
              {/* Hobby Row */}
              <div className="form-group row">
              <label className="col-sm-6 col-form-label">Select any Hobby / Hobbies : </label>
                <div className="form-check form-check-inline">
                <input 
                className="form-check-input" 
                type="checkbox"  
                id="inlineCheckbox1"
                onChange={handleCheck}
                 />
                
                <label className="form-check-label" > Cricket </label>
                 </div>

                <div className="form-check form-check-inline">
                  <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="inlineCheckbox2" 
                  />
                  
                  <label className="form-check-label" > Football </label>
                </div>

                <div className="form-check form-check-inline">
                  <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="inlineCheckbox2" 
                  />
                  
                  <label className="form-check-label" > Dance </label>
                </div>

              </div>
              
              
              <input id='formBtn' type="submit" className='btn btn-light'/>
            </form>
    </div>
  )
}
