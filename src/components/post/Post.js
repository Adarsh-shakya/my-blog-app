import './post.css'
import postImg from '../../Image/postImg.jpg'


export default function Post() {
  return (
    <div className='post'>
        <img
        className="postImg"
        src={postImg}
        alt=""
        />
      <div className="postInfo">
          <div className='postCats'>
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">
            Loren ipsum doyr sit amet
          </span>
          <hr/>
          <span className='postDate'>1 hour ago</span>
      </div>
      <p className="postDesc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis labore vitae consectetur est libero cum voluptatem reiciendis. Dignissimos quaerat dicta aspernatur. Asperiores laborum facere, impedit sunt dolorem pariatur est voluptatum.
      </p>
    </div>
  )
}
