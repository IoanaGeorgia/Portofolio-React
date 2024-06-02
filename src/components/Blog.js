import "../Blog.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretDown, faUser } from "@fortawesome/free-regular-svg-icons";
import blog from "../assets/blog.PNG";
import blog_bg from "../assets/blog_bg.jpg";
function Blog() {
  const [isMobileMenuVisible, setMobileMenu] = useState(false);

  function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="blogWrapper">
      <header className="blogHeader">
        <div className="blogLogo">
          PERDesigns
          <span className="blogHeaderLinks">
            <button>Home</button>
            <button>Products</button>
            <button>Resources</button>
            <button>Pricing</button>
          </span>
        </div>
        <div className="blogProfileLogo">
          <FontAwesomeIcon icon={faUser} />
        </div>
        {!isMobileMenuVisible && (
          <FontAwesomeIcon
            onClick={() => setMobileMenu(true)}
            className="mobileMenuIcon"
            icon={faSquareCaretDown}
          />
        )}
      </header>
      {isMobileMenuVisible && (
        <div className="mobileMenuWrapper">
          <p>
            <button onClick={() => setMobileMenu(false)}>Close</button>
          </p>
          <button>Home</button>
          <button>Products</button>
          <button>Resources</button>
          <button>Pricing</button>
        </div>
      )}
      <main>
        <p className="blogTitle">Designs & Sizes</p>
        <p className="blogTitleSecondary">Chatting with Ann Robinson</p>
        <p className="blogMainDescription">
          Ann Robinson is a designer and architect from France. She started her
          career working for a large European company. We talked about
          architectural trends, Art Nouveau and how American design influenced
          modern bussiness architecture.
        </p>

        <div className="blogCircleImage">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <img className="blogImage" src={blog}></img>

        <div className="blogInfoWrapper">
          <div className="blogDescription">
            <div>
              <p>Series</p>
              <p>Designs & Sizes</p>
            </div>
            <div>
              <p>Published on</p>
              <p>17 Ian 2022</p>
            </div>
          </div>
          <div className="blogTags">
            <button>Design</button>
            <button>Product</button>
            <button>5 min read</button>
          </div>
        </div>

        <div className="blogContentMainWrapper">
          <div className="blogContentSummary">
            <p>Table of contents</p>
            <button onClick={() => scrollToSection("section_1")}>
              What is design
            </button>
            <button onClick={() => scrollToSection("section_2")}>
              The right rools
            </button>
            <button onClick={() => scrollToSection("section_3")}>
              Inspiration
            </button>
          </div>
          <div className="blogContent">
            <p id="section_1" className="contentSubtitle">
              What is design
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non aliquam quaerat voluptatem.
            </p>

            <img className="contentImage" src={blog_bg} />

            <p className="contentQuote">
              "In a world of fish, be a square. In a world of squares, be a
              spoon. In a world of spoons, there is no place for spoons. You
              have to either sharpen urself enough to be a knife, or see
              yourself turn into a giraffe."
              <p className="contentQuoteAuthor">-Marianne Armen, architect</p>
            </p>

            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio.{" "}
            </p>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut
              aut reiciendis voluptatibus maiores alias consequatur aut
              perferendis doloribus asperiores repellat.
            </p>

            <p id="section_2" className="contentSubtitle">
              The right tools
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio.{" "}
            </p>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut
              aut reiciendis voluptatibus maiores alias consequatur aut
              perferendis doloribus asperiores repellat.
            </p>
            <p id="section_3" className="contentSubtitle">
              Inspiration
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio.{" "}
            </p>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut
              aut reiciendis voluptatibus maiores alias consequatur aut
              perferendis doloribus asperiores repellat.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blog;
