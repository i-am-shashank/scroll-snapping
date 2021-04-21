let page_count = 1;
const speed = 12;
window.addEventListener('scroll', snap);

function snap() {
    if (this.oldScroll == null) {
        this.oldScroll = 0;
    }
    if (this.oldScroll < this.scrollY) {
        window.removeEventListener('scroll', snap);
        downscroller();
    } else {
        page_count--;
        window.removeEventListener('scroll', snap);
        upscroller();
    }
    this.oldScroll = this.scrollY;
}

function downscroller() {
    let dist = (page_count * window.innerHeight) - this.scrollY;

    if (dist <= speed) {
        window.scrollBy(0, dist);
        page_count++;
        this.oldScroll = this.scrollY
        setTimeout(() => window.addEventListener('scroll', snap), 50)
        return;
    }
    window.scrollBy(0, speed);
    setTimeout(downscroller, 1);
}

function upscroller() {
    let dist = this.scrollY - (page_count * window.innerHeight);
    console.log(dist);
    if (dist <= speed) {
        window.scrollBy(0, -dist);
        this.oldScroll = this.scrollY;
        setTimeout(() => window.addEventListener('scroll', snap), 50)
        return;
    }
    window.scrollBy(0, -speed);
    setTimeout(upscroller, 1);
}