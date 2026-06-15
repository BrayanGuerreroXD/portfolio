import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import DnsIcon from '@mui/icons-material/Dns'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'
import CloudIcon from '@mui/icons-material/Cloud'
import MemoryIcon from '@mui/icons-material/Memory'
import PsychologyIcon from '@mui/icons-material/Psychology'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import type { SvgIconComponent } from '@mui/icons-material'
import GlassPanel from './GlassPanel'
import { colors } from '../theme'
import { skillCategories, type SkillCategory } from '../data/portfolio'

const headerIcons: Record<SkillCategory['icon'], SvgIconComponent> = {
  dns: DnsIcon,
  desktop: DesktopWindowsIcon,
  cloud: CloudIcon,
  memory: MemoryIcon,
}

const accentColors: Record<SkillCategory['accent'], string> = {
  primary: colors.primary,
  secondary: colors.secondary,
  primaryFixedDim: colors.primaryFixedDim,
  secondaryContainer: colors.secondaryContainer,
}

export default function Skills() {
  return (
    <Box component="section" id="skills" className="animate-fade-in" sx={{ mt: { xs: 12, md: 15 } }}>
      <Typography variant="h2" sx={{ mb: 6, color: colors.primary, transform: 'rotate(-1deg)' }}>
        Tech Stack
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
        }}
      >
        {skillCategories.map((category) => {
          const HeaderIcon = headerIcons[category.icon]
          const accent = accentColors[category.accent]
          return (
            <GlassPanel key={category.title} hover borderColor={`${accent}66`} sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
                <HeaderIcon sx={{ fontSize: 32, color: accent }} />
                <Typography variant="h3" sx={{ color: colors.onSurface }}>
                  {category.title}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {category.skills.map((skill) => (
                  <Box
                    key={skill.name}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 2,
                      py: 1,
                      borderRadius: '12px',
                      bgcolor: 'rgba(16,20,21,0.8)',
                      color: colors.onSurface,
                      fontFamily: '"Fredoka", sans-serif',
                      border: `2px solid ${accent}4d`,
                      transition: 'all 0.2s ease',
                      '&:hover': { borderColor: accent, transform: 'scale(1.05)' },
                    }}
                  >
                    {skill.icon.devicon && (
                      <i className={skill.icon.devicon} style={{ fontSize: '1.25rem' }} />
                    )}
                    {skill.icon.mui === 'psychology' && (
                      <PsychologyIcon sx={{ fontSize: 20, color: accent }} />
                    )}
                    {skill.icon.mui === 'smartToy' && (
                      <SmartToyIcon sx={{ fontSize: 20, color: accent }} />
                    )}
                    {skill.name}
                  </Box>
                ))}
              </Box>
            </GlassPanel>
          )
        })}
      </Box>
    </Box>
  )
}
