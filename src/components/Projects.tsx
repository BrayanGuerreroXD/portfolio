import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import GlassPanel from './GlassPanel'
import { colors } from '../theme'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <Box component="section" id="projects" className="animate-fade-in" sx={{ mt: { xs: 12, md: 15 } }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
          mb: 6,
        }}
      >
        <Typography variant="h2" sx={{ color: colors.secondary, transform: 'rotate(1deg)' }}>
          Projects
        </Typography>
        <Typography
          variant="overline"
          sx={{
            color: colors.secondary,
            px: 2,
            py: 1,
            border: `2px dashed ${colors.secondary}`,
            borderRadius: '999px',
            bgcolor: 'rgba(16,20,21,0.5)',
          }}
        >
          CLASSIFIED_DATA
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
        }}
      >
        {projects.map((project, i) => (
          <GlassPanel
            key={project.name}
            hover
            borderColor={`${colors.outlineVariant}80`}
            sx={{
              aspectRatio: '16 / 9',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              p: 4,
            }}
          >
            <RocketLaunchIcon
              className={i % 2 === 0 ? 'animate-float' : 'animate-float-reverse'}
              sx={{ fontSize: 56, mb: 2, color: i % 2 === 0 ? colors.primary : colors.secondary }}
            />
            <Typography variant="h3" sx={{ mb: 1, color: colors.onSurface }}>
              {project.name}
            </Typography>
            <Typography variant="overline" sx={{ color: colors.onSurfaceVariant }}>
              {project.description}
            </Typography>
          </GlassPanel>
        ))}
      </Box>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography
          variant="body2"
          sx={{
            display: 'inline-block',
            color: colors.onSurfaceVariant,
            opacity: 0.8,
            bgcolor: 'rgba(16,20,21,0.5)',
            px: 3,
            py: 1.5,
            borderRadius: '999px',
            border: `2px dashed ${colors.outlineVariant}4d`,
          }}
        >
          More projects will be added soon. Stay tuned for upcoming launches! 🚀
        </Typography>
      </Box>
    </Box>
  )
}
