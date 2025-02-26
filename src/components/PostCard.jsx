
const PostCard = (props) => {
    const { post } = props;

    return (
        <ul className="posts_container">
            <li className="post" key={post.id}>
                <h2 id="titolo">{post.title}</h2>
                <img id="img_post" src={post.image} alt={post.title} />
                <p id="contenuto">{post.content}</p>
                <p id="categoria">{Array.isArray(post.tags) ? post.tags.join(", ") : post.tags}</p>
            </li>
        </ul>

    )
}

export default PostCard;