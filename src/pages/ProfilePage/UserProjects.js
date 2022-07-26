
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';

export default function MultipleInteractionCard() {
  return (
    <Card variant="outlined" sx={{ minWidth: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="https://source.unsplash.com/random/320x320"
            alt=""
          />
        </AspectRatio>
        <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <Favorite />
        </IconButton>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
        <Link href="#multiple-actions" overlay underline="none">
          Title here
        </Link>
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        <Link href="#multiple-actions">Summary here</Link>
      </Typography>
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          gap: 1.5,
          py: 1.5,
          px: 'var(--Card-padding)',
          borderTop: '1px solid',
          borderColor: 'neutral.outlinedBorder',
          bgcolor: 'background.level1',
        }}
      >
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          6.3k Likes/Reviews here
        </Typography>
        <Box sx={{ width: 2, bgcolor: 'divider' }} />
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          Languages here
        </Typography>
      </CardOverflow>
    </Card>
  );
}
