import Page_title from "../../shared/page_title/Page_title";
import {Helmet} from "react-helmet";


const Blog = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
      </Helmet>

      <Page_title>Blog</Page_title>

      <div className="mt-10 p-16">
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              What is One way data binding?
            </div>
            <div className="collapse-content">
              <p>
                One one way data binding is that data will go to the same face
                ie data will come from parent to child and not go to friend.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              What is NPM in node.js?
            </div>
            <div className="collapse-content">
              <p>
                NPM (Node Package Manager) is the default package manager for
                Node.js and is written entirely in Javascript
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Different between Mongodb database vs mySQL database.{" "}
            </div>
            <div className="collapse-content">
              <p>
                MongoDB is a non-relational database system that uses a
                document-based data model, while MySQL is a relational database
                system that uses a table-based data model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
