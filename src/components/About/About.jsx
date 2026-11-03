import SectionHeading from '../SectionHeading/SectionHeading'
import './about.sass'

const About = () => {
  return (
    <div id="about" className="about-block">
      <SectionHeading eyebrow="About" title="A bit about me" />
      <p>
        I&rsquo;m a software engineer focused on building solutions that are
        scalable, secure and user-centered. I enjoy solving complex problems,
        improving existing systems and working collaboratively to deliver
        high-quality software with real impact — using AI tools like Claude
        and Copilot to move faster, with testing and human review as the
        final gate.
      </p>
    </div>
  )
}

export default About
