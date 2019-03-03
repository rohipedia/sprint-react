import React from 'react';
import './StoriesStatus.css';

const StoriesStatus = (props) => {
    return (
        <ul>
            <li>
                User Stories &nbsp;
                { props.status.total }
            </li>
            <li>
                Defined &nbsp;
                { props.status.defined }
            </li>
            <li>
                In Progress &nbsp;
                { props.status.inProgress }
            </li>
            <li>
                Accepted &nbsp;
                { props.status.accepted }
            </li>
            <li>
                Blocked &nbsp;
                { props.status.blocked }
            </li>
            <li>
                Completed &nbsp;
                { props.status.completed }
            </li>
        </ul>
    )
}

export default StoriesStatus;