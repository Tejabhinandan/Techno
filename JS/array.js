var bikes = ["Ducati", "Ninja", "tiger", "harley", "rx 100"];

for (var i = 0; i < bikes.length; i++) {
  console.log("bike in index", bikes[i]);
}
for ( i < bikes.length - 1; i = 0; i--) {
  console.log("bike in index", bikes[i]);
}

var books = [
    {
        title:"java",
        Price:500
    },
    {
        title:"PYTHON",
        Price:1500
    },
    {
        title:"java script",
        Price:1700
    },
    {
        title:"c",
        Price:200
    },
]

    for(var i=0;i<books.length;i++)
    {
        if(books[i].Price>=1000)
        {
            console.log(books[i].title)
        }
    }
    for(var i=0;i<books.length;i++)
    {
        if(books[i].title.length>4)
        console.log(books[i])
    }
