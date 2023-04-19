import './write.css'
import img from '../../Image/postImg.jpg'

export default function Write() {
  return (
    <div className='write'>
        <img
           className='writeImg'
           src={img}
           alt=""
        />
      <form className="writeForm">
        <div className='writeFromGroup'>
            <label htmlFor="fileInput">
            <i className="writeIcon bi bi-plus-lg"></i>
            </label>
            <input type='file' id='fileInput' style={{display:"none"}}/>
            <input type='text' placeholder="Title" className='writeInput' autoFocus={true}/>

        </div>
        <div className='writeFromGroup'>
            <textarea placeholder='Tell your story...'
             type='text'
             className='writeInput ,writeText '></textarea>
        </div>
        <button className="writeSubmite">Publish</button>
      </form>
    </div>
  )
}
