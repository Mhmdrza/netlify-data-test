import React from 'react'
import { Link } from 'gatsby'
//import Hammer from 'hammer.min.js';
import Hammer from 'hammerjs';
import AuthinLogo from 'images/authinLogo.svg'


class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      sideMenuIsOpen : false,
      icon: '',
    }
  }
  
  openMenu = (e) => {
    if (e.pointerType === 'touch') {
      document.querySelector(".page").style.filter = "blur(3px)"
      this.setState({sideMenuIsOpen:true})
    }
  }
  
  closeMenu = (e) => {
    if (e.pointerType === 'touch') {
      this.setState({sideMenuIsOpen:false})
      document.querySelector(".page").style.filter = "blur(0px)"
    }else{
      this.setState({sideMenuIsOpen:false})
      document.querySelector(".page").style.filter = "blur(0px)"
    }
  }
  
  toggleMenu = (e) => {
    this.setState({ sideMenuIsOpen: !this.state.sideMenuIsOpen })
    document.querySelector(".page").style.filter = "blur(0px)"
  }

  componentDidMount (){
    this.hammer = Hammer(document.querySelector('body'))
    this.hammer.on('swiperight', this.openMenu);
    this.hammer.on('swipeleft', this.closeMenu);
    document.querySelector('.page').addEventListener('mousedown', this.closeMenu)
  }

  render(){
    let isOpen = this.state.sideMenuIsOpen
    return(
      <header> 
        <Link className="authin-text" to="/">
          <img className="authin-logo" alt="" src={AuthinLogo}/>
          آتین
        </Link>
        <nav className={ isOpen ? 'open' : 'close' }>
          <Link to='/products'>محصولات</Link>
          <Link to='/solutions/'>راهکارها</Link>
          <Link to='/prices/'>تعرفه ها</Link>
          <Link to='/team/'>توسعه دهندگان</Link>
          <Link to='/docs/'>منابع</Link>
          <Link to='/contactus/'>ارتباط با ما</Link>
        </nav>
        <button className="btn type-1">درخواست دمو</button>
        <span className={`hamburger-menu-icon ${isOpen? 'hide' : ''}`} onClick={this.toggleMenu}>{this.state.icon}&#9776;</span>
        <div className="header-fake-bg"/>
      </header>
    )
  }
}

export default Header
