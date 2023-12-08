const products = [
    {
        id: 1,
        name: "The Squirrel",
        category: "Kids",
        img: 'https://i.postimg.cc/x8fKGy9x/9780241541975.jpg',
        description: 'Best book ever',
        price: 19,
        stock: 4
    }, 
    {
        id: 2,
        name: "Peter Rabbit",
        category: "Kids",
        img: 'https://i.postimg.cc/d3z7fsbr/Screenshot-2023-12-02-at-22-55-03.png',
        description: 'Best book ever',
        price: 6,
        stock: 5
    },
    {
        id: 3,
        name: "Jolly Christmas",
        category: "Teens",
        img: 'https://i.postimg.cc/mr9NTgdw/9780141340111.jpg',
        description: 'Best book ever',
        price: 6,
        stock: 5
    },
    {
        id: 4,
        name: "Treasury",
        category: "Kids books",
        img: 'https://i.postimg.cc/DZdrbY34/9780711264168.webp',
        description: 'Best book ever',
        price: 6,
        stock: 5
    },
    {
        id: 5,
        name: "That's not m y Christmas tree",
        category: "Kids books",
        img: 'https://i.postimg.cc/xTdvcRxq/9781803707778.jpg',
        description: 'Best book ever',
        price: 6,
        stock: 5
    },
    {
        id: 6,
        name: "Don't tickle Santa!",
        category: "Kids books",
        img: 'https://i.postimg.cc/rsf5f0m8/9781805313021.jpg',
        description: 'Best book ever',
        price: 6,
        stock: 5
    },
    {
        id: 7,
        name: "Whale of a Time",
        category: "General",
        img: 'https://i.postimg.cc/Vsg9fTF3/9781839942013.jpg',
        description: 'Best book ever',
        price: 6,
        stock: 5
    },
    {
        id: 8,
        name: "Peekaboo",
        category: "Kids",
        img: 'https://i.postimg.cc/XJ0Kq6m0/9781839946783.webp',
        description: 'Best book ever',
        price: 6,
        stock: 5
    }
]

// export the products in a promise with a timeout of 2 sec
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2)
    })
}

// exporta un solo object producto
export const getProductById = (id) => {
    const productId = parseInt(id, 10)
    return new Promise((resolve) => {
        setTimeout(()=> {
            const product = products.find((prod) => prod.id === productId)
            resolve(product)
        }, 2000)
    })
}


export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsFiltrados = products.filter((prod) => prod.category === category)
            resolve(productsFiltrados)
        }, 2000)
    })
}
