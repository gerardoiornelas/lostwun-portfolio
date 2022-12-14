import React from "react"
import PropTypes from "prop-types"
import { Typography, Box } from "@mui/material"

const SegmentTitle = ({
  subtitle,
  children,
  textShadowColor,
  ...otherProps
}) => {
  return (
    <Box mb={2}>
      <Typography
        {...otherProps}
        sx={{ textShadow: `${textShadowColor} 2px 2px` }}
      >
        {children}
      </Typography>
    </Box>
  )
}

SegmentTitle.defaultProps = {
  variant: "h4",
  color: "secondary",
}

SegmentTitle.propTypes = {
  children: PropTypes.node,
  textShadowColor: PropTypes.string,
}

export default SegmentTitle
