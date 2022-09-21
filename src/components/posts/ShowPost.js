import PostModel from "../../models/PostModel";
import { useState, useEffect } from 'react'
import {useParams} from "react-router-dom";
import pfp  from '../../images/ilves.jpg'

function ShowPost(props) {

    const { item_hash } = useParams()
    const timeSince = props.timeSince
    const truncateAddress = props.truncateAddress

    const [address, setAddress] = useState('')
    const [content, setContent] = useState('')
    const [timePosted, setTimePosted] = useState('')


    const loadPost = async () => {
        const post = await PostModel.find(item_hash)

        setAddress(truncateAddress(post.address))

        console.log()

        setContent(post.content.body)
        setTimePosted(timeSince (new Date(post.time * 1000)))
    }

    useEffect(() => {
        loadPost()
    }, [])

    return (
        <div>
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
        </div>

    );
}

export default ShowPost;