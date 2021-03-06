import React from 'react';
import { connect } from 'react-redux';

function AllReplies(props) {
    const { replies, postId } = props;
    return (
      <div className="replies">
        {replies.map(reply => {
            if (reply.postId === postId) {
                return (
                    <div key={reply.id}>
                        <div className="reply-user">{reply.user}:</div>
                        <div className="reply-text">{reply.text}</div>
                        <hr />
                    </div>
                )
            }
        })}
    </div>
    )
}

const mapStateToProps = function (state, ownProps) {
    return {
        replies: state.replies.allReplies,
        postId: ownProps.postId
    }
};

const mapDispatchToProps = function (dispatch) {
    return {};
  };

export default connect(mapStateToProps, mapDispatchToProps)(AllReplies);
