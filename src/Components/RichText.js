import React, { useState, useEffect, useRef } from 'react';

function RichText({ text }) {
  // Assuming 'text' contains HTML content
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
}

export default RichText;
