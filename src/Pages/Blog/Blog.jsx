import React from "react";
import useTitle from "../../Utilities/Utilities";

const Blog = () => {
  useTitle('Photo Prince - Blog')
  return (
    <div>
      <div className="border-2 px-14 py-8 m-6 w-3/4 mx-auto shadow-xl">
        <h3 className="text-2xl font-semibold">
        Difference between SQL and NoSQL?
        </h3>
        <p>
        SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
        </p>
      </div>
      <div className="border-2 px-14 py-8 m-6 w-3/4 mx-auto shadow-xl">
        <h3 className="text-2xl font-semibold">What is JWT, and how does it work?</h3>
        <p>
        JSON Web Token JWT is an open standard RFC 7519 that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
        </p>
      </div>
      <div className="border-2 px-14 py-8 m-6 w-3/4 mx-auto shadow-xl">
        <h3 className="text-2xl font-semibold">What is the difference between javascript and NodeJS?</h3>
        <p>
        JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
        </p>
      </div>
      <div className="border-2 px-14 py-8  m-6 w-3/4 mx-auto shadow-xl">
        <h3 className="text-2xl font-semibold">How does NodeJS handle multiple requests at the same time?</h3>
        <p>
        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blog;
