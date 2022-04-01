params = {
    title: 'Olly\'s Weekend',
    favicon: 'img/favicon.png',
    fontColor: '#1a1a1a',
    header: {
        height: '70px',
        fontSize: '20px',
        fontWeight: '600',
        menu: [
            {
                title: 'Bambule',
                backgroundColor: '#ebf5f9',
            },
            {
                title: 'Manana',
                backgroundColor: '#fcf5e9',
            },
            {
                title: 'Mitzva',
                backgroundColor: '#fce9ef',
            },
        ],
    },
    main: {
        height: '',
        pages: [
            {
                title: 'Bambule',
                backgroundColor: '#ebf5f9',
                about: 'Следовать правилам или нарушать их? Выбирать вино по этикетке или знать все о биодинамических винах? Зайти на аперитив или остаться до утра? Пить, сидя прямо на лестнице, и танцевать до изнеможения? Поступайте, как хотите, в месте, где нет привычного пафоса винных баров, зато самого подлинного дружелюбия и веселья – в избытке.',
                rating: '4.6',
                logo: 'img/bambule/logo.png',
                photos: [
                    {
                        link: 'img/bambule/1.jpg'
                    }, 
                    {
                        link: 'img/bambule/2.jpg'
                    }, 
                    {
                        link: 'img/bambule/3.jpg'
                    }, 
                    {
                        link: 'img/bambule/4.jpg'
                    }, 
                    
                ],
                address: 'Улица Солянка, 1/2 (ст. м. Китай-Город)',
                phone: '+7 (926) 653 88 05',
                mapPhoto: 'img/bambule/address.png',
                coordinates: '',

            },
            {
                title: 'Manana',
                backgroundColor: '#fcf5e9',
                about: 'mañana (маньяна) – в переводе с испанского — «завтра», но чаще используется под смыслом «когда-нибудь потом, но не сегодня».',
                rating: '4.7',
                logo: 'img/manana/logo.png',
                photos: [
                    {
                        link: 'img/manana/1.jpg'
                    }, 
                    {
                        link: 'img/manana/2.jpg'
                    }, 
                    {
                        link: 'img/manana/3.jpg'
                    }, 
                    {
                        link: 'img/manana/4.jpg'
                    }, 
                    
                ],
                address: 'Пятницкая улица, 3/4с1 (ст. м. Новокузнецкая / Третьяковская)',
                phone: '+7 (925) 059 25 01',
                mapPhoto: 'img/manana/address.png',
                coordinates: '',

            },
            {
                title: 'Mitzva',
                backgroundColor: '#fce9ef',
                about: 'Единственный в своем роде некошерный еврейский бар сработан с размахом театральных декораций: почти отвесной лестница уходит в подвал под низкими сводами, каббалистические знаки отражаются в мутных зеркалах, свечи, качели на цепях и девушки в глухих черных платьях, бесшумно снующие от кухни к залу. Мрачной, но симпатичной фантасмагории вторит коктейльная концепция: чего стоит «Кровавая Сара» с томатно-водочным премиксом на израильских специях с листочком мацы (все коктейли – по 660 рублей). Барной карты нет как таковой: бармены предлагают напитки в постоянном диалоге с гостями и под присмотром нарисованного всевидящего ока в полстены миксуют актуальные рецептуры с ветхозаветными коннотациями.',
                rating: '4.8',
                logo: 'img/mitzva/logo.png',
                photos: [
                    {
                        link: 'img/mitzva/1.jpg'
                    }, 
                    {
                        link: 'img/mitzva/2.jpg'
                    }, 
                    {
                        link: 'img/mitzva/3.jpg'
                    }, 
                    {
                        link: 'img/mitzva/4.jpg'
                    }, 
                    
                ],
                address: 'Пятницкая улица, 29 (ст. м. Новокузнецкая / Третьяковская)',
                phone: '+7 (499) 707 29 29',
                mapPhoto: 'img/mitzva/address.png',
                coordinates: '',

            },
        ],
    }
}

// function up() {
//     console.log('lol');
// 	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
//   if(top > 0) {
// 	window.scrollBy(0,((top+100)/-10));
// 	t = setTimeout('up()',20);
//   } else clearTimeout(t);
//   return false;
// }

const getElement = (tagName, classNames, attributes) => {
	const element = document.createElement(tagName);
	if (classNames) {
		element.classList.add(...classNames);
	}
	if (attributes) {
		for (const attribute in attributes) {
			element[attribute] = attributes[attribute];
		}
	}
	return element;
}

