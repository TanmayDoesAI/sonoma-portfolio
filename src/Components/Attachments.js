// Attachments.js
import React from 'react';

function Attachments(props) {
  return (
    <div className="noteAttachments">
      {props.attachments.map((media, index) => {
        let attachment = media.type === "image" 
          ? <img src={media.url} alt={`Attachment ${index + 1}`} /> 
          : <video src={media.url} autoPlay muted playsInline loop />;

        return (
          <div
            tabIndex={0}
            className="media"
            style={{
              aspectRatio: media.width / media.height,
            }}
            onDoubleClick={() => {
              if (props.windows.some(e => e.attachment === media)) { return }
              props.open({
                type: "media",
                name: `${media.width} × ${media.height}`,
                attachment: media
              })
            }}
            key={media.url}
          >
            {attachment}
          </div>
        )
      })}
    </div>
  )
}

export default Attachments;
