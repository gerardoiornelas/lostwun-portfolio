import React from "react"
import PropTypes from "prop-types"

import HeroTitle from "./HeroTitle"
import SegmentTitle from "./SegmentTitle"
import SectionTitle from "./SectionTitle"

const TitleComponents = {
  hero: HeroTitle,
  segment: SegmentTitle,
  section: SectionTitle,
}

const Title = ({ variant, children, ...props }) => {
  return React.createElement(TitleComponents[variant], { ...props }, children)
}

Title.propTypes = {
  variant: PropTypes.oneOf(["hero", "segment", "section"]),
  children: PropTypes.node,
}

export default Title
