const workshops = [
    {
      title: "Salsa Dancing",
      img:
        "https://images.unsplash.com/photo-1545959570-a94084071b5d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2Fsc2ElMjBkYW5jaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description:
        "In these dance class the student, male and female, will learn the fundamental principles of partnering, dance floor etiquette, timing, basic foot work, full and half turns, 'cross body lead', and useful salsa dance patterns.",
      category: "Performing Arts",
      date: "2021-01-08T19:00:00.000Z",
      length: 90,
      credits: 15,
      maxParticipants: 18,
      particpants: [],
      location: "Freestyle Dance Center, Carrer de Pavia, 52, 08028 Barcelona",
    },
    {
      title: "Hip Hop for Beginners",
      img:
        "https://images.pexels.com/photos/5368956/pexels-photo-5368956.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description:
        "Are you interested in hip hop dancing but don’t know where to start? The focus of this class: You understanding the dance and feeling confident about yourself.Whether you’re looking for choreography to learn or moves to just be able to use on the dance floor, this class is perfect for you.",
      category: "Performing Arts",
      date: "2021-01-20T17:00:00.000Z",
      length: 120,
      credits: 20,
      maxParticipants: 15,
      particpants: [],
      location: "Freestyle Dance Center, Carrer de Pavia, 52, 08028 Barcelona",
    },
    {
      title: "Singing Workshop",
      img:
        "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2luZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description: "Want to learn how to sing? Join our workshop!!",
      category: "Performing Arts",
      date: "2021-01-30T15:00:00.000Z",
      length: 90,
      credits: 15,
      maxParticipants: 5,
      particpants: [],
      location:
        "Institut Barcelonès d'Art, Carrer de Casanova, 117, 08036 Barcelona",
    },
    {
      title: "Piano Class for Beginners",
      img:
        "https://images.unsplash.com/photo-1552422535-c45813c61732?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGlhbm98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description:
        "Want to learn the basics of playing the piano? Join our workshop!!",
      category: "Performing Arts",
      date: "2021-05-28T16:00:00.000Z",
      length: 90,
      credits: 15,
      maxParticipants: 3,
      particpants: [],
      location:
        "Institut Barcelonès d'Art, Carrer de Casanova, 117, 08036 Barcelona",
    },
    {
      title: "Drama Workshop",
      img:
        "https://images.unsplash.com/photo-1499720843949-d9e6f318dca0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJhbWF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description:
        "Want to be the next Brad Pitt? Here you will be taught by real Hollywood actors. ",
      category: "Performing Arts",
      date: "2021-04-13T09:00:00.000Z",
      length: 120,
      credits: 20,
      maxParticipants: 20,
      particpants: [],
      location:
        "Institut Barcelonès d'Art, Carrer de Casanova, 117, 08036 Barcelona",
    },
    {
      title: "Ballet Class",
      img:
        "https://images.unsplash.com/photo-1555656220-46e30749d330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsbGV0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description: "Learn how to dance like a real Ballerina in just 2 hours! ",
      category: "Performing Arts",
      date: "2021-03-11T10:00:00.000Z",
      length: 120,
      credits: 20,
      maxParticipants: 10,
      particpants: [],
      location: "Freestyle Dance Center, Carrer de Pavia, 52, 08028 Barcelona",
    },
    {
      title: "Improv Workshop",
      img:
        "https://images.unsplash.com/photo-1559781310-d93593568b8b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJhbWElMjBncm91cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description:
        "This fun, low-pressure afternoon of games and play is suitable for anyone, from acting hot shots to total newbies. All levels and language abilities are catered for, and the focus is on having fun and giving it a go. Secondary benefits may include improved confidence, stress relief, giggling fits, new friends and spontaneous outbursts of joy!",
      category: "Performing Arts",
      date: "2021-04-01T16:00:00.000Z",
      length: 120,
      credits: 20,
      maxParticipants: 10,
      particpants: [],
      location:
        "Institut Barcelonès d'Art, Carrer de Casanova, 117, 08036 Barcelona",
    },
    {
      title: "Yoga Workshop",
      img:
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8eW9nYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description:
        "Get your 30-minute flow on with climber, surfer and yoga instructor Meg Tuazon-Shemai from Summit to Sea Yoga & Retreats.",
      category: "Sports",
      date: "2021-05-31T06:30:00.000Z",
      length: 30,
      credits: 5,
      maxParticipants: 20,
      particpants: [],
      location: "Barceloneta Beach",
    },
    {
      title: "Aerobics in the Park",
      img:
        "https://images.unsplash.com/photo-1564282350350-a8355817fd2e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YWVyb2JpY3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description: "Dance based fitness in the park.",
      category: "Sports",
      date: "2021-04-31T06:30:00.000Z",
      length: 60,
      credits: 10,
      maxParticipants: 25,
      particpants: [],
      location: "Ciutadella Park",
    },
    {
      title: "Skateboarding Workshop",
      img:
        "https://images.unsplash.com/photo-1566796195789-d5a59f97235b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2thdGVib2FyZGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description: "Learn how to skateboard like a pro on Barcelona streets.",
      category: "Sports",
      date: "2021-01-22T11:00:00.000Z",
      length: 120,
      credits: 20,
      maxParticipants: 8,
      particpants: [],
      location: "Skateplaza Born",
    },
    {
      title: "Kitesurfing",
      img:
        "https://images.unsplash.com/photo-1530091731612-0b2d7278ca14?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8a2l0ZXN1cmZpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description:
        "Sick of being inside due to Covid? Join us in the water and learn how to fly through the ocean!",
      category: "Sports",
      date: "2021-03-05T10:00:00.000Z",
      length: 180,
      credits: 30,
      maxParticipants: 3,
      particpants: [],
      location: "Barceloneta Beach",
    },
    {
      title: "Mountainbiking on Montserrat",
      img: "https://images.unsplash.com/photo-1533589067335-b0114bd0ab00?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=769&q=80",
      description:
        "Are you an adrenaline junkie? Join our professional mountainbikers for an adventurous trip on the beautiful Montserrat.",
      category: "Sports",
      date: "2021-02-01T07:00:00.000Z",
      length: 120,
      credits: 20,
      maxParticipants: 7,
      particpants: [],
      location: "Montserrat",
    },
    {
      title: "Intro to Beach Volleyball",
      img:
        "https://images.unsplash.com/photo-1556732282-595ef530909c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwdm9sbGV5YmFsbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description:
        "Perfect start for those who want to try, learn and train organized beach volleyball.",
      category: "Sports",
      date: "2021-04-01T06:00:00.000Z",
      length: 120,
      credits: 20,
      maxParticipants: 20,
      particpants: [],
      location: "Barceloneta Beach",
    },
    {
      title: "Hair Braiding Workshop",
      img:
        "https://images.pexels.com/photos/1684320/pexels-photo-1684320.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description: "Hair Braiding Workshop - Advanced",
      category: "Beauty",
      date: "2021-02-04T12:00:00.000Z",
      length: 90,
      credits: 15,
      maxParticipants: 4,
      particpants: [],
      location: "Beth's Hair Salon, Av. de Francesc Cambó, 13, 08003 Barcelona",
    },
  
    {
      title: "Nail Art Workshop",
      img:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuaWN1cmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description:
        "Sick of messy nails that break after one day? We've got you covered!",
      category: "Beauty",
      date: "2021-03-16T10:00:00.000Z",
      length: 90,
      credits: 15,
      maxParticipants: 10,
      particpants: [],
      location:
        "Bellesa de Fantasy Nails, Carrer de Sant Pere Més Baix, 34, 08003 Barcelona",
    },
    {
      title: "Henna Painting",
      img:
        "https://images.unsplash.com/photo-1525135850648-b42365991054?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGVubmElMjBwYWludGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description:
        "Learn the beautiful art of Henna and paint your best friend's arm.",
      category: "Beauty",
      date: "2021-03-20T11:00:00.000Z",
      length: 90,
      credits: 15,
      maxParticipants: 10,
      particpants: [],
      location:
        "Bellesa de Fantasy Nails, Carrer de Sant Pere Més Baix, 34, 08003 Barcelona",
    },
  
    {
      title: "Hair Styling Class",
      img:
        "https://images.unsplash.com/photo-1583331030595-6601e6c7b5d5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGhhaXJzdHlsZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description:
        "Save money for the hairdresser. Learn how to do beautiful hairstyles on yourself or your friends for any occasion.",
      category: "Beauty",
      date: "2021-02-02T17:00:00.000Z",
      length: 120,
      credits: 20,
      maxParticipants: 10,
      particpants: [],
      location: "Beth's Hair Salon, Av. de Francesc Cambó, 13, 08003 Barcelona",
    },
  
    {
      title: "Photography Masterclass",
      img:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description:
        "All you need is a camera. After an intense 3 hour workshop you will be the master of photography.",
      category: "Creativity",
      date: "2021-01-05T09:00:00.000Z",
      length: 180,
      credits: 30,
      maxParticipants: 8,
      particpants: [],
      location:
        "Institut Barcelonès d'Art, Carrer de Casanova, 117, 08036 Barcelona",
    },
    {
      title: "Painting with Oils",
      img:
        "https://images.unsplash.com/photo-1578321272066-408f68f92cf4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description:
        "Be the new Leonardo da Vinci. Get all the skills you need from our legendary teachers.",
      category: "Creativity",
      date: "2021-01-04T11:30:00.000Z",
      length: 240,
      credits: 40,
      maxParticipants: 16,
      particpants: [],
      location: "Carrer del Doctor Dou 4, 08001 Barcelona",
    },
    {
      title: "Acrylic Painting",
      img:
        "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGFjcnlsaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description:
        "Be the new Leonardo da Vinci. Get all the skills you need from our legendary teachers.",
      category: "Creativity",
      date: "2021-02-10T11:30:00.000Z",
      length: 240,
      credits: 40,
      maxParticipants: 16,
      particpants: [],
      location: "Carrer del Doctor Dou 4, 08001 Barcelona",
    },
    {
      title: "Pottery Workshop",
      img:
        "https://images.unsplash.com/photo-1508269151431-a34449ca161d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cG90dGVyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description: "Skip ikea. Make your own cutlery.",
      category: "Creativity",
      date: "2021-03-10T11:30:00.000Z",
      length: 180,
      credits: 30,
      maxParticipants: 19,
      particpants: [],
      location: "Blue Pottery, Carrer del Portal Nou, 5, 08003 Barcelona",
    },
    {
      title: "Ceramics Painting",
      img:
        "https://images.unsplash.com/photo-1599958336351-80c901c690c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2VyYW1pY3MlMjBwYWludGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description: "Paint your heart out in our artsy workshop.",
      category: "Creativity",
      date: "2021-04-13T12:30:00.000Z",
      length: 180,
      credits: 30,
      maxParticipants: 22,
      particpants: [],
      location:
        "Studio Kanay - Taller de Ceràmica Barcelona, Carrer del Bruc, 5, 08010 Barcelona",
    },
    {
      title: "Creative Writing",
      img:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlYXRpdmUlMjB3cml0aW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description:
        "Start your writing journey through practical exercises that boost your confidence and unlock your creative potential in a safe and supportive environment.",
      category: "Other",
      date: "2021-01-17T10:00:00.000Z",
      length: 180,
      credits: 30,
      maxParticipants: 11,
      particpants: [],
      location:
        "Satan's Coffee Corner, Carrer de l'Arc de Sant Ramon del Call, 11, 08002 Barcelona",
    },
    {
      title: "Poetry Writing",
      img:
        "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ldHJ5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      description:
        "Why just write poems when you can write better ones? This course is built on the notion that the most exciting writing begins after the first draft. It is specifically for folks who believe that writing poems just to express oneself is like using the Internet just for email.",
      category: "Other",
      date: "2021-01-19T10:00:00.000Z",
      length: 180,
      credits: 30,
      maxParticipants: 11,
      particpants: [],
      location:
        "Satan's Coffee Corner, Carrer de l'Arc de Sant Ramon del Call, 11, 08002 Barcelona",
    },
    {
      title: "Carpentry Basics",
      img:
        "https://images.unsplash.com/photo-1463082459669-fd1ca1692fea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FycGVudHJ5JTIwd29ya3Nob3B8ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60",
      description: "Learn how to make your own cute little bedside table.",
      category: "Other",
      date: "2021-01-19T14:00:00.000Z",
      length: 180,
      credits: 30,
      maxParticipants: 11,
      particpants: [],
      location:
        "Barcelona Wood Workshops, Carrer del Pacífic, 29, 08027 Barcelona",
    },
    {
      title: "Mixology Workshop",
      img:
        "https://images.unsplash.com/photo-1574449126805-6f11acf5a8c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      description:
        "How can you resist the opportunity to craft a tasty cocktail? Learning how to mix great drinks is fun and it is not difficult. If you're looking to dive deeper into the world of the bar then this workshop is just what you need. With a few basic tools and a handful of tips and tricks, your next drinks can be better than any you've made before.",
      category: "Food & Drink",
      date: "2021-01-09T18:00:00.000Z",
      length: 90,
      credits: 15,
      maxParticipants: 10,
      particpants: [],
      location: "Sons in Law, Carrer de Margarit, 13, 08004 Barcelona",
    },
    {
      title: "Learn how to make sushi!",
      img:
        "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "Discover how to make sushi on this highly-rated sushi-making course for beginners. Learn everything you need to know from equipment and preparation, how to make sushi rice, cutting fish, making sushi and a lot more.",
      category: "Food & Drink",
      date: "2021-01-16T15:00:00.000Z",
      length: 90,
      credits: 15,
      maxParticipants: 10,
      particpants: [],
      location: "SUSHI TIME, Carrer de Muntaner, 18, 08011 Barcelona",
    },
    {
      title: "Cupcake Time",
      img:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      description:
        "Love cupcakes? In this workshop, you will be taught the skills, tips and tricks you need to create great looking cupcake, including how work with different types of icing and frosting, various piping techniques as well as how to get your cupcakes to shine with edible decor such as sprinkles and glitter",
      category: "Food & Drink",
      date: "2021-02-06T17:00:00.000Z",
      length: 120,
      credits: 20,
      maxParticipants: 10,
      particpants: [],
      location: "Cupcake’s coffee, Carrer del Rosselló, 142, 08036 Barcelona",
    },
    {
      title: "Authentic Indian Cooking",
      img:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "If you want to learn how to make your favourite Indian dish or know someone who would, then our workshop is a great place to start. Focusing on key favourites such as how to make your own dhal or a korma, you'll learn classic Indian dishes and techniques.",
      category: "Food & Drink",
      date: "2021-02-12T16:00:00.000Z",
      length: 180,
      credits: 30,
      maxParticipants: 5,
      particpants: [],
      location:
        "Halal WildMeat Indian Food, Carrer de Sant Pau, 28, Local 1, 08001 Barcelona",
    },
    {
      title: "Chocolate Chip Cookie Workshop",
      img:
        "https://images.pexels.com/photos/1775283/pexels-photo-1775283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "Have you wanted to be known the one who makes the absolute BEST chocolate chip cookies? Come to this workshop and learn the tips and tricks the make the difference between good cookie and amazing cookies! Join us!",
      category: "Food & Drink",
      date: "2021-03-15T16:00:00.000Z",
      length: 120,
      credits: 20,
      maxParticipants: 5,
      particpants: [],
      location: "Cupcake’s coffee, Carrer del Rosselló, 142, 08036 Barcelona",
    },
    {
      title: "Makeup for Beginners Workshop",
      img:
        "https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "This class is ideal for those who have a desire to step into the world of cosmetics and might not be too sure on how to get started. You will learn about various brushes and their uses, helpful tips to applying eye makeup, foundation and completing your look with lip color. No need to worry if you've never held a makeup brush.",
      category: "Beauty",
      date: "2021-01-12T12:00:00.000Z",
      length: 60,
      credits: 10,
      maxParticipants: 10,
      particpants: [],
      location:
        "Glow Makeup Studio, Carrer de Pelai, 9, 2º 2ª A, 08001 Barcelona",
    },
    {
      title: "Dramatic Eyeshadow Masterclass",
      img:
        "https://images.pexels.com/photos/3912572/pexels-photo-3912572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "Makeup palettes are a great way to try a lot of shades in one compact package, but we often end up using one color and neglecting the rest. When you know how to use a face palette properly, you can get the most out of them. Come to this workshop and learn how to create dramatic effects and bring out your eyes",
      category: "Beauty",
      date: "2021-01-12T16:00:00.000Z",
      length: 90,
      credits: 15,
      maxParticipants: 10,
      particpants: [],
      location:
        "Glow Makeup Studio, Carrer de Pelai, 9, 2º 2ª A, 08001 Barcelona",
    },
    {
      title: "Contouring Workshop",
      img:
        "https://edhacosmetics.es/wp-content/uploads/2019/05/contorno-cara-contouring-bronceador-1.png",
      description:
        "The art of highlighting and contouring is one trend that is here to stay and we all want to know how to do it. Our contouring highlighting workshop will equip you with all the skils to perfect this trend.",
      category: "Beauty",
      date: "2021-02-08T18:00:00.000Z",
      length: 120,
      credits: 20,
      maxParticipants: 10,
      particpants: [],
      location:
        "Glow Makeup Studio, Carrer de Pelai, 9, 2º 2ª A, 08001 Barcelona",
    },
    {
      title: "Business English",
      img:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Business English skills are essential for getting ahead at work. Improving your business English vocabulary and knowledge will help you work more effectively and open up new career opportunities.",
      category: "Languages",
      date: "2021-01-08T18:00:00.000Z",
      length: 90,
      credits: 15,
      maxParticipants: 10,
      particpants: [],
      location: "Sandwichez, C/ d'Aragó, 205, 08011 Barcelona",
    },
    {
      title: "General English Workshop - Intermediate",
      img:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      description:
        "Come to this workshop and practice your speaking skills on various topics with a Native host who will help you improve!",
      category: "Languages",
      date: "2021-02-20T19:00:00.000Z",
      length: 90,
      credits: 15,
      maxParticipants: 10,
      particpants: [],
      location: "365 Cafe, Carrer de la Princesa, 14, 08003 Barcelona",
    },
    {
      title: "Basic Mandarin",
      img:
        "https://www.thelanguageisland.com/wp-content/uploads/2018/09/Tips.jpg",
      description:
        "Learn basic Mandarin with us on this workshop. It may seem a bit daunting but all we need is to take that first step!",
      category: "Languages",
      date: "2021-03-04T19:00:00.000Z",
      length: 90,
      credits: 15,
      maxParticipants: 10,
      particpants: [],
      location: "365 Cafe, Carrer de la Princesa, 14, 08003 Barcelona",
    },
    {
      title: "Intermediate German Conversation",
      img:
        "https://www.languagelegos.com/wp-content/uploads/2018/09/17-reasons-to-learn-German-language...jpg",
      description:
        "Speak some German but have no one to practice with? Come to this workshop and improve your skills. You'll be fluent in no time!",
      category: "Languages",
      date: "2021-03-17T18:00:00.000Z",
      length: 90,
      credits: 15,
      maxParticipants: 10,
      particpants: [],
      location: "Sandwichez, C/ d'Aragó, 205, 08011 Barcelona",
    },
    {
      title: "French for Beginners",
      img:
        "https://seafranceholidays.com/wp-content/uploads/2019/10/Brief-History-Of-Origin-And-Evolution-Of-The-French-Language.png",
      description:
        "Come learn French and you will feel right at home when you visit the Côte d'Azur or Paris, the city of Love",
      category: "Languages",
      date: "2021-04-05T11:00:00.000Z",
      length: 90,
      credits: 15,
      maxParticipants: 10,
      particpants: [],
      location: "Granier, Carrer de Girona, 110, 08009 Barcelona",
    },
    {
      title: "Italian Survival for Traveling",
      img:
        "https://s3-ap-southeast-2.amazonaws.com/ish-oncourse-scc/afe0ad59-720b-46df-819c-b821bd337c81",
      description:
        "Next time you visit Italy, you will be able to have basic conversations, ask for directions, and order dishes using the right pronunciation! ",
      category: "Languages",
      date: "2021-04-14T16:00:00.000Z",
      length: 90,
      credits: 15,
      maxParticipants: 10,
      particpants: [],
      location: "Sandwichez, C/ d'Aragó, 205, 08011 Barcelona",
    },
    {
      title: "Knitting Workshop",
      img:
        "https://images.unsplash.com/photo-1541944743827-e04aa6427c33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80",
      description:
        "This workshop is for those beginners who can knit, whether that is one stitch or 100 stitches! You may have knitted a scarf or garter stitch squares and now you would like to learn some more skills.",
      category: "Creativity",
      date: "2021-04-21T15:00:00.000Z",
      length: 120,
      credits: 20,
      maxParticipants: 10,
      particpants: [],
      location:
        "all you knit is love, Carrer de la Barra de Ferro, 8, 08003 Barcelona",
    },
    {
      title: "Origami Workshop",
      img:
        "https://images.unsplash.com/photo-1593976024153-7b31b96d1685?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      description:
        "Did you know that Origami came from the Japanese words 'Oru' meaning 'to fold' and 'kami' meaninf 'paper'? And that's exactly what we do here - fold paper! There's nothing quite like the joy you get from transforming a plain square piece of paper into a container, animal, flower, etc. It still puts a smile on our faces when we complete an origami!",
      category: "Creativity",
      date: "2021-03-22T18:00:00.000Z",
      length: 90,
      credits: 15,
      maxParticipants: 10,
      particpants: [],
      location: "Granier, Carrer de Girona, 110, 08009 Barcelona",
    },
  ];

  module.exports = workshops;
  