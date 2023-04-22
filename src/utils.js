



export const generateRandomNum = () =>{
    let x = Math.floor(Math.random() * 9)+1;
    return x

}



// const [offset, setOffset] = useState(0);
// const [isUpper, setIsUpper] = useState(false);

// // eslint-disable-next-line no-undef
// const handleScroll = () => setOffset(window.pageYOffset);
// useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   useEffect(() => {
//     if (offset > 200) {
//       setIsUpper(true);
//     } else {
//       setIsUpper(false);
//     }
//   }, [offset]);