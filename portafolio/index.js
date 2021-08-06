// IMAGENES QUE SE VAN A CARGAR - ITEMS

const listItem = document.querySelector('.grid')
const item = (name, image, labels) => {
    const element = document.createElement('div')
    element.classList.add('item')
    element.setAttribute('data-category', name)
    element.setAttribute('data-labels', labels)
    element.innerHTML = `
        <div class="item-content">
            <img class="item__image" src="./img/${image}.jpg" alt="${image}">
        </div>
    `
    listItem.appendChild(element)
}

item('animal', 'animal1', 'ardilla corre tronco salta')
item('thing', 'cosa1', 'cosa naranja dos numeros casillero')
item('flowers', 'flowers1', 'naranja flores jardin rosedal')
item('fruit', 'fruta1', 'fruta naranja cuchillo mesa mitad')
item('animal', 'animal2', 'perro sonrisa collar jardin')
item('thing', 'cosa2', 'cosa lana manos cuello persona')
item('flowers', 'flowers2', 'flores rosas rojas petalos')
item('fruit', 'fruta2', 'fruta mano mango frutas chompa')
item('thing', 'cosa3', 'cosa naranja auto viaje calle')
item('thing', 'cosa4', 'cosa crema libro blanco cuarto')



// MUURI CONFIGURATION


const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
})

window.addEventListener('load', () => {
    //De esta manera ordena las cordenadas de cada item
    grid.refreshItems().layout()
    document.getElementById('grid').classList.add('grid__show-image')

    const listLinksItem = document.querySelectorAll('.categories__category')
    listLinksItem.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            // le damor un hover 
            listLinksItem.forEach((element) => element.classList.remove('categories_category-active'))

            //filtramos las imagenes con muuri desde los enlaces
            link.classList.add('categories_category-active')
            e.target.id === 'all' ? grid.filter(`[data-category]`) : grid.filter(`[data-category = "${e.target.id}"]`)
        })
    })

    // Filtrar las imagenes con muuri desde el search o input
    document.querySelector('.header__search').addEventListener('input', (e) => {
        const { value } = e.target
        grid.filter((item) => {
            return item.getElement().dataset.labels.includes(value)
        })
    })

    // mostrar descripcion de cada imagen
    document.querySelectorAll('.item img').forEach((item) => {
        item.addEventListener('click', (e) => {
            document.querySelector('.overlay').classList.add('overlay-active')
            // const description = item.parentNode.parentNode.dataset.description
            document.querySelector('.overlay__description').innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In voluptatem quia veritatis perferendis at beatae totam magnam doloribus quos libero voluptate delectus consectetur iusto rem, aspernatur distinctio sapiente, reprehenderit qui!'
            const ruta = item.getAttribute('src');
            document.querySelector('.overlay img').src = ruta;
        })
    })

    document.querySelector('.overlay__button-close').addEventListener('click', () => {
        document.querySelector('.overlay').classList.remove('overlay-active')
    })

    document.querySelector('.overlay').addEventListener('click', (e) => {
        e.target.id === 'overlay' ? document.getElementById('overlay').classList.remove('overlay-active') : ''
    })
})



