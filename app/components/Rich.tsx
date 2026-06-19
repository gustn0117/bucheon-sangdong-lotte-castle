import { Fragment } from "react";

// Renders a string with **bold** segments as <b> without dangerouslySetInnerHTML.
export default function Rich({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <b key={i}>{part}</b> : <Fragment key={i}>{part}</Fragment>
      )}
    </>
  );
}
