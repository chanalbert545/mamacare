function Upload(){

const [title,setTitle] = useState("")
const [caption,setCaption] = useState("")
const [category,setCategory] = useState("")
const [mediaUrl,setMediaUrl] = useState("")

const uploadPost = async()=>{

await axios.post("http://localhost:5000/posts/create",{

title,
caption,
category,
mediaUrl

},{
headers:{
authorization:localStorage.getItem("token")
}
})

}

}