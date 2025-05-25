import React, { useState } from 'react'

function PopUp() {
    const [showPopup, setShowPopup] = useState(false);
  return (
    <div className='fle justify-center items-center h-screen px-20 py-10 '>
            <button onClick={() => setShowPopup(true)} className='bg-blue-400 text-white px-4 py-2 rounded-md shadow-xl'>Create Post</button>
            {
                showPopup && (
                    <div className=' fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50'>
                        <div className='bg-white p-6 rounded shadow-lg max-w-sm w-full'>
                            <form  encType="multipart/form-data">
                                <div className="mb-4">
                                    <label className="block mb-1 font-medium">Title</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        placeholder="Enter title"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1 font-medium">Content</label>
                                    <textarea
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        placeholder="Enter content"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1 font-medium">Image</label>
                                    <input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        className="w-full"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                                >
                                    Submit Post
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