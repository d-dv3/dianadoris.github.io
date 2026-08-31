// import React from "react";
// import ReactDOM from "react-dom/client";
// import "index.css";

// function App() {
//   return (
//     <div>
//       <Header />
//       <MovieSessions />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   return (
//     <header>
//       <h1 className="homeLink">FOCO</h1>
//       <h2 className="subTitleProgramPage" >cinema theater</h2>
//       <p style={{fontSize:"28px"}}>thursday to saturday free program > save your spot!</p>
//       <p style={{fontSize:"10px"}} >from 2027.01.07 to 2027.01.09</p>
//     </header>
// )}

// render movie list - uing map
// function MovieSessions() {
//   return (
//     <main>
//       <div>
//         {movieData.map((movie) => (
//           <Movie name={movie.name} />
//         ))}
//       </div>

{
  /* <Movie imgName="paris-texas.png"
        name="Paris, Texas"
        authors="Wim Wenders"
        year={1984}
        lang="en"
        duration={2.25}/>

      <Movie imgName="paris-texas.png"
        name="Boiling Point"
        authors="Philip Barantini"
        year={2021}
        lang="en"
        duration={1.36} /> */
}
{
  /* </main>
  )
}

function Movie(props) {
  return (
    <div className="movie">
        <img src={props.imgName} alt={props.name}/>
        <p>{props.name}</p>
        <p>{props.authors}</p>
        <p>{props.year}</p>
        <p>{props.lang}</p>
        <p>{props.duration}</p>
      </div>
  );
} */
}

// function Movie(props) {
//   return (
//     <div>
//         <h1 style={{ color: "red", fontSize: "2rem", textTransform: "uppercase" }}>
//           Thursday
//         </h1>
//         <h3>01.07</h3>
//         <p>19h00</p>
//         <img src={props.imgName} alt={props.name}/>
//         <p>{props.name}</p>
//         <p>{props.authors}</p>
//         <p>{props.year}</p>
//         <p>{props.lang}</p>
//         <p>{props.duration}</p>
//       </div>
//   );
// }

// function Movie(props) {
//   return (
//     <div>
//         <h1 style={{ color: "red", fontSize: "2rem", textTransform: "uppercase" }}>
//           Thursday
//         </h1>
//         <h3>01.07</h3>
//         <p>19h00</p>
//         <img src="paris-texas.png" />
//         <p>Paris - Texas</p>
//         <p>Wim Wenders</p>
//         <p>1984</p>
//         <p>en</p>
//         <p>dur_ 2h25</p>
//       </div>
//   );
// }

// function Footer(){
//   return (
//     <div>
//       <p>no seats | no break | no subtitles</p>
//       <p>{new Date().toLocaleTimeString()} we are open</p>
//     </div>

//   )
// }

// movie info module - reusable
// function Movies(props) {
//   return (
//     <div>
//       <div>
//         <img src={props.photoName} alt={props.name} />
//         <p>{props.name}</p>
//       </div>
//       <div>
//         <p>{props.authors}</p>
//         <p>{props.year}</p>
//         <p>{props.lang}</p>
//         <p>{props.duration}</p>
//       </div>
//     </div>
//   );
// }

const movieData = [
  {
    image: (src = "img/paris-texas.png"),
    name: "Paris, Texas",
    authors: "Wim Wenders",
    year: "1984",
    lang: "en",
    duration: "2h25",
  },
  {
    image: "",
    name: "Boiling Point",
    authors: "Philip Barantini",
    year: "2021",
    lang: "en",
    duration: "1h36",
  },
  {
    image: "",
    name: "Marighella",
    authors: "Wagner Moure",
    year: "2019",
    lang: "pt",
    duration: "2h35",
  },
  {
    image: "",
    name: "My Favourite Cake",
    authors: "Maryam Moghaddam, Behtash Sanaeeha",
    year: "2024",
    lang: "en",
    duration: "1h36",
  },

  {
    image: "",
    name: "Billy Elliot",
    authors: "Stephen Daldry",
    year: "2000",
    lang: "en",
    duration: "1h50",
  },
  {
    image: "",
    name: "Chocolat",
    authors: "Lausse Hallström",
    year: "2000",
    lang: "fr",
    duration: "2h",
  },
  {
    image: "",
    name: "Memento",
    authors: "Christopher Nolan",
    year: "2000",
    lang: "en",
    duration: "1h25",
  },
  {
    image: "",
    name: "The Party",
    authors: "Thomas Vinterberg",
    year: "1998",
    lang: "en",
    duration: "1h54",
  },
];
