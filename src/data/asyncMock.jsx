const products = [
    {
        id: 1,
        name: "Diary of a CEO",
        category: "Diary",
        img: 'https://i.postimg.cc/PfMRkLJS/Screenshot-2023-12-02-at-22-53-27.png',
        precio: 19,
        stock: 5
    }, 
    {
        id: 2,
        name: "Peter Rabbit",
        category: "Kids books",
        img: 'https://i.postimg.cc/d3z7fsbr/Screenshot-2023-12-02-at-22-55-03.png',
        precio: 6,
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
