import React from "react";
import "../css/newMenu.css"; 
import {Button} from "semantic-ui-react";

class MenuLinks extends React.Component {
  constructor(props) {
    super(props);
    // Any number of links can be added here
    this.state = {
      links: [{
        text: 'Courts',
        link: 'https://github.com/Lakston',
        icon: 'fa-pencil-square-o' },
      {
        text: 'Courses',
        link: 'https://github.com/Lakston',
        icon: 'fa-github' },
      {
        text: 'Statistics',
        link: 'https://twitter.com/Fab_is_coding',
        icon: 'fa-twitter' }] };


  }

  render() {
    let links = this.state.links.map((link, i) =>
    React.createElement("li", { ref: i + 1 },
    React.createElement("i", { "aria-hidden": "true", className: `fa ${link.icon}` }),
    React.createElement("a", { href: link.link, target: "_blank" }, link.text)));
      return (
      React.createElement("div", { className: this.props.menuStatus, id: "menu" },
      React.createElement("ul", null, links)));
  }}


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false };

    this._menuToggle = this._menuToggle.bind(this);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this._handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._handleDocumentClick, false);
  }

  _handleDocumentClick(e) {
    if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
      this.setState({
        isOpen: false });
    };
  }
  _menuToggle(e) {
    e.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen });

  }


  oClick(){
    console.log("Clicked");
  }
  render() {

    let menuStatus = this.state.isOpen ? 'isopen' : '';

    return (
      React.createElement("div", { ref: "root" },
      React.createElement("div", { className: "menubar" },
      React.createElement("span",{className:"menuHeader"},'Sport Is A Way Of Life'),
      <Button primary onClick={this.oClick} className="btn">Logout</Button>,
      React.createElement("div", { className: "hambclicker", onClick: this._menuToggle }),
      React.createElement("div", { id: "hambmenu", className: menuStatus }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)),
      React.createElement("div", { className: "title" },
      React.createElement("span", null, this.props.title))),


      React.createElement(MenuLinks, { menuStatus: menuStatus })));

  }}


// class Test extends React.Component {
//   render() {
//     return (
//       React.createElement("div", null, "Testing"));

//   }}

  export default Menu;

//ReactDOM.render(<Test title='Awesome Title'/>, document.getElementById('app'))

// ReactDOM.render(React.createElement(Menu, { title: "Title" }), document.getElementById('app'));