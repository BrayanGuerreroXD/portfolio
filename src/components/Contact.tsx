import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import type { SvgIconComponent } from '@mui/icons-material'
import GlassPanel from './GlassPanel'
import { colors } from '../theme'
import { contact } from '../data/portfolio'

interface ContactLink {
  label: string
  href: string
  icon: SvgIconComponent
  accent: string
}

const links: ContactLink[] = [
  { label: 'GitHub', href: contact.github, icon: GitHubIcon, accent: colors.primary },
  { label: 'LinkedIn', href: contact.linkedin, icon: LinkedInIcon, accent: colors.secondary },
]

export default function Contact() {
  return (
    <Box component="section" id="contact" className="animate-fade-in" sx={{ mt: { xs: 12, md: 15 } }}>
      <Typography variant="h2" sx={{ mb: 6, color: colors.secondary, transform: 'rotate(1deg)' }}>
        Contact
      </Typography>

      <GlassPanel
        borderColor={`${colors.secondary}66`}
        sx={{ p: { xs: 4, md: 6 }, textAlign: 'center', position: 'relative', overflow: 'hidden' }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 256,
            height: 256,
            bgcolor: 'rgba(109,40,217,0.15)',
            borderRadius: '50%',
            filter: 'blur(70px)',
            transform: 'translate(-30%, 40%)',
          }}
        />
        <Typography variant="body1" sx={{ color: colors.onSurfaceVariant, mb: 4, maxWidth: '40rem', mx: 'auto' }}>
          Got a mission for me, or just want to say hi from across the galaxy? My comms channel is
          always open. 📡
        </Typography>

        {/* Email CTA */}
        <Button
          href={`mailto:${contact.email}`}
          startIcon={<EmailIcon />}
          sx={{
            px: 4,
            py: 1.75,
            mb: 4,
            borderRadius: '999px',
            fontSize: '1.125rem',
            fontFamily: '"Fredoka", sans-serif',
            border: `4px solid ${colors.primaryContainer}`,
            bgcolor: 'rgba(109,40,217,0.2)',
            color: colors.onPrimaryContainer,
            boxShadow: '0 0 15px rgba(109,40,217,0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: colors.primary,
              color: colors.onPrimary,
              transform: 'translateY(-3px) rotate(-1deg)',
              boxShadow: '0 0 25px rgba(211,187,255,0.5)',
            },
          }}
        >
          {contact.email}
        </Button>

        {/* Social links */}
        <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap" useFlexGap>
          {links.map(({ label, href, icon: Icon, accent }) => (
            <Button
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<Icon />}
              sx={{
                px: 3,
                py: 1.25,
                borderRadius: '999px',
                fontFamily: '"Space Mono", monospace',
                letterSpacing: '0.05em',
                color: accent,
                border: `2px dashed ${accent}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: `${accent}1a`,
                  transform: 'translateY(-3px)',
                  boxShadow: `0 0 18px ${accent}40`,
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </GlassPanel>
    </Box>
  )
}
