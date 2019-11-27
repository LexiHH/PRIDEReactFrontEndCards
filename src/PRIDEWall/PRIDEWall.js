import React from 'react';
import ShowAllThisMonth from './showAll';
import Achievements from './Achievements';

export default class PRIDEWall extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <ShowAllThisMonth/>
                </div>
                <div>
                    <Achievements/>
                </div>
            </div>
        )
    }
}