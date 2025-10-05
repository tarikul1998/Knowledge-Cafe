import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {

    return (
        <div className="md:w-2/3">
            <h3 className="text-3xl bg-gray-300 ml-4 mt-2 pt-4">Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark, index) => <Bookmark 
                    key={index} 
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;