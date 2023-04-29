import SingleQuestion from "./SingleQuestion";

function Questions({questions}){
  return (
    <div className="container">
      <h1>Questions</h1>
      {
        questions.map(currQues => 
          <SingleQuestion key = {currQues.id} {...currQues}/>)
      }
    </div>
  )
}

export default Questions;