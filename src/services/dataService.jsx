var catalog = [
    {
        _id: "1",
        price: 3.99,
        stock: 100,
        title: "Sargento Cheddar",
        image: "sargento-cheddar.jpeg",
        discount: 10,
        category: "Cheese",
      },
      {
        _id: "2",
        price: 3.99,
        stock: 100,
        title: "Sargento Pepper Jack",
        image: "sargento-pepper-jack.jpeg",
        discount: 10,
        category: "Cheese",
      },
      {
        _id: "34",
        price: 4.99,
        stock: 100,
        title: "Mexican Four Cheese",
        image: "mexican-four-cheese.webp",
        discount: 0,
        category: "Cheese",
      },
      {
        _id: "4",
        price: 2.89,
        stock: 100,
        title: "Queso Fresco",
        image: "queso-fresco.jpg",
        discount: 0,
        category: "Cheese",
      },
      {
        _id: "5",
        price: 7.99,
        stock: 100,
        title: "Party Cheese Tray",
        image: "party-cheese-tray.webp",
        discount: 0,
        category: "Cheese",
      },
      {
        _id: "6",
        price: 1.49,
        stock: 100,
        title: "Hershey Bar",
        image: "hershey-bar.webp",
        discount: 0,
        category: "Chocolate",
      },
      {
        _id: "7",
        price: 1.49,
        stock: 100,
        title: "Hershey Almonds Bar",
        image: "hershey-almond.jpg",
        discount: 0,
        category: "Chocolate",
      },
      {
        _id: "8",
        price: 2.29,
        stock: 100,
        title: "Reeses King Size Bar",
        image: "reeses.jpg",
        discount: 0,
        category: "Chocolate",
      },
      {
        _id: "9",
        price: 7.99,
        stock: 100,
        title: "Dove Milk Chocolate",
        image: "dove-milk.webp",
        discount: 0,
        category: "Chocolate",
      },
      {
        _id: "10",
        price: 7.99,
        stock: 100,
        title: "Dove Dark Chocolate",
        image: "dove-dark.webp",
        discount: 0,
        category: "Chocolate",
      },
    ]


    class DataService{
      getCatalog(){
        //some instruction to
        //retrieve data from the actual server

        return catalog;
      }
    }

    export default DataService;