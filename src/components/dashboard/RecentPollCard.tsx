import { Card, CardContent, CardHeader, Typography } from "@mui/material"
import { RA } from "@/styles"

interface RecentPollCardProps {
  // Declares types for poll cards
  pollTitle: string
  result: string
}

export default function RecentPollCard({
  pollTitle,
  result,
}: RecentPollCardProps) {
  return (
    <Card variant='outlined'>
      <CardContent>
        <RA.Bounce triggerOnce>
          <CardHeader title={pollTitle} />
          <Typography>{result}</Typography>
        </RA.Bounce>
      </CardContent>
    </Card>
  )
}
