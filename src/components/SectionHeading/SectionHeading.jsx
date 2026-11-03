/* eslint-disable react/prop-types -- no prop-types dependency in this project; eyebrow: string, title: string, id?: string */
// Shared eyebrow + <h2> pair used by every content section (About, Skills,
// Experience, Work, Contact). Styled via the global .eyebrow/.section-heading
// utility classes (see styles/components/pages.sass).
const SectionHeading = ({ eyebrow, title, id }) => (
  <>
    <span className="eyebrow">{eyebrow}</span>
    <h2 id={id} className="section-heading">{title}</h2>
  </>
)

export default SectionHeading
