import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <div>
                    <h4>Warn</h4>
                    Are y sure?
                </div>
            </ApprovalCard>


            <ApprovalCard >
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                content="Hi man!"
                avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard >
            <CommentDetail
                author="Kam"
                timeAgo="Today at 5:41PM"
                content="Eee boy"
                avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard >
            <CommentDetail
                author="Mag"
                timeAgo="Today at 1:25PM"
                content="Awesome"
                avatar={faker.image.avatar()}/>
        </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'))