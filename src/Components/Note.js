import React from 'react';
import RichText from './RichText'; // Add this import
import Attachments from './Attachments'; // Add this import

// Rest of the code remains the same

function Note(props) {
  return (
    <div className="note">
      <div className="noteContent">
        <h2>{props.experience.heading}</h2>
        {props.experience.year || props.experience.location ?
        <p>
          {props.experience.year ? props.experience.year : null}
          {props.experience.year && props.experience.location ? ", " : null}
          {props.experience.location ? props.experience.location : null}
        </p>
        : null}
        {props.experience.description ?
          <RichText text={props.experience.description}/>
        : null}
        {props.experience.url ?
          <p><a href={props.experience.url} target="_blank">View link</a></p>
        : null}
        {props.experience.attachments && props.experience.attachments.length > 0 ?
          <Attachments attachments={props.experience.attachments} open={props.open} windows={props.windows}/>
        : null}
      </div>
    </div>
  );
}

// function Attachments(props) {
//   return (
//     <div className="noteAttachments">
//       {props.attachments.map((media, index) => {
//         let attachment = media.type === "image" ? <img src={media.url}/> : <video src={media.url} autoPlay muted playsInline loop/>
      
//         return (
//           <div
//             tabIndex={0}
//             className="media"
//             style={{
//               aspectRatio: media.width / media.height,
//             }}
//             onDoubleClick={() => {
//               if (props.windows.some(e => e.attachment === media)) { return }
//               props.open({
//                 type: "media",
//                 name: media.width + " × " + media.height,
//                 attachment: media
//               })
//             }}
//             key={media.url}
//             >
//             {attachment}
//           </div>
//         )
//       })}
//     </div>
//   )
// }
export default Note;