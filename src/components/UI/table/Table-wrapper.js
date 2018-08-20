import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TableWrapper extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
};


  render() {
     const { data } = this.props;
     const mappedTrainings = data.map((training) => {
      return <p key={training.id}>{training.name}</p>;
    });
    return (<div>{mappedTrainings}</div>);
  }

}

export default TableWrapper;