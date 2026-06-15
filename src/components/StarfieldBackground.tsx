import Box from '@mui/material/Box'
import { colors } from '../theme'
import { asset } from '../utils/asset'

/**
 * Fixed full-viewport space backdrop: a blurred nebula image, a fade-to-black
 * gradient and a tiled radial-gradient starfield. Ported from the Stitch design.
 */
export default function StarfieldBackground() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        bgcolor: '#000',
        overflow: 'hidden',
      }}
    >
      {/* Blurred nebula */}
      <Box
        className="animate-float-reverse"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('${asset('assets/space-bg.png')}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
          filter: 'blur(8px)',
          transform: 'scale(1.15)',
        }}
      />
      {/* Fade to background color */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to bottom, ${colors.background}66, ${colors.background}b3 50%, ${colors.background})`,
        }}
      />
      {/* Twinkling stars */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 160px 120px, #fff, rgba(0,0,0,0))`,
        }}
      />
    </Box>
  )
}
