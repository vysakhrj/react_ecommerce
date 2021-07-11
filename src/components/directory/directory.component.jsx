import React from 'react';
import MenuItem from '../menu-item/menu-item.component';


import './directory.styles.scss'

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://manofmany.com/wp-content/uploads/2017/10/Guide-to-Wearing-Mens-Hats-With-Suits-20-1200x800.jpg',
                    id:1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/515A%2BAqj57L._AC_SY780_.jpg',
                    id:2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://gearmoose.com/wp-content/uploads/2017/04/best-all-white-sneakers-for-men.jpg',
                    
                    id:3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://www.punjabidesigners.com/wp-content/uploads/2020/08/formal-dress-boutique-online.jpg',
                    size:'large',
                    id:4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/cvpntL1/mens.png',
                    size:'large',
                    id:5
                },

            ]
        }
    }

    render(){
        return (
            <div className='directory-menu'>
        {this.state.sections.map(({title,imageUrl,id,size})=>(
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
           
        </div>
        )
    }

    
}

export default Directory;