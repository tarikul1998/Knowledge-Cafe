const Bookmark = ({ bookmark }) => {

    const {title} = bookmark;

    return (
        <div className="bg-slate-200 mb-4 ml-2 p-4 rounded-xl">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

export default Bookmark;