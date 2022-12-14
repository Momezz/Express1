const express = require("express");
const app = express();
const date = new Date();
const port = 8080;

const personalInformation = [
    {
    "name": "Julian Gomez",
    "age": 36,
    "email": "julgomez14@gmail.com",
    "phone": "30000000001",
    "addres": "Avenida siempre viava",
    "city": "Medellin",
    "-links": [
        -{
            "name": "LinkedIn",
            "url": "https://www.linkedin.com/in/juliangm",
        },
        -{
            "name": "GitHub",
            "url": "https://www.github.com/in/juliangm",
        },
        {
        "name": "Twitter",
        "url": "https://www.twitter.com/in/juliangm",
        },
    ],
    "website": "https://juliangomem.dev",
    "-skills": [
        -{
            "name": "javaScript",
            "level": "junior",
        },
        -{
            "name": "React",
            "level": "junior",
        },
        -{
            "name": "Node",
            "level": "junior",
        },
        -{
            "name": "HTML",
            "level": "junior",
        },
    ],
}
];

const products = [
    {
      "id": 1,
      "title": "new Title marcos",
      "price": 100004,
      "description": "new Description",
      "images": [
        "https://api.lorem.space/image/shoes?w=640&h=480&r=5193",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=2221",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=2672"
      ]
    },
    {
      "id": 3,
      "title": "new try",
      "price": 29,
      "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      "images": [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4308",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4555",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4493"
      ]
    },
    {
      "id": 4,
      "title": "Licensed Plastic Table",
      "price": 808,
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "images": [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6769",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6810",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=2350"
      ]
    },
    {
      "id": 5,
      "title": "Refined Plastic Shirt",
      "price": 252,
      "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      "images": [
        "https://api.lorem.space/image/watch?w=640&h=480&r=9592",
        "https://api.lorem.space/image/watch?w=640&h=480&r=6436",
        "https://api.lorem.space/image/watch?w=640&h=480&r=4565"
      ]
    }
  ];

  app.get("/api/products", (req, res)=>{
    res.json(products);
});

app.get("/info", (req, res)=>{
    res.send(`
    <h1>Our store has info for ${products.length} products</h1>
    ${date}`);
});

app.get("/about", (req, res)=>{
    res.json(personalInformation)
});
  
  app.listen(port, () => {
    console.log("Servicio en puerto", port)
});
