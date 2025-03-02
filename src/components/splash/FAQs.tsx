import { Box, Typography } from "@mui/material"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import React from "react"

function FAQs(props: { ref: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={props.ref}>
      <Box textAlign={"left"}>
        <Typography variant='h5' fontWeight={700}>
          FAQs
        </Typography>
        <Accordion sx={{ marginBottom: 2 }}>
          <AccordionSummary sx={{ fontWeight: "Bold" }}>
            Q: How do I participate in a quiz or poll?
          </AccordionSummary>
          <AccordionDetails>
            A: Simply log in to the PulseCheck platform on your device and join
            the session using the provided quiz or poll link from your
            instructor.
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ marginBottom: 2 }}>
          <AccordionSummary sx={{ fontWeight: "Bold" }}>
            Q: Can I access my quiz results?
          </AccordionSummary>
          <AccordionDetails>
            A: Yes! After completing a quiz, you can view your results and see
            which questions you answered correctly or incorrectly.
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ marginBottom: 2 }}>
          <AccordionSummary sx={{ fontWeight: "Bold" }}>
            Q: How does PulseCheck track attendance?
          </AccordionSummary>
          <AccordionDetails>
            A: PulseCheck tracks attendance based on your participation in live
            polls and quizzes during lectures.
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ marginBottom: 2 }}>
          <AccordionSummary sx={{ fontWeight: "Bold" }}>
            Q: Can I use PulseCheck on my phone?
          </AccordionSummary>
          <AccordionDetails>
            A: Absolutely! PulseCheck is fully responsive and works seamlessly
            mobile devices.
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  )
}

export default FAQs
