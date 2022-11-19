function enablePhotoUpload(){
   const imageInput = document.querySelector("#image-input")

   imageInput.addEventListener("change", function(){
      const reader = new FileReader()
      reader.addEventListener("load", ()=>{
         const uploadImage = reader.result

         changeMemePicture(uploadImage)
        // document.querySelector("#display-image").style.backgroundImage = `url(${uploadImage})`
      })
      reader.readAsDataURL(this.files[0])
   })
}

async function mapImageList() {
   const memesObjesct = [
      {
         "name": "chapolin",
         "path": "picture/chapolin.jpg"
      },
      {
         "name": "chloe",
         "path": "picture/chloe.jpg"
      },
      {
         "name": "funny-cat1",
         "path": "picture/funny-cat1.png"
      },
      {
         "name": "funny-cat2",
         "path": "picture/funny-cat2.png"
      },
      {
         "name": "cleide",
         "path": "picture/cleide.jpg"
      },
      {
         "name": "daniel",
         "path": "picture/daniel.png"
      },
      {
         "name": "images",
         "path": "picture/images.jpg"
      },
      {
         "name": "menininha",
         "path": "picture/menininha.png"
      },
      {
         "name": "lolo",
         "path": "picture/lolo.jpg"
      },
      {
         "name": "eu",
         "path": "picture/eu.jpg"
      }

   ]
   return memesObjesct
}

async function createGallery(imageList) {
   const memeSelector = document.querySelector("#memes-list")
   imageList.forEach(picture => {
      let newOption = document.createElement("option")
      newOption.text = picture.name.toUpperCase()
      newOption.value = picture.path
      memeSelector.appendChild(newOption)
   }
   );
}
async function changeMemePicture(photo){
  let displayImage = document.querySelector("#display-image")
  displayImage.style.backgroundImage = `url('${photo}')`
}

async function main() {
 const memesImageList = await mapImageList()
 enablePhotoUpload()
 await createGallery(memesImageList)
 await changeMemePicture(memesImageList[1].path)
}
main()