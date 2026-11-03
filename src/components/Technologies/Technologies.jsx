/* eslint-disable react/prop-types -- no prop-types dependency in this project; items: string[] */
import TagPill from '../TagPill/TagPill'
import './technologies.sass'

const Technologies = ({ items }) => {
  return (
    <ul className="tag-list">
      {items.map((item) => (
        <TagPill key={item} label={item} size="md" />
      ))}
    </ul>
  )
}

export default Technologies
