const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
const PORT = 4000;
const userRoutes = express.Router();
var obj_search = ""
var user_pro = ""
var sort_type = ""
var quantity_minus = ""
let User = require('./models/user');
let Product = require('./models/product')

app.use(cors());
app.use(bodyParser.json());

function compare(a,b) {
console.log(localStorage.getItem("sort_by"))
    if(localStorage.getItem("sort_by")==="price")
    {
        const priceA = a.price;
        const priceB = b.price;
    }
    if(localStorage.getItem("sort_by")==="quantity")
    {
        const priceA = a.quantity_remain;
        const priceB = b.quantity_remain;
    }
    let comparison = 0;
    if (priceA > priceB) {
      comparison = 1;
    } else if (priceA < priceB) {
      comparison = -1;
    }
    return comparison;
  }
//   function set_sort() {
//     if(localStorage.getItem("sort_by")==="price")
//     {
//         return "1"
//     }
//     else if(localStorage.getItem("sort_by")==="quantity")
//     {
//         return "2"
//     }

//   }
// function set_sort()

// Connection to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established succesfully.");
})

// API endpoints

// Getting all the users
userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

// Adding a new user
userRoutes.route('/add').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'User': 'User added successfully'});
        })
        .catch(err => {
            res.status(400).send('Error');
        });
});

// add a new product
userRoutes.route('/addproduct').post(function(req, res) {
    // console.log("enter") 
    let user = new Product(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'User': 'User added successfully'});
        })
        .catch(err => {
            res.status(400).send('Error');
        });
});



// Login page
userRoutes.route('/login').post(function(req, res) {
    // console.log("enterr")
    user_pro = req.body.username
    // console.log(user_pro)
    User.find({username : req.body.username}, function(err,user_exist){
        if(err)
        {
            console.log(err);
        }
        if(!user_exist.length)
        {
            console.log("User does not exist")
            // console.log("1")
            res.send("1")
        }
        else
        {
            // console.log("not")
            User.find({email : req.body.email}, function(err,user_exist2){
                if(err)
                {
                    console.log(err);
                }
                if(!user_exist2.length)
                {
                    // console.log("2")
                    // console.log("User does not exist")
                    res.send("2")
                }
                else
                {
                    // console.log(user_exist[0].type_of_user)
                    if(user_exist[0].type_of_user==="customer")
                    {
                        // console.log("3")
                        console.log("customer")
                        res.send("3")
                    }
                    if(user_exist[0].type_of_user==="vendor")
                    {
                        // console.log("4")
                        console.log("vendor")
                        res.send("4")
                    }
                }
            });
        }
    });
});

//show product
userRoutes.route('/show').get(function(req, res) {
    name = req.body.name
    console.log(name)
    Product.find(function(err, Pro) {
        if (err) {
            console.log(err);
        } else {
            // console.log(Pro)
            res.json(Pro);
        }
    });
});

userRoutes.route('/my-show').get(function(req, res) {
    // name = req.body.username
    // console.log(user_pro)
    // console.log(name)
    Product.find({username : user_pro },function(err, Pro) {
        if (err) {
            console.log(err);
        } else {
            // console.log(Pro)
            res.json(Pro);
        }
    });
});


//show product
userRoutes.route('/dispatched').get(function(req, res) {
    name = req.body.name
    console.log(name)
    Product.find({is_dispatch : '1'}, function(err, Pro) {
        if (err) {
            console.log(err);
        } else {
            // console.log(Pro)
            res.json(Pro);
        }
    });
});

userRoutes.route('/dispatch-show').get(function(req, res) {
    name = req.body.name
    console.log(name)
    Product.find({is_dispatch : '0'}, function(err, Pro) {
        if (err) {
            console.log(err);
        } else {
            // console.log(Pro)
            res.json(Pro);
        }
    });
});

userRoutes.route('/dispatch-change').get(function(req, res) {
    // console.log("heee")
    Product.findOneAndUpdate(
        { _id: req.query.id},
        { $set: {is_dispatch: '1'} },
        { new: true },
        (err, updated_data) => {
            if(err) {
                console.log("update not done");
            }
            else {
                res.json(updated_data);
            }
        }
    );
    // console.log(req.body)
});

userRoutes.route('/buy_product').get(function(req, res) {
    console.log("heeeyaa")
    // console.log(localStorage.getItem("quantity_ask"))
    Product.findOneAndUpdate(
        { _id: req.query.id},
        { $inc: {quantity_remain: quantity_minus}},
        { new: true },
        (err, updated_data) => {
            if(err) {
                console.log("update not done");
            }
            else {
                res.json(updated_data);
            }
        }
    );
    // console.log(req.body)
});

// userRoutes.route('/buy_product').get(function(req, res) {
//     Product.findById(req.body.id , function(err,updated_data) {
//         // console.log(req.body.quantity)
//         // updated_data.quantity = updated_data.quantity - quantity_minus;
//         // console.log(updated_data.quantity)
//         res.json(updated_data)
//     });
// });


userRoutes.route('/product_search').post(function(req, res) {
    obj_search = req.body.name
    sort_type = req.body.sort_type
    console.log(sort_type)
    res.send("1")
    // console.log("pro_search")
});

userRoutes.route('/quantity_post').post(function(req, res) {
    quantity_minus = req.body.quantity - 2*req.body.quantity
    // sort_type = req.body.sort_type
    console.log(quantity_minus)
    res.send("1")
    // console.log("pro_search")
});

userRoutes.route('/sea_page').get(function(req, res) {
    if(sort_type==='1')
    {
    Product.find({name : obj_search }, function(err,obj){
        if(err)
        {
            console.log(err);
        }
        else {
            res.json(obj)
        }
    }).sort({'price': 1})
    }
    else
    {
        console.log("quantity")
        Product.find({name : obj_search }, function(err,obj){
            if(err)
            {
                console.log(err);
            }
            else {
                res.json(obj)
            }
        }).sort({'quantity_remain': -1})
    }
});


// Getting a user by id
userRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
    });
});

app.use('/', userRoutes);

app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});
