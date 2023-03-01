import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../assets/logo.png'

const Navbar = () => {
  return (
    <div  className='nav-container'>
        <div className="logo-container">
            <Avatar src={icon} size='large' />
            <Typography.Title level={2} className='logo'>
                <link  to='/'>CryptoVerse</link>
            </Typography.Title>
            {/* <Button className='menu-control-container'>

            </Button> */}
        </div>
    </div>
  )
}

export default Navbar