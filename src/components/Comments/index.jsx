import Disqus from "disqus-react";
import React from "react";
import { StyledPaper } from "../../styled";

export default function CommentSection() {
  const disqusShortname = "your-site-shortname";
  const disqusConfig = {
    url: "http://localhost:3001",
    identifier: "ico-hyd",
    title: "Title of Your Article",
  };

  return (
    <StyledPaper sx={{ p: 2, mt: 2 }}>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </StyledPaper>
  );
}
