import {useState} from 'react'
import pfp  from '../images/ilves.jpg'

function Post(props) {

    console.log(props.post.item_content)

    const [itemContent, setItemContent] = useState(JSON.parse(props.post.item_content))
    const [address, setAddress] = useState (props.truncateAddress(itemContent.address))
    const [timePosted, setTimePosted] = useState(() => {
        return props.timeSince (new Date(itemContent.time * 1000))
    })
    const [content, setContent] = useState(itemContent.content.body)

    const shouldDisplay = (content) => { // here you can add more standards on posts etc
        return content !== '' &&
            content !== undefined //&&
            //content === 'test' && ...

    }



    return (
        <div>
            {content !== '' && content !== undefined ?
                <div className='post card my-3'>
                    <div className='card-body'>
                        <div className="row">
                            <div className="col-2">
                                <img className="pfp"
                                     src={pfp}
                                     alt="profilePicture"/>
                            </div>
                            <div className="col-10">
                                <p className="user mb-0">
                                    <b>{address}</b> · <span className="time">{timePosted}</span>
                                </p>
                                <p>{content}</p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                ''
            }
        </div>

    );
}

export default Post;