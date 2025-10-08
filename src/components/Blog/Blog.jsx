import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {

    const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;

    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-8 rounded-lg" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className="ml-2 text-2xl text-red-600">
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, index) => <span key={index}><a href="">#{hash}</a> </span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)}
                className="text-purple-800 font-bold underline">Mark As Read
            </button>
        </div>
    );
};

export default Blog;

// npm install react-icons --save
// ctrl shift f mere eivabe <Blog likhle => Bujha jabe Blog re kothay use kora hoise  