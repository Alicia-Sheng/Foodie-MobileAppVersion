const userInfo = {
  "img": require("../media/user/default.png"),
  "bcg": require("../media/user/user_background.jpg"),
  "username": "admin",
  "password": "111111",
  "email": "admin@brandeis.edu",
  "phone": "1234567890",
  "orders": [
    { "id": "1234", "date": "06/18/2020", "status": "Ready" },
    { "id": "2345", "date": "06/08/2020", "status": "Picked up" },
    { "id": "3456", "date": "06/01/2020", "status": "Cancelled" },
    { "id": "123", "date": "06/18/2020", "status": "Ready" },
    { "id": "234", "date": "06/08/2020", "status": "Picked up" },
    { "id": "345", "date": "06/01/2020", "status": "Cancelled" },
    { "id": "12", "date": "06/18/2020", "status": "Ready" },
    { "id": "23", "date": "06/08/2020", "status": "Picked up" },
    { "id": "34", "date": "06/01/2020", "status": "Cancelled" },
    { "id": "1", "date": "06/18/2020", "status": "Ready" },
    { "id": "2", "date": "06/08/2020", "status": "Picked up" },
    { "id": "3", "date": "06/01/2020", "status": "Cancelled" },
  ],
  "reviews": [
    {
      "name": "Caesar Salad",
      "location": "The Stein",
      "rating": 5,
      "text": "Delicious! I love vegetable!"
    },
    {
      "name": "Sausage, Egg & Cheese on Croissant",
      "location": "Dunkin Donuts",
      "rating": 3,
      "text": "Not that good!"
    },
    {
      "name": "Cheese Quesadilla",
      "location": "Sherman Dining Hall",
      "rating": 1,
      "text": "Ewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
    },
    {
      "name": "Latte",
      "location": "Starbucks Farber",
      "rating": 5,
      "text": "Amazing! The most tasty latte I have ever had!"
    },
    {
      "name": "French Toast Chicken",
      "location": "Einstein Bros. Bagels",
      "rating": 4,
      "text": "A little bit too salty. Overall is good."
    },
  ]
}

export default userInfo;