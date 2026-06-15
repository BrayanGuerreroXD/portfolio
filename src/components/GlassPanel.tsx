import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { colors } from '../theme'

interface GlassPanelProps {
  /** Dashed border color (defaults to a faint white). */
  borderColor?: string
  /** Enable the lift + purple-glow hover interaction. */
  hover?: boolean
}

/**
 * Glassmorphism panel ported from the Stitch `.glass-panel` utility:
 * translucent surface, backdrop blur and a thick dashed border.
 */
const GlassPanel = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'borderColor' && prop !== 'hover',
})<GlassPanelProps>(({ borderColor, hover }) => ({
  background: 'rgba(17, 24, 39, 0.8)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: `3px dashed ${borderColor ?? 'rgba(248, 250, 252, 0.2)'}`,
  borderRadius: '1.5rem',
  transition: 'all 0.3s ease',
  ...(hover && {
    cursor: 'default',
    '&:hover': {
      borderColor: colors.primaryContainer,
      boxShadow: `0 0 20px rgba(109, 40, 217, 0.4)`,
      transform: 'translateY(-4px) rotate(1deg)',
    },
  }),
}))

export default GlassPanel
