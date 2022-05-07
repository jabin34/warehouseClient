import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='container mx-auto pt-5'>
 <Card className='mb-3'>
  <Card.Header><h5>Differences Between JavaScript vs Node JS</h5></Card.Header>
  <Card.Body>
    JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
   JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).
   Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.
  
  </Card.Body>
</Card>
<Card className='mb-3'>
  <Card.Header><h5>When should you use nodejs and when should you use mongodb?</h5></Card.Header>
  <Card.Body>
  MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.

NodeJS's responsibilty is especially to execute your application.
Suppose you are building a website and you need a database to store the data or information so here you can use MongoDB but to be connected with MongoDB you need a connector, so here you can use NodeJS which will help your website to run outside of server.
  
  </Card.Body>
</Card>
<Card className='mb-3'>
  <Card.Header><h5>Differences between sql and nosql databases?</h5></Card.Header>
  <Card.Body>
  Structured Query language (SQL) pronounced as “S-Q-L” or sometimes as “See-Quel” is the standard language for dealing with Relational Databases. A relational database defines relationships in the form of tables.
  SQL programming can be effectively used to insert, search, update, delete database records.
  NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect terabytes of user data every single day.
  </Card.Body>
</Card>
<Card className='mb-3'>
  <Card.Header><h5>What is the purpose of jwt and how does it work?</h5></Card.Header>
  <Card.Body>
  JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
  To put it simply, a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender’s identity. The important distinction here is lack of meaning within the characters themselves. 
  A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

Once decoded, you will get two JSON strings:

1.The header and the payload.
2.The signature.
Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.
  </Card.Body>
</Card>
        </div>
    );
};

export default Blogs;