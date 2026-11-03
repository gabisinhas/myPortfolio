/* eslint-disable react/prop-types -- no prop-types dependency in this project; children: ReactNode, size?: 'lg' */
// Small square badge for a decorative icon, paired with a visible label
// alongside it (Hero stats, Work cards, Contact rows). Styled via the
// shared .icon-badge utility class (see styles/mixins.sass).
const IconBadge = ({ children, size }) => (
  <span className={`icon-badge${size ? ` icon-badge--${size}` : ''}`} aria-hidden="true">
    {children}
  </span>
)

export default IconBadge
