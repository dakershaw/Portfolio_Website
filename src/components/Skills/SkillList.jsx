import React from "react"

const SkillList = ({ skill, progress }) => {
  return (
    <div>
      <h5>{skill}</h5>
      <div className='progress'>
        <div
          className='progress-bar'
          role='progressbar'
          style={{ width: progress.concat("%"), backgroundColor: "#E62E56" }}
          aria-valuenow={progress}
          aria-valuemin='0'
          aria-valuemax='100'
        ></div>
      </div>
    </div>
  )
}

SkillList.defaultProps = {
  skill: "ReactJS",
  progress: "0",
}

export default SkillList
