import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// in order to call action, this needs to be promoted to a container
// steps:
// 1. import connect
// 2. import relevant actions or 'import * as actions from '../actions''
// 3. remove export default from 'export default class CommentBox extends Component {'
// 4. add 'export default connect(null, mapDispatchToProps)(CommentBox)' at bottom
class CommentBox extends Component {
  constructor(props){
    super(props);

    this.state = { comment: '' };
  }

  handleChange(event){
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' });
  }

  render(){
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        className='comment-box'>
        <h4>Add a Comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}

// passing actions object instead of mapStateToProps will automatically bind all action creators to the CommentBox class container
export default connect(null, actions)(CommentBox)
