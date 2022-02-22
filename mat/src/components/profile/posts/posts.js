import react from "react"
import ava_min from '../../../img/elon_mini.jpg'
import Post from "./post/post.js"
function Posts(){
	return(
		<div className='posts'>
			<input placeholder='enter the post' />
			<button>Add post</button>
			<Post message="Hi, world"/>
			<Post message="I`m Elon Mask, really"/>
			<Post message="Give me some bitcoins"/>
		</div>
	)
}
export default Posts