import { FaReact, FaDocker, FaSitemap, FaEye, FaRobot, FaUniversalAccess, FaVial } from 'react-icons/fa'
import {
  SiPython, SiDjango, SiFastapi, SiTypescript, SiNodedotjs, SiPostgresql,
  SiKubernetes, SiGithubactions, SiOwasp, SiSwagger, SiOpenai, SiReactquery,
  SiJest, SiStorybook,
} from 'react-icons/si'

// Shared label -> icon component map, reused by the Skills and Experience
// sections so the same tech reads with the same icon everywhere.
export const techIcons = {
  Python: SiPython,
  Django: SiDjango,
  FastAPI: SiFastapi,
  React: FaReact,
  TypeScript: SiTypescript,
  'Node.js': SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Docker: FaDocker,
  Kubernetes: SiKubernetes,
  'CI/CD': SiGithubactions,
  'Clean Architecture': FaSitemap,
  'Security (OWASP)': SiOwasp,
  OWASP: SiOwasp,
  Observability: FaEye,
  'AI-Assisted Development': FaRobot,
  'REST APIs': SiSwagger,
  WCAG: FaUniversalAccess,
  Playwright: FaVial,
  'LLM workflows': SiOpenai,
  'React Query': SiReactquery,
  Jest: SiJest,
  Storybook: SiStorybook,
}
