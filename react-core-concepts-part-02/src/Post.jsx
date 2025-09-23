export default function Post ({post}) {
    const {title, body} = post;
    return (
        <div className="card">
            <h4>Title: {title}</h4>
            <h4>{post}</h4>
        </div>
    );
};