import React, { Component, Fragment } from 'react';
import './Main.css';
import Drawer from 'react-motion-drawer';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftSidebarOpen: false,
            rightSidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(isLeft) {
        if (isLeft && !this.state.rightSidebarOpen ) {
            this.setState({ leftSidebarOpen: !this.state.leftSidebarOpen });
        } else if (!isLeft && !this.state.leftSidebarOpen) {
            this.setState({ rightSidebarOpen: !this.state.rightSidebarOpen });
        }
    }

    render() {
        return (
            <Fragment>
                <header className="App-header">
                    <div className="title">
                        로그인 후 확인가능
                    </div>
                    <button onClick={() => this.onSetSidebarOpen(true)} style={{ float: "left", marginTop: "-20px" }}>
                        메뉴
                    </button>
                    <button onClick={() => this.onSetSidebarOpen(false)} style={{ float: "right", marginTop: "-20px" }}>
                        로그인
                    </button>
                </header>
                <div className="Navbar">
                    <Drawer open={this.state.leftSidebarOpen} onChange={(sidebarOpen) => this.setState({leftSidebarOpen: sidebarOpen})}>
                        <ul>
                            <li>공지사항</li>
                            <li>MTS사용법</li>
                            <li>비상주문</li>
                            <li>손실보상기준</li>
                            <li>캐시 및 쿠키삭제 안내</li>
                        </ul>
                    </Drawer>
                </div>
                <div className="Navbar">
                    <Drawer right open={this.state.rightSidebarOpen} onChange={(sidebarOpen) => this.setState({rightSidebarOpen: sidebarOpen})}>
                        <ul>
                            <li>로그인후 모든 서비스를 이용하세요.</li>
                            <li>로그인</li>
                            <li>회원가입</li>
                        </ul>
                    </Drawer>
                </div>
            </Fragment>
        );
    }
}

export default Main;