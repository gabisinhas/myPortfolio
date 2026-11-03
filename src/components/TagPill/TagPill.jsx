/* eslint-disable react/prop-types -- no prop-types dependency in this project; label: string, size?: 'md' */
import { techIcons } from '../../utils/techIcons'

// Icon + label chip for a tech/skill tag. Owns the label -> icon lookup so
// callers (Skills, Experience, Work) only ever pass a plain label string.
const TagPill = ({ label, size }) => {
  const Icon = techIcons[label]
  return (
    <li className={`tag-pill${size === 'md' ? ' tag-pill--md' : ''}`}>
      {Icon ? <Icon aria-hidden="true" /> : null}
      {label}
    </li>
  )
}

export default TagPill
