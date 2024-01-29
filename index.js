const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());

const users = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com"
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "email": "bob@example.com"
    },
    {
      "id": 4,
      "name": "Alice Brown",
      "email": "alice@example.com"
    },
    {
      "id": 5,
      "name": "Charlie Davis",
      "email": "charlie@example.com"
    },
    {
      "id": 6,
      "name": "Eva White",
      "email": "eva@example.com"
    },
]




const uri = `mongodb+srv://Node24DB:W69Qwo3DlZ0gczuB@cluster0.fikwith.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('simple node server is running')
})

app.get('/users', (req, res) =>{
    res.send(users);
});

app.post('/users', (req, res) =>{
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
    console.log(user)
})

app.listen(port, () => {
  console.log(`simple node server is running on port ${port}`)
})