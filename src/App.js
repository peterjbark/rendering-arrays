import React from "react";
import {useState} from "react";

function App() {
  const [learnerData, setLearnerData] = useState({
    learners: [
      {
        name: 'Cait Yomorta',
        bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
        scores: [
          {
            date: '2018-02-08',
            score: 77
          },
          {
            date: '2018-04-22',
            score: 92
          },
          {
            date: '2018-09-15',
            score: 68
          }
        ]
      },
      {
        name: 'Holly Baird',
        bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
        scores: [
          {
            date: '2018-12-14',
            score: 88
          },
          {
            date: '2019-01-09',
            score: 79
          },
          {
            date: '2019-02-23',
            score: 91
          },
          {
            date: '2019-03-01',
            score: 95
          }
        ]
      },
      {
        name: 'Wes Mungia',
        bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
        scores: [
          {
            date: '2018-10-11',
            score: 62
          },
          {
            date: '2018-11-24',
            score: 74
          },
          {
            date: '2018-12-19',
            score: 85
          }
        ]
      }
    ]
  });

  return (
    <div className="App">
      {learnerData.learners.map((learner) => { // Iterate through each object in learnerData and returns a Learner component 
        return (
          <Learner // Call Learner component with prop "learner" with JSX variable 
            learner={learner}
          />
        )
      })}
    </div>
  );
}

function Learner ({learner}) {  // Creating Learner component that is called in the App component for instance of object
  return(
    <div className = "learnerList">
      <h1>Learner: {learner.name}</h1>
      <h2>Biography: {learner.bio}</h2>
       <ul>
        {learner.scores.map((score) =>{ // Iterating through the nested object "scores" within the current object, "learner" is used instead of "learnerData" in the map method because in the Learner function, the map method in App component already references learnerData and returns Learner component for each mapped object.  
          return (
            <Score
            score = {score} // Score component with prop score with JSX variable "score", called for each object
            />
          )
        })}
       </ul> 
    </div>
  )
}

function Score ({score}) { // Creating Score component called in Learner component for displaying the nested object values in learnerData.learner.scores
  return(
    <div className ="scoreList">
      <h4>Date: {score.date}</h4>
      <h4>Score: {score.score}</h4>  
    </div>
  )
}
export default App;
