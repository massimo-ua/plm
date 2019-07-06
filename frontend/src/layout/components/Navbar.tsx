import React, { ReactNode } from 'react';
import { Menu, Icon } from 'antd';

import { NavbarState } from '../models';
import { ClickParam } from 'antd/lib/menu';

export class Navbar extends React.Component {
    state: NavbarState = {
        current: 'home',
    };

    handleClick = ({ key }: ClickParam): void => {
        this.setState({
            ...this.state,
            current: key,
        });
    }

    render(): ReactNode {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="home">
                    <Icon type="home" />
                    Home
                </Menu.Item>
                <Menu.Item key="transactions">
                    <Icon type="solution" />
                    Transactions
                </Menu.Item>
                <Menu.Item key="accounts">
                    <Icon type="wallet" />
                    Accounts
                </Menu.Item>
                <Menu.Item key="currencies">
                    <Icon type="dollar" />
                    Currencies
                </Menu.Item>
                <Menu.Item key="plans">
                    <Icon type="calendar" />
                    Plans
                </Menu.Item>
            </Menu>
        );
    }
}
