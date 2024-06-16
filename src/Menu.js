import * as React from 'react';
import * as ReactDom from 'react-dom';

function Menu({name="Stuff"}){

    return(
        <>
            <div>
                {name} Menu
            </div>

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    );
}

export default Menu;