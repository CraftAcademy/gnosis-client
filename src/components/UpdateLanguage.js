import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "../styling/Navbar.css";
import i18n from "../i18n";

class UpdateLanguage extends Component {
  render() {
    return (
      <>
        <div id="language" className="ui simple dropdown item">
          {i18n.t('navbar.language')} <i className="dropdown icon" />
          <Menu secondary>
            <Menu.Item
              id="swedish"
              name={i18n.t('navbar.swedish')}
              onClick={(e) => this.props.updateLanguage('sv')}
            />
            <Menu.Item
              id="english"
              name={i18n.t('navbar.english')}
              onClick={() => this.props.updateLanguage('en')}
            />
          </Menu>
        </div>
      </>
    )
  }
}

export default UpdateLanguage;