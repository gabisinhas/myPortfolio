import { FaShieldAlt, FaLayerGroup } from 'react-icons/fa'

// eslint-disable-next-line react-refresh/only-export-components -- icon registry, not a page component
const CodeIcon = (props) => <span {...props}>{'</>'}</span>

// Shared key -> icon component map for the generic badge icons reused by
// the Hero stats and Work case-study cards (security / architecture /
// frontend), kept separate from techIcons which maps specific tech names.
export const conceptIcons = {
  shield: FaShieldAlt,
  layers: FaLayerGroup,
  code: CodeIcon,
}
