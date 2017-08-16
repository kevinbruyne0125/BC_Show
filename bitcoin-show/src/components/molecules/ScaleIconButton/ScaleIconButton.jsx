import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../atoms/Icon/Icon';
import Log from '../../utils/Log';
import './ScaleIconButton.css';

class ScaleIconButton extends Component {
  constructor(props) {
    super(props);
    this.log = new Log(this.constructor.name);
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.scaleIn !== this.props.scaleIn;
  }
  componentWillUpdate() {
    this.log.info('renderizando ScaleIconButton');
  }
  getClassName() {
    return `${this.props.className} ${(this.props.scaleIn ? ' scale-transition scale-in' : ' scale-transition scale-out')}`;
  }
  render() {
    return (
      <a
        onClick={() => this.props.onClick()}
        id="btnCheckAnswer"
        className={this.getClassName()}
      >
        <Icon
          className={this.props.iconClassName}
          icon={this.props.icon}
        />
      </a>
    );
  }
}

export default ScaleIconButton;

ScaleIconButton.propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  scaleIn: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

ScaleIconButton.defaultProps = {
  icon: '',
  iconClassName: '',
  scaleIn: false,
  onClick: null,
};