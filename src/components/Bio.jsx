import BioCanvas from "./BioCanvas";
function Bio() {
  return (
    <div className="flex justify-evenly items-center bg-jet h-screen w-screen">
      <div className="p-10">
        <h1 className="text-6xl text-fiery-rose pb-5">Hi i'm Luis Restrepo!</h1>
        <p className="text-4xl text-lavender-blush">
          An enthusiast software developer graduated from{" "}
          <a
            href="https://www.univalle.edu.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fiery-rose transition-all ease-in"
          >
            Universidad del Valle
          </a>
        </p>
      </div>
      <div>
        <BioCanvas></BioCanvas>
      </div>
    </div>
  );
}

export default Bio;
