import React, { useState } from 'react'
import axios from 'axios';
function PopUp() {
    const [showPopup, setShowPopup] = useState(false);
    const [tittle, setittle] = useState('')
    const [Content, setContent] = useState('')
    const [image, setImage] = useState(null)
    const [message, setMessage] = useState('')
    const [loading, setloading] = useState('')
    const [preview, setPreive] = useState(true)

    const HandleImageOnchange=(e)=>{
        const file =e.target.files[0];
        if(file){
            setImage(file)
            setPreive(URL.createObjectURL(file))
        }
    };

    const HandleOnSubmit=async(event)=>{
        event.preventDefault();
        setloading(true);

        const formDate=new FormData();

        formDate.append('tittle',tittle);
        formDate.append('Content',Content);
        if(image){
            formDate.append('image',image)
        }

        var response=await axios.post('/http://localhost:4000/api/posts/create-post',)
    }

    return (
        <div className='fle justify-center items-center h-screen px-20 py-10 '>
            <button onClick={() => setShowPopup(true)} className='bg-blue-400 text-white px-4 py-2 rounded-md shadow-xl'>Create Post</button>
            {
                showPopup && (
                    <div className=' fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50'>
                        <div className='bg-white p-6 rounded shadow-lg max-w-sm w-full'>
                            <form onSubmit={HandleOnSubmit} >
                                <div className="mb-4">
                                    <label className="block mb-1 font-medium">Title</label>
                                    <input
                                        onChange={(e) => setittle(e.target.value)}
                                        value={tittle}
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        placeholder="Enter title"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1 font-medium">Content</label>
                                    <textarea onChange={(e) => setContent(e.target.value)}
                                    value={Content}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        placeholder="Enter content"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1 font-medium">Image</label>
                                    <input
                                    value={image}
                                    onChange={HandleImageOnchange}
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        className="w-full"
                                    />
                                </div>
                                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                                    {loading?"Registering.....":"Create Post"}
                                </button>
                            </form>

                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default PopUp