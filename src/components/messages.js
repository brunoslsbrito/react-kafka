import React from 'react'

const Messages = ({ messages }) => {
    return (
        <div>
            <center><h1>Message List</h1></center>
            {messages.map((message) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{messages.value}</h5>
                        {/*<p class="card-text">{contact.company.catchPhrase}</p>*/}
                        {/*<h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>*/}
                    </div>
                </div>
            ))}
        </div>
    )
};
export default Messages
