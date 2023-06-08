/* 
END POINT: https://dummyjson.com/posts
Rendereizar os campos: title, body, reactions
Não esqueça de criar o botão para mostrar e sumir com a lista (como exemplo em aula)
*/
import { useState, useEffect } from "react";
import axios from "axios";
export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(true);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("https://dummyjson.com/posts");
      setPosts(response.data.posts);
    }
    fetchPosts();
  }, []);
  console.log(posts);
  function handlePosts() {
    setShowPosts(!showPosts);
  }
  return (
    <div>
      <h2>Posts</h2>
      <button onClick={handlePosts}>Mostrar Posts</button>
      {showPosts === true && (
        <div>
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <h3>{post.body}</h3>
                <p>{post.reactions}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
