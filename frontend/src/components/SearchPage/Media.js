import React from 'react';

const getLocalTime = (raw_date) => {
    const date = new Date(raw_date)
    return date.toLocaleTimeString('ART', undefined)
}


const Media = (props) => {
    return (
        <ul className="list-unstyled">
            {Object.entries(props.children).map(tweet =>
                <li key={tweet[1].id} className="shadow p-3 mb-4 bg-white rounded media">
                    <img src={tweet[1].user.profile_image_url} className="mr-3" />
                    <div className="media-body">
                    <h5 className="mt-0 mb-1">{tweet[1].user.name} @ {getLocalTime(tweet[1].created_at)}</h5>
                        {tweet[1].full_text}
                    </div>
                </li>
            )}
        </ul>
    )
}

export default Media