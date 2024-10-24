

function App() {
  const course ={
    name:  'Half Stack application development',
  parts :[ {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
   {
    name: 'State of a component',
    exercises: 14
  }
]
  }

  return (
    <>
       <div>
        <Header course={course}/>
        <Content course={course} />
        <Total course={course}/>

      
    </div>
    </>
  )
}


function Header({course}){
        return (
          <h1>{course.name}</h1>
        )

}

function Content({course}){
  return (
    <>
    <Part part={course.parts[0]} />
    <Part part={course.parts[1]} />
    <Part part={course.parts[2]} />

    </>
  )
}

function Total({course}){
  return (
   <p>
    Number of exercises {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}
   </p>
  )
}

function Part({part}){
  return (
    <p>{part.name} {part.exercises}</p>
  )
}


export default App