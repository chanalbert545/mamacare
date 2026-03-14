function UploadButton(){

const openWidget = ()=>{

window.cloudinary.openUploadWidget({

cloudName:"YOUR_CLOUD_NAME",

uploadPreset:"gallery_upload",

folder:"learning"

},(error,result)=>{

if(result.event === "success"){
console.log(result.info.secure_url)
}

})

}

return(

<button
className="floating-upload"
onClick={openWidget}
>

+

</button>

)

}

export default UploadButton