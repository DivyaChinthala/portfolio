import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Add Mongo URI to .env.local");
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: true, // Ensure retryWrites is enabled
  tls: true, // Ensure TLS is enabled for secure connections
  tlsAllowInvalidCertificates: false, // Adjust based on your certificate setup
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so we can reuse the client
  // across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
