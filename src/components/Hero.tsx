import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { colors } from '../theme'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <Box
      component="section"
      className="animate-fade-in"
      sx={{
        minHeight: { md: '80vh' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: 6, md: 12 },
        pt: 6,
      }}
    >
      {/* Left column */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4, position: 'relative' }}>
        {/* Floating UFO */}
        <Box
          className="animate-float"
          sx={{
            position: 'absolute',
            top: -64,
            left: -32,
            width: 96,
            height: 96,
            borderRadius: '50%',
            overflow: 'hidden',
            border: `4px dashed ${colors.secondary}`,
            boxShadow: '0 0 20px rgba(255,255,255,0.6)',
            zIndex: 20,
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Box
            component="img"
            src="/assets/ufo.png"
            alt=""
            sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 70%' }}
          />
        </Box>

        {/* Status badge */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            px: 2,
            py: 1,
            borderRadius: '999px',
            border: `2px dashed ${colors.secondary}80`,
            bgcolor: 'rgba(16,20,21,0.6)',
            width: 'fit-content',
            transform: 'rotate(-2deg)',
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: colors.secondary,
              animation: 'pulse 1.5s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                '50%': { opacity: 0.5, transform: 'scale(0.85)' },
              },
            }}
          />
          <Typography variant="overline" sx={{ color: colors.secondary }}>
            {profile.status}
          </Typography>
        </Box>

        {/* Heading */}
        <Box>
          <Typography variant="h1" sx={{ mb: 3, color: colors.onSurface }}>
            Hi, I'm{' '}
            <Box
              component="span"
              className="animate-float-reverse"
              sx={{
                display: 'inline-block',
                color: 'transparent',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
              }}
            >
              {profile.name}
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: colors.onSurfaceVariant,
              maxWidth: '42rem',
              bgcolor: 'rgba(16,20,21,0.5)',
              p: 2,
              borderRadius: '1rem',
              border: `2px dashed ${colors.outlineVariant}4d`,
              backdropFilter: 'blur(4px)',
            }}
          >
            {profile.tagline}
          </Typography>
        </Box>

        {/* CTAs */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ pt: 1 }}>
          <Button
            href="#projects"
            sx={{
              px: 4,
              py: 1.75,
              borderRadius: '999px',
              fontSize: '1.25rem',
              fontFamily: '"Fredoka", sans-serif',
              border: `4px solid ${colors.primaryContainer}`,
              bgcolor: 'rgba(109,40,217,0.2)',
              color: colors.onPrimaryContainer,
              boxShadow: '0 0 15px rgba(109,40,217,0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: colors.primary,
                color: colors.onPrimary,
                transform: 'translateY(-4px) rotate(2deg)',
              },
            }}
          >
            View Projects
          </Button>
          <Button
            href="#contact"
            sx={{
              px: 4,
              py: 1.75,
              borderRadius: '999px',
              fontSize: '1.25rem',
              fontFamily: '"Fredoka", sans-serif',
              border: `4px dashed ${colors.secondary}`,
              color: colors.secondary,
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: 'rgba(93,230,255,0.1)',
                boxShadow: '0 0 20px rgba(93,230,255,0.2)',
                transform: 'translateY(-4px) rotate(-2deg)',
              },
            }}
          >
            Contact
          </Button>
        </Stack>
      </Box>

      {/* Right column — alien mascot */}
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          width: '100%',
          maxWidth: 480,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(211,187,255,0.2)',
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />
        <Box
          component="img"
          src="/assets/alien-mascot.png"
          alt="Besgo the alien mascot"
          className="animate-float"
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 30px rgba(93,230,255,0.3))',
            position: 'relative',
            zIndex: 10,
          }}
        />
      </Box>
    </Box>
  )
}
