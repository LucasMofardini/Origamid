import React from "react";

const Aula209 = () => {
  const handleClick = (e) =>{
    console.log(e.target)
  }
  function handleScroll(e){
    console.log(e)
  }
  function handleTeste(event,text1, text2){
    console.log(text1, text2, event.target);
  }
  // window.addEventListener('scroll', handleScroll);
  return (
    <>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={({target})=>{console.log(target)}}>Bermuda</button>
      <button onClick={(event)=>{
        handleTeste(event,'a', 'b')
        }}>Teste</button>

    </>
  );
};
export default Aula209;
