import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from './main';

function Menu() {
    return (
        <div>
            <Layout>
                <Header className="" >
                    <Navigation>
                        <Link to="../">Home</Link>
                        <Link to="../addEvent">Add Event</Link>
                        <Link to="../editEvent">Edit Event</Link>
                    </Navigation>
                </Header>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>

        </div>

    )
}

export default Menu
