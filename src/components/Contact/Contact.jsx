import { AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'
import SectionHeading from '../SectionHeading/SectionHeading'
import IconBadge from '../IconBadge/IconBadge'
import './contact.sass'

const details = [
  { icon: <AiOutlineMail />, label: 'Email', value: 'gabisinhas@yahoo.com.br', href: 'mailto:gabisinhas@yahoo.com.br' },
  { icon: <AiFillEnvironment />, label: 'Location', value: 'São Paulo, Brazil' },
]

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="container">
        <div className="contact-card">
          <SectionHeading eyebrow="Contact" title="Let’s talk" />
          <p className="intro">
            Open to senior full stack roles where Python/Django or
            React/TypeScript depth, Clean Architecture and AI-assisted
            engineering add value. Reach out directly, I reply to every
            message.
          </p>

          <div className="contact-details">
            {details.map((item) => (
              <div className="contact-detail" key={item.label}>
                <IconBadge>{item.icon}</IconBadge>
                <div>
                  <p className="contact-label">{item.label}</p>
                  {item.href ? (
                    <a className="contact-value" href={item.href}>{item.value}</a>
                  ) : (
                    <p className="contact-value">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a className="btn" href="mailto:gabisinhas@yahoo.com.br">Email me</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
