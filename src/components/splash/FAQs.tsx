import { Box, Stack, Typography } from "@mui/material"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import React from "react"
import { RA } from "@/styles"

function FAQs(props: { ref?: React.Ref<unknown> }) {
  return (
    <Box ref={props.ref}>
      <RA.Bounce triggerOnce>
        <Typography variant='h5' textAlign={"center"} fontWeight={700} mb={2}>
          FAQs
        </Typography>
      </RA.Bounce>
      <Stack spacing={4}>
        <RA.Bounce triggerOnce>
          <Accordion expanded>
            <AccordionSummary>
              <b>Q: How do I participate in a quiz or poll?</b>
            </AccordionSummary>
            <AccordionDetails>
              <b>A:</b> Simply log in to the PulseCheck platform on your device
              and join the session using the provided quiz or poll link from
              your instructor.
            </AccordionDetails>
          </Accordion>
        </RA.Bounce>
        <RA.Bounce triggerOnce>
          <Accordion expanded>
            <AccordionSummary>
              <b>Q: Can I access my quiz results?</b>
            </AccordionSummary>
            <AccordionDetails>
              <b>A:</b> Yes! After completing a quiz, you can view your results
              and see which questions you answered correctly or incorrectly.
            </AccordionDetails>
          </Accordion>
        </RA.Bounce>
        <RA.Bounce triggerOnce>
          <Accordion expanded>
            <AccordionSummary>
              <b>Q: How does PulseCheck track attendance?</b>
            </AccordionSummary>
            <AccordionDetails>
              <b>A:</b> PulseCheck tracks attendance based on your participation
              in live polls and quizzes during lectures.
            </AccordionDetails>
          </Accordion>
        </RA.Bounce>
        <RA.Bounce triggerOnce>
          <Accordion expanded>
            <AccordionSummary>
              <b>Q: Can I use PulseCheck on my phone?</b>
            </AccordionSummary>
            <AccordionDetails>
              <b>A:</b> Absolutely! PulseCheck is fully responsive and works
              seamlessly mobile devices.
            </AccordionDetails>
          </Accordion>
        </RA.Bounce>
      </Stack>
    </Box>
  )
}

export default FAQs
