import React, { FC } from "react";

const HighlightedText: FC<{ text: string; target: string }> = ({
  text,
  target,
}) => (
  <text>
    {text.substring(0, text.toLowerCase().indexOf(target.toLowerCase()))}
    <i>
      {text.substring(
        text.toLowerCase().indexOf(target.toLowerCase()),
        text.toLowerCase().indexOf(target.toLowerCase()) + target.length
      )}
    </i>
    {text.substring(
      text.toLowerCase().indexOf(target.toLowerCase()) + target.length
    )}
  </text>
);

export { HighlightedText };
