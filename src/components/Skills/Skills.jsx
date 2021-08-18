import { skills } from "../../data"
import SkillList from "./SkillList"
import "./skills.scss"

const Skills = () => {
  return (
    <div className='bg-white skills' id='skills'>
      <div className='container'>
        <h2 className='mt-3'>What I am good at?</h2>
        <div className='skill-list mt-5 d-flex flex-wrap justify-content-xs-center justify-content-sm-between justify-content-md-between '>
          {skills.map((iter, index) => (
            <SkillList
              key={index}
              skill={iter.skill}
              progress={iter.progress}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
