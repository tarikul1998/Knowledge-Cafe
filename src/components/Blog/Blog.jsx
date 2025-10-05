import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {

    const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;

    return (
        <div className="mb-20">
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
                    <button onClick={() => handleAddToBookmark(blog)} className="ml-2 text-lg text-blue-600">
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, index) => <a key={index} href="#" className="text-dark-111 mr-2">#{hash}</a>)
                }
            </p>
        </div>
    );
};

export default Blog;

// npm install react-icons --save
// ctrl shift f mere eivabe <Blog likhle => Bujha jabe Blog re kothay use kora hoise  