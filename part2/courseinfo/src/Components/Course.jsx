const Course = ({course})=>{
    

    return (
        <>
           <div>

            {course.map((course)=>{
                return <CourseContent key={course.id} course={course}/>
            })}
        </div>
        </>
      )


}

function CourseContent({course}){
    return (
        <>
        <Header course={course}/>
            <Content course={course} />
            <Total course={course}/>
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
    {course.parts.map((part)=>{
        return <Part key = {part.id} part={part}/>
    })}

</>
)
}

function Total({course}){
return (
<p>
    <b>
    total of {course.parts.reduce((sum,part)=> {
    return sum + part.exercises

},0)} exercises
    </b>

</p>
)
}

function Part({part}){
return (
<p>{part.name} {part.exercises}</p>
)
}

export default Course