import React from 'react';


const Media = (props) => {
    return (
        <ul className="list-unstyled">
            {Object.entries(props.children).map(tweet =>
                <li key={tweet[1].id} className="media">
                    <img src={tweet[1].user.profile_image_url} className="mr-3" />
                    <div className="media-body">
                        <h5 className="mt-0 mb-1">{tweet[1].user.name}</h5>
                        {tweet[1].full_text}
                        </div>
                </li>
            )}
        </ul>
    )
}

export default Media