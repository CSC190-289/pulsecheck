import { Box, Typography } from "@mui/material"
import React from "react"

function Features(props: { ref: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={props.ref}>
      <Box textAlign={"left"}>
        <Typography variant='h5' fontWeight={700}>
          Features
        </Typography>

        {/* PLACEHOLDER TEXT, GET RID OF THIS!! */}
        <Typography variant='subtitle2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
    </div>
  )
}

export default Features
