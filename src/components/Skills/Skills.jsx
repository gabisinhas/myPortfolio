import Technologies from '../Technologies/Technologies'
import SectionHeading from '../SectionHeading/SectionHeading'
import { skillItems } from '../../data/skillsData'
import './skills.sass'

const Skills = () => {
  return (
    <div id="skills" className="skills-block">
      <SectionHeading eyebrow="Core skills" title="Technologies & Practices" />
      <Technologies items={skillItems} />
    </div>
  )
}

export default Skills
