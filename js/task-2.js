const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
      alt: "Alpine Spring Meadows",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
      alt: "Nature Landscape",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
      alt: "Lighthouse Coast Sea",
    }
  ];
  
  const gallery = document.querySelector('ul.gallery');
  
  gallery.style.display = 'flex'
  gallery.style.flexWrap = 'wrap'
  gallery.style.rowGap = '15px'
  gallery.style.gap = '15px'
  
  const imagesHTML = images.map(image => 
    `<li style="list-style: none;">
       <img src="${image.url}" alt="${image.alt}" style="height: 250px; width: 400px;">
     </li>`
  ).join('');
  
  gallery.innerHTML = imagesHTML;
  
  
  // images.forEach(image => {
  //   const newItem = document.createElement('li')
  //   const newImg = document.createElement('img')
  //   newImg.src = image.url
  //   newImg.alt = image.alt
  
  //   newImg.style.height = '250px';
  //   newImg.style.width = '400px'
  //   newItem.style.listStyle = 'none';
  
  //   newItem.append(newImg)
  //   gallery.append(newItem)
  // })