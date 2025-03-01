import { Box, Typography } from "@mui/material"

function Features(props: { ref: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={props.ref}>
      <Box textAlign={"left"}>
        <Typography variant='h5' fontWeight={700} marginBottom={2}>
          Features
        </Typography>

        {/* PLACEHOLDER TEXT, GET RID OF THIS!! */}
        <Typography variant='body1' fontWeight={550}>
          Real-Time Questioning:
        </Typography>
        <Typography variant='body1' marginLeft={1} marginBottom={2}>
        Hosts are able to create and display multiple-choice <br></br> question quizes and polls
        for participating users to respond to simultaniously and in real-time.
        </Typography>

        <Typography variant='body1' fontWeight={550}>
        Automatic Scoring:
        </Typography>
        <Typography variant='body1' marginLeft={1} marginBottom={2}>
        PulseCheck automatically calculates a participant's quiz scores in <br></br> 
        real-time giving them feedback on their performance following each 
        question with a complete overview on their preformance <br></br> 
        after the session concludes.
        </Typography>

        <Typography variant='body1' fontWeight={550}>
        Host Dashboard:
        </Typography>
        <Typography variant='body1' marginLeft={1} marginBottom={2}>
        During polling Hosts have access to a dashboard which allows them to 
        monitor a participant's data in real time. Allowing for Hosts to give 
        feedback based on participant results and obtain <br></br> 
        insight on participants understanding of the material.
        </Typography>

        <Typography variant='body1' fontWeight={550}>
        Web Access & UI:
        </Typography>
        <Typography variant='body1' marginLeft={1} marginBottom={2}>
        PulseCheck is a web application that works on Desktop, Tablets, and Mobile Devices that support modern web browsers. 
        Built using Firebase, React, and Material UI in order to ensure both a fast and optimal user experience.
        </Typography>

        <Typography variant='body1' fontWeight={550}>
        Attendance Tracking:
        </Typography>
        <Typography variant='body1' marginLeft={1} marginBottom={2}>
        User participation can serve as a check for who is in attendance. 
        Non-participating users are flagged for review and can be removed from a poll at the Hosts discretion.
        </Typography>

        <Typography variant='body1' fontWeight={550}>
        Question Banking & Randomization:
        </Typography>
        <Typography variant='body1' marginLeft={1} marginBottom={2}>
        Hosts can create question banks to be able to resuse those <br></br> 
        questions on future sessions. The order of questions can also be <br></br> 
        randomized to prevent the sharing of answers between participants should the host choose.
        </Typography>

      </Box>
    </div>
  )
}

export default Features
