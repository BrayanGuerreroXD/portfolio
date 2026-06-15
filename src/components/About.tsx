import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import GlassPanel from './GlassPanel'
import { colors } from '../theme'
import { profile } from '../data/portfolio'

export default function About() {
  return (
    <Box component="section" id="about" className="animate-fade-in" sx={{ mt: 10 }}>
      <GlassPanel
        borderColor={`${colors.primary}80`}
        sx={{ p: { xs: 4, md: 6 }, position: 'relative', overflow: 'hidden' }}
      >
        {/* Decorative glow */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 256,
            height: 256,
            bgcolor: 'rgba(93,230,255,0.1)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            transform: 'translate(50%, -50%)',
          }}
        />
        <Typography
          variant="h2"
          sx={{ mb: 3, color: colors.primary, display: 'inline-block', transform: 'rotate(-1deg)' }}
        >
          About Me
        </Typography>
        <Typography variant="body1" sx={{ color: colors.onSurfaceVariant, maxWidth: '56rem', lineHeight: 1.7 }}>
          {profile.about}
        </Typography>
      </GlassPanel>
    </Box>
  )
}
