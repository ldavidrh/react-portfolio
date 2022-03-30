import profilepic from "../assets/profilepic.jpg";

function Bio() {
  return (
    <div className="flex flex-col justify-center gap-44 items-center h-screen w-screen p-96">
      <img className="biopic" src={profilepic} alt="Profile" />
      <div>
        <h1 className="text-6xl text-fiery-rose pb-5 text-center mb-12">
          Hi I'm Luis Restrepo!
        </h1>
        <p className="text-4xl text-lavender-blush text-center">
          An enthusiast software developer graduated from{" "}
          <a
            href="https://www.univalle.edu.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Universidad del Valle
          </a>
        </p>
      </div>
    </div>
  );
}

export default Bio;
