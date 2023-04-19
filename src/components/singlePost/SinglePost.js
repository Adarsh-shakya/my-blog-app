import "./singlePost.css"
import img from '../../Image/postImg.jpg'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src={img} alt="sorry" className='singlePostImg'/>
        <h1 className="singlePostTitle">
            Loren amezeno dedo none.
            <div className="singlePostEdit">
            <i className="singlePostIcon bi bi-pencil-square"></i>
            <i className="singlePostIcon bi bi-trash3"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuther">Auther:<b>Adarsh</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At dignissimos eum perspiciatis obcaecati mollitia sunt sit amet numquam laborum quam, in, tempora qui? Veritatis, placeat sapiente ut aliquam, facilis maiores debitis at fugit nisi mollitia id quibusdam! Doloremque inventore aperiam nisi ab omnis exercitationem ad dicta possimus, culpa molestias sint quasi fuga accusantium cumque, nulla illum consectetur aliquam dignissimos magnam doloribus totam quam at reprehenderit. Veritatis quasi incidunt, eum delectus ab animi debitis hic neque excepturi suscipit, qui facere aperiam! Ipsum nesciunt maxime dicta sit, corporis qui assumenda voluptate nulla dolores blanditiis ab est magnam, possimus cum. Neque quos fugiat quisquam, temporibus voluptatum, laboriosam harum provident soluta necessitatibus, maiores ad explicabo laudantium. Quod libero at voluptatem facere et numquam voluptas, nobis tempore quas, consectetur omnis
        </p>
        </div> 
    </div>
  )
}
