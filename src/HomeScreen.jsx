import React from 'react'
import './HomeScreen.css'
import logo from './assets/img/logo.png'

class HomeScreen extends React.Component {
  render() {
    return (
      <div className="fixed-container">
        <div className="home-container">
          <div className="title"> ทั้งก์ ทวิสต์</div>
          <img className="logo" src={logo} />
          <div className="start">กดปุ่ม "เอ็นเทอร์" เพื่อเริ่มเกม</div>
        </div>
        <div className="background" />
      </div>
    )
  }
}

export default HomeScreen
