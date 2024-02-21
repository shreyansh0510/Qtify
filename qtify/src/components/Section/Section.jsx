// import React, { useState } from "react";
// import styles from "./Section.module.css"

// import { CircularProgress } from "@mui/material";
// import Carousel from "../Carousel/Carousel";
// // import Card from "../Card/Card";

// function Section({ title, data, type }) {
//   // state ("carouselToggle") to display either "show all" or "collapse" text
//   const [carouselToggle, setCarouselToggle] = useState(true);

//   // manage state("carouselToggle")
//   const handleToggle = () => {
//     setCarouselToggle((prevState) => !prevState);
//   };


//   console.log("section-data", data)

//   return (
//     <>
//       {/* header section containing "title" and toggle "text"  */}
//       <div className={styles.header} >
//         <h3>{title}</h3>
//         <h4 className={styles.toggleText} onClick={handleToggle}>
//           {!carouselToggle ? "Collapse" : "Show All"}
//         </h4>
//       </div>


//       {data.length === 0 ? (
//         <CircularProgress />
//       ) : (
//         <>
//           <div className={styles.cardWrapper}>
//             {/* Collapse => <Card />
//             Show All => <Carousel /> */}
//             {!carouselToggle ? (
//               <div className={styles.wrapper}>
//                 {/* {data.map((items) => {
//                   return <Card data={items} type={type} />;
//                 })} */}
//               </div>
//             ) : (
//               {/* <Carousel data={data} renderComponent={(data) => <Card data={data} type={type} />} /> */ }
//             )}
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// export default Section;


import React, { useState } from 'react'
import Container from '../Container/Container'
import styles from "./Section.module.css"

function Section({ title = "", data = [] }) {
  const [toggle, setToggle] = useState(true)

  const handleToggle = () => {
    setToggle(prevState => !prevState)
  }

  const showContainer = () => {
    return data?.map((item, key) => {
      return (
        <>
          <Container key={item.id} id={item.id} image={item.image} follows={item.follows} title={item.title} />
        </>
      )
    })

  }

  console.log("Section title", title)
  console.log("Section data", data)


  return (
    <>
      <div className={styles.section} >
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}> {title} </div>
          <button onClick={handleToggle} className={styles.toggle}> {toggle ? "Show all" : "Collapse"} </button>
        </div>
        <div className={styles.sectionGrid}>
          {showContainer()}
        </div>
      </div>

    </>

  )
}

export default Section
