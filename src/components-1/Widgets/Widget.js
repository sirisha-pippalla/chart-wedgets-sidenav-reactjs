import {React, useState} from 'react';
import Card from 'react-bootstrap/Card';

import './Widget.css';

const Widget = ({ data }) => {
    const [widgetData, setWidgetData] = useState([{
        name: 'Customers',
        // class: 'fa fa-users',
        img: 'https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png',
        count: 123456,
        color: 'green'
      },
    {
      name: 'Drivers',
    //   class: 'fa fa-car',
    img: 'https://cdn-icons-png.flaticon.com/128/4900/4900915.png',
      count: 5000,
      color: 'blue'
    },
    {
      name: 'Orders In Progress',
    //   class: 'fa fa-cog',
    img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/order-in-progress-3397327-2834007.png?f=webp&w=256',
      count: 1200,
      color: 'orange'
    },
    {
      name: 'Completed Orders',
    //   class: 'fa fa-cog',
    img: 'https://cdn-icons-png.flaticon.com/512/3500/3500833.png',
      count: 1000,
      color: 'green'
    },{
      name: 'Failed Orders',
    //   class: 'fa fa-cog',
    img: 'https://cdn.iconscout.com/icon/free/png-256/disc-error-2889073-2464079.png',
      count: 300,
      color: 'red'
    }])
    
    return (
        <div className="container mt-4">

            <div className="row widgets">
                {widgetData && widgetData.map((item) => {
                        return (<div className="col-md-2" style={{ paddingLeft: '0px' }}>
                            <Card>
                                <Card.Body className = 'cBody'>
                                    <Card.Title>
                                    <p style={{color: item.color, fontSize:'15px'}}>{item.name}</p>
                                    </Card.Title>
                                    <Card.Text>   
                                        <img
                                        src = {item.img}
                                        alt = 'img'
                                        style = {{width:'40px', marginBottom:'20px', alignSelf:'center'}}
                                        /> 
                                        <br/>
                                        <span className = 'countname'>
                                            {item.count}
                                        </span>
                                        <br/>
                                    </Card.Text>



                                </Card.Body>
                            </Card>
                        </div>)
                    })
                }




            </div>
        </div>


    )
}

export default Widget