const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const imagesContainerEl = document.querySelector('#gallery');

const creatImgEl = ({ url, alt }) => {
    const ImgEl = document.createElement("li");
    const ImgTagsEl = document.createElement("img");
    imagesContainerEl.append(ImgEl);
    ImgEl.append(ImgTagsEl);
    ImgTagsEl.src = url;
    ImgTagsEl.width = 200;
    ImgTagsEl.alt = alt;
    return ImgEl;
};
const getImgEl = images.map(creatImgEl);
// ===============2 варіант===========================

// imagesContainerEl.insertAdjacentHTML('afterbegin', "<li><img src ='https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' width =150 alt = 'White and Black Long Fur Cat'></li>");
// imagesContainerEl.insertAdjacentHTML('beforeend', "<li><img src ='https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' width ='150' alt = 'Orange and White Koi Fish Near Yellow Koi Fish'></li>");
// imagesContainerEl.insertAdjacentHTML('beforeend', "<li><img src ='https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' width ='150' alt = Group of Horses Running></li>");