const createHeader = ({header: {height, fontSize, fontWeight, menu}}) => {
    const header    = getElement('header');
    const container = getElement('div', ['container']);
    header.style.height     = height;
    header.style.fontSize   = fontSize;
    header.style.fontWeight = fontWeight;

    if (menu) {
        const allMenuItems = menu.map( (item, i) => {
            const menuClasses = ['menu-item'];
            if (i == 0) { 
                menuClasses.push('active');
            }
            const menuItem = getElement('p', menuClasses, {
                textContent: item.title,
            })
            
            menuItem.style.backgroundColor = item.backgroundColor;
            return menuItem;
        })
        container.append(...allMenuItems);
    }

    header.append(container);
    return header;
}

const createMain = ({main: {height, pages}}) => {
    const main = getElement('main');
    const container = getElement('div', ['container']);
    
    main.append(container);
    return main;
}



const pageConstructor = (selector, options) => {
    document.title = options.title;

	const app = document.querySelector(selector);
	app.classList.add('body-app');

	app.style.color = options.fontColor || '';

	if (options.favicon) {
		const index = options.favicon.lastIndexOf('.');
		const type = options.favicon.substring(index + 1);
		const favicon = getElement('link', null, {
			rel: 'icon',
			href: options.favicon,
			type: 'image/' + type === 'svg' ? 'svg-xml' : type,
		})
		document.head.append(favicon);
	}

	if (options.header) {
		app.append(createHeader(options));
	}

	if (options.main) {
		app.append(createMain(options));
	}
}
pageConstructor('.app', params);


// Обработка клика по menu-item
const menuItems = document.querySelectorAll('header .container .menu-item');
const containerDiv = document.querySelector('main .container');

menuItems.forEach( (btn, i) => {
    btn.addEventListener('click', (e)=>{
        // удаляем класс active для всех элементов header > .container > .menu-item
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove('active');
        }

        let textMenuItem = btn.textContent;
        if (textMenuItem == params.main.pages[i].title) {
            btn.classList.add('active');
            // удаляем элементы внутри .main > .container 
            let deleteElement = containerDiv.querySelectorAll('div');
            for (let i = 0; i < deleteElement.length; i++) {
                deleteElement[i].remove();
            }
            // меняем фон .main > .container
            containerDiv.style.backgroundColor = params.main.pages[i].backgroundColor;
            document.body.style.background = params.main.pages[i].backgroundColor;
            // заполнение .main > .container
            const titlePageContainer = getElement('div', ['title-page-container']);
            const titlePage = getElement('h3', ['title-page']);  // вертикальный текст
            titlePage.textContent = params.main.pages[i].title;

            const mainPhotoPageContainer = getElement('div', ['main-photo-page-container']); // лого бара
            mainPhotoPageContainer.style.backgroundImage = 'url('+params.main.pages[i].logo+')';
            mainPhotoPageContainer.style.backgroundPosition = 'center';
            mainPhotoPageContainer.style.backgroundRepeat = 'no-repeat';
            mainPhotoPageContainer.style.backgroundSize = 'contain';

            const mainRatingblock = getElement('div', ['main-rating-block']); // рейтинг по отзывам яндекса
            const wrapperRatingBlock = getElement('div', ['wrapper-rating-block'])
            const ratingPoint = getElement('div', ['rating-point'], {textContent: `Рейтинг бара ${params.main.pages[i].rating}/5`})
            const ratingStars = getElement('div', ['rating-stars'])
            for (let num = 0; num < 5; num++) {
				const star = getElement('img', ['star'], {
					alt: num ? '' : `Рейтинг ${params.main.pages[i].rating} из 5`,
					src: num < params.main.pages[i].rating ? 'img/star.svg' : 'img/star-o.svg'
				})
				ratingStars.append(star)
			}
           
            const mainAboutblock = getElement('div', ['main-about-block']); // о баре
            const titleAboutBlock = getElement('div', ['title-about-block'], {textContent: 'О нас'});
            const textAboutBlock = getElement('div', ['text-about-block']);
            textAboutBlock.textContent = params.main.pages[i].about;

            const mainGaleryBlock = getElement('div', ['main-galery-block']); // галерея фотографий
            const titleBlockPhotos = getElement('div', ['title-block-photos'], {textContent: 'Галерея'}); 
            const galeryBlockPhotos = getElement('div', ['galery-block-photos']);
            params.main.pages[i].photos.forEach(photo => {
                const galeryItemFigure = getElement('figure');
                
                const galeryItemPhoto = getElement('img', ['photos'], {
                    src: photo['link'],
                    alt: 'Фото'
                })
                galeryBlockPhotos.append(galeryItemFigure);
                galeryItemFigure.append(galeryItemPhoto);
            });

            const mainAddressBlock = getElement('div', ['main-address-block']); // Адрес
            const titleAddressBlock = getElement('div', ['title-address-block'], {textContent: 'Местоположение'});
            const addressText = getElement('div', ['address-text']);
            addressText.textContent = params.main.pages[i].address;
            const phoneNumber = getElement('div', ['phone-number']);
            phoneNumber.textContent = 'Телефон: ' + params.main.pages[i].phone;
            const photosMapAddress = getElement('div', ['photos-map-address']);
            const photosMap = getElement('img', ['photos-map'], {
                src: params.main.pages[i].mapPhoto,
                alt: 'Фото карты',
            })


            containerDiv.append(titlePageContainer);
            titlePageContainer.append(titlePage); // вертикальный текст
            titlePageContainer.append(mainPhotoPageContainer); // лого бара
            containerDiv.append(mainRatingblock); // рейтинг по отзывам яндекса
            mainRatingblock.append(wrapperRatingBlock);
            wrapperRatingBlock.append(ratingPoint, ratingStars);
            containerDiv.append(mainAboutblock); // о баре
            mainAboutblock.append(titleAboutBlock, textAboutBlock);
            containerDiv.append(mainGaleryBlock); // галерея фотографий
            mainGaleryBlock.append(titleBlockPhotos, galeryBlockPhotos);
            containerDiv.append(mainAddressBlock); //  Адрес
            mainAddressBlock.append(titleAddressBlock, addressText, phoneNumber, photosMapAddress);
            photosMapAddress.append(photosMap);
        }
        document.body.scrollTop = 0;
    });
});

