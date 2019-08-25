import React, { Component } from 'react'

export default class Entries extends Component {
    render() {
        return (
            <div>
                <div>              
                    <span className='display-4'>Entries</span> 
                </div>

                <ul>
                    <li>
                        {/* {console.log(this.props.entryList)} */}
                    </li>
                    {/* {console.log('add list')} */}
                </ul>
            </div>
        )
    }
}
