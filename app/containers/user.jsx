import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/github.jsx';
import Debug from '../components/debug.jsx'


@connect((state, props) => {
  return {
    github: state.github
  }
})
export default class User extends React.Component {

  constructor (props) {
    super(props)
  }

  componentWillMount() {
    const { params, dispatch} = this.props;
    dispatch(fetchUser(params));
  }

  render () {
    const {user} = this.props.params;
    return <div className="row">
         <div className="col-xs-6">
            <h4>User {user}</h4>
            <Debug data={this.props.github.user}/>
         </div>
    </div>

  }
}