// заполнение .main > .container
const titlePageContainer = getElement('div', ['title-page-container']);
const titlePage = getElement('h3', ['title-page']);  // вертикальный текст
titlePage.textContent = params.main.pages[0].title;

const mainPhotoPageContainer = getElement('div', ['main-photo-page-container']); // лого бара
mainPhotoPageContainer.style.backgroundImage = 'url('+params.main.pages[0].logo+')';
mainPhotoPageContainer.style.backgroundPosition = 'center';
mainPhotoPageContainer.style.backgroundRepeat = 'no-repeat';
mainPhotoPageContainer.style.backgroundSize = 'contain';

const mainRatingblock = getElement('div', ['main-rating-block']); // рейтинг по отзывам яндекса
const wrapperRatingBlock = getElement('div', ['wrapper-rating-block'])
const ratingPoint = getElement('div', ['rating-point'], {textContent: `Рейтинг бара ${params.main.pages[0].rating}/5`})
const ratingStars = getElement('div', ['rating-stars'])
for (let num = 0; num < 5; num++) {
    const star = getElement('img', ['star'], {
        alt: num ? '' : `Рейтинг ${params.main.pages[0].rating} из 5`,
        src: num < params.main.pages[0].rating ? 'img/star.svg' : 'img/star-o.svg'
    })
    ratingStars.append(star)
}

const mainAboutblock = getElement('div', ['main-about-block']); // о баре
const titleAboutBlock = getElement('div', ['title-about-block'], {textContent: 'О нас'});
const textAboutBlock = getElement('div', ['text-about-block']);
textAboutBlock.textContent = params.main.pages[0].about;

const mainGaleryBlock = getElement('div', ['main-galery-block']); // галерея фотографий
const titleBlockPhotos = getElement('div', ['title-block-photos'], {textContent: 'Галерея'}); 
const galeryBlockPhotos = getElement('div', ['galery-block-photos']);
params.main.pages[0].photos.forEach(photo => {
    const galeryItemFigure = getElement('figure');
    
    const galeryItemPhoto = getElement('img', ['photos'], {
        src: photo['link'],
        alt: 'Фото'
    })
    galeryBlockPhotos.append(galeryItemFigure);
    galeryItemFigure.append(galeryItemPhoto);
});

const mainAddressBlock = getElement('div', ['main-address-block']); // Адрес
const titleAddressBlock = getElement('div', ['title-address-block'], {textContent: 'Местоположение'});
const addressText = getElement('div', ['address-text']);
addressText.textContent = params.main.pages[0].address;
const phoneNumber = getElement('div', ['phone-number']);
phoneNumber.textContent = 'Телефон: ' + params.main.pages[0].phone;
const photosMapAddress = getElement('div', ['photos-map-address']);
const photosMap = getElement('img', ['photos-map'], {
    src: params.main.pages[0].mapPhoto,
    alt: 'Фото карты',
})


containerDiv.append(titlePageContainer);
titlePageContainer.append(titlePage); // вертикальный текст
titlePageContainer.append(mainPhotoPageContainer); // лого бара
containerDiv.append(mainRatingblock); // рейтинг по отзывам яндекса
mainRatingblock.append(wrapperRatingBlock);
wrapperRatingBlock.append(ratingPoint, ratingStars);
containerDiv.append(mainAboutblock); // о баре
mainAboutblock.append(titleAboutBlock, textAboutBlock);
containerDiv.append(mainGaleryBlock); // галерея фотографий
mainGaleryBlock.append(titleBlockPhotos, galeryBlockPhotos);
containerDiv.append(mainAddressBlock); //  Адрес
mainAddressBlock.append(titleAddressBlock, addressText, phoneNumber, photosMapAddress);
photosMapAddress.append(photosMap);

