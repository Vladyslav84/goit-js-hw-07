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

function createImgList(images) {

    return images.map(({ url, alt }) => {

        return `<li><img src = ${ url } alt =${ alt } width =150></li>`;

    }).join('');

};

imagesContainerEl.insertAdjacentHTML('beforeend', createImgList(images));
