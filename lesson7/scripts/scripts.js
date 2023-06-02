const imagesToLoad = document.querySelectorAll("img[data-src]")

const options = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
}

const lazyLoadimages = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"))
    img.onload = () => {img.removeAttribute("data-src")};
};



if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                lazyLoadimages(item.target)
                observer.unobserve(item.target)
            }
        })
    }, options)
    imagesToLoad .forEach((img) => {
        observer.observe(img)
    })
}
else {
    imagesToLoad .forEach((img) => {
        lazyLoadimages(img)
    })
}
