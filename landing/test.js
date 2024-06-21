const options = [
    {
        title: 'Choose your preferred insurance plan',
        paragraph: "Go ahead, make a choice. We've got you! You are provided with an array of insurance policies to choose from. Tastefully fitted to your pocket size, assets and family needs.",
        icon_image: 'Frame 93104.png',
        imageType: 'Frame 628204.png',
        imageBackgrouund: '#FFEAD5',
        active: false
    },
    {
        title: "Let's get closer!",
        paragraph: "It's time to cross the tees and dot the I on your Insurance. Fill in your personal and Plan details and hop  on to step number 3",
        icon_image: 'icon2.png',
        imageType: 'Flexicare2.png',
        imageBackgrouund: '#FCE7F6',
        active: false
    },
    {
        title: 'Get your insurance certificate and enjoy easy coverage!',
        paragraph: "Yes! That's about it. Now sit back, relax and experience 24/7 seamless insurance coverage",
        icon_image: 'icon3.png',
        imageType: 'Flexicare3.png',
        imageBackgrouund: '#EBE9FE',
        active: false
    }
]


document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('cover')
    
    const template = ({ title, paragraph, icon_image }) => {
        return ` <div class="list-wrapper">
        <div class="iconCover">
            <div><img src="${icon_image}" alt=""></div>
            <div><img src="Vector 350.png" alt=""></div>
        </div>
        <div class="details">
            <h3>${title}</h3>
            <p>${paragraph}</p>
        </div>
        </div>`
    }

    if (wrapper) {
        wrapper.innerHTML = template({
            title: "Let's get closer!",
            paragraph: "It's time to cross the tees and dot the I on your Insurance. Fill in your personal and Plan details and hop  on to step number 3",
            icon_image: 'icon2.png',
        })
    }
})