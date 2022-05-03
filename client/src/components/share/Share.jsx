import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'
import axios from 'axios';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './share.css'

export default function Share() {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file, setFile] = useState(null);
        
    const handlePost = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name
            data.append('file', file);
            data.append('name', filename);
            newPost.img = filename;
            try {
                await axios.post("/upload", data)
            } catch (err) {
                console.log(err);
            }
        }

        try {
            await axios.post("/posts", newPost)
            window.location.reload();
        } catch (err) {
            
        }
        console.log("submitted");
    }
    return (
        <div className='share'>
            <div className='shareWrapper'>
                <div className="shareTop">
                    <img src={ user.profilePicture ? PF+user.profilePicture : PF + 'person/noAvatar.png' } alt="UserAvatar" className='shareProfileImg' />
                    <input ref={desc} placeholder={`Qu'y a-t-il dans ta tête ${user.username} ?`} className='shareInput' />
                </div>
                <hr className='shareHr' />
                <form className="shareBottom" onSubmit={handlePost}>
                    <div className='shareOptions'>
                        <label htmlFor='file' className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon' />
                            <span className="shareOptionText">Photo ou Video</span>
                            <input type="file" id="file" style={{ display:"none" }} accept='.png,.jpeg,.jpg' onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor='blue' className='shareIcon' />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='green' className='shareIcon' />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button type='submit' className='shareButton'>Partager</button>
                </form>
            </div>
        </div>
    )
}
