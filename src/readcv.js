// readcv.js
const cv = {
  media: (filename) => process.env.PUBLIC_URL + '/media/' + filename,
  general: {
    profilePhoto: process.env.PUBLIC_URL + '/images/profile-photo.jpg', // Update this path with your actual profile photo
    displayName: 'Tanmay Jain',
    byline: 'Computer Science Student specializing in Data Science and Analytics',
    username: 'tanmaydoesai',
    about: `
      <p>Passionate about AI and Machine Learning, with experience in Computer Vision, Data Science, and software development.</p>
      <p>Skilled in Python, SQL, Git, GitHub, PowerBI, Scikit-Learn, TensorFlow, PyTorch, Keras, and AI concepts like Generative AI, LLM FineTuning, Embeddings, and Vectorization.</p>
      <p>Strong leadership and collaboration skills, with experience in strategic resolution and analytical reasoning.</p>
    `,
  },
  contact: [
    {
      id: 1,
      platform: 'Email',
      url: 'mailto:tanmay5tj@gmail.com',
      handle: 'tanmay5tj@gmail.com',
    },
    {
      id: 2,
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/tanmaydoesai',
      handle: 'Tanmay Jain',
    },
    {
      id: 3,
      platform: 'GitHub',
      url: 'https://github.com/tanmaydoesai',
      handle: 'tanmaydoesai',
    },
    {
      id: 4,
      platform: 'Twitter',
      url: 'https://twitter.com/tanmaydoesai',
      handle: '@tanmaydoesai',
    },
    {
      id: 5,
      platform: 'Website',
      url: 'https://tanmaydoesai.github.io/',
      handle: 'Personal Website',
    },
  ],
  allCollections: [
    {
      name: 'Experience',
      items: [
        {
          heading: 'Computer Vision and IoT Intern',
          year: 'Jan 2024 - Apr 2024',
          location: 'OneDose, Jaipur',
          description: `
            <ul>
              <li>Created and curated a custom dataset using ESP32 cameras for computer vision applications.</li>
              <li>Implemented the YOLO algorithm, achieving an initial <strong>accuracy of 63%</strong> for pill detection.</li>
              <li>Optimized pipeline efficiency, <strong>reducing processing time by 25%</strong> to enable near real-time performance.</li>
            </ul>
          `,
          url: '', // Add a URL if available
          attachments: [],
          id: 'onedose-internship',
        },
        {
          heading: 'Freelance Data Science Consultant',
          year: 'Mar 2023 - Nov 2023',
          location: 'Weed.com, California',
          description: `
            <ul>
              <li>Scraped <strong>70k+ products' data</strong> using <strong>Selenium and BeautifulSoup</strong> from wholesale websites.</li>
              <li>Performed <strong>sales and customer ratings analysis</strong> to identify top-performing products for potential features.</li>
              <li>Utilized advanced LLM techniques to generate <strong>6k+ articles</strong> about different strains, enhancing website content and engagement.</li>
            </ul>
          `,
          url: '', // Add a URL if available
          attachments: [],
          id: 'weedcom-consultant',
        },
        {
          heading: 'Collaborator & Maintainer',
          year: 'Sep 2023 - Nov 2023',
          location: 'Open Interpreter',
          description: `
            <ul>
              <li>Maintained pull requests and addressed issues, ensuring the stability and functionality of the project, which has over <strong>50k stars</strong> on GitHub.</li>
              <li>Tested and merged various pull requests, contributed over <strong>12 commits</strong>, and managed the <strong>Discord community of over 9k members</strong>, providing technical support and fostering collaboration among users.</li>
              <li>Created the initial project documentation and continuously enhanced it, making it accessible and user-friendly for developers and contributors.</li>
            </ul>
          `,
          url: 'https://github.com/openinterpreter/open-interpreter',
          attachments: [],
          id: 'open-interpreter',
        },
        {
          heading: 'Software Lead',
          year: 'Sep 2022 - Present',
          location: 'JU Makerspace, JECRC University',
          description: `
            <ul>
              <li>Led software development initiatives, specializing in <strong>Arduino and Raspberry Pi projects</strong> with a focus on AI and ML applications.</li>
              <li>Managed a team of <strong>100+ people</strong> and administered the annual <strong>Maker's Carnival</strong>, managing a crowd of <strong>12,000+ people</strong> and coordinating with various speakers.</li>
              <li><strong>Delivered AI and ML sessions</strong> to a diverse audience, contributing to widespread knowledge sharing and skill enhancement.</li>
            </ul>
          `,
          url: '', // Add a URL if available
          attachments: [],
          id: 'ju-makerspace',
        },
      ],
    },
    {
      name: 'Projects',
      items: [
        {
          heading: 'Anime-GAN: Exploring Generative Adversarial Networks',
          year: '2023',
          location: '',
          description: `
            <ul>
              <li><strong>Developed and deployed a robust Flask web application</strong> utilizing DCGAN to generate anime faces, enhancing graphical content generation.</li>
              <li><strong>Engineered a fully automated setup and hosting pipeline</strong> using Conda and Ngrok, streamlining installation and facilitating global access.</li>
              <li><strong>Implemented a flexible training pipeline</strong> in Jupyter Notebook, allowing users to train the model on diverse datasets and tweak parameters.</li>
            </ul>
          `,
          url: 'https://github.com/TanmayDoesAI/anime-gan',
          attachments: [], // Add attachments if available
          id: 'anime-gan',
        },
        {
          heading: 'AI Research Companion (Ongoing)',
          year: '2023',
          location: '',
          description: `
            <ul>
              <li><strong>Leading the end-to-end development of an AI-powered research tool</strong>, integrating Large Language Models to enhance academic research.</li>
              <li><strong>Innovating with seamless PDF reader and audio conversion integrations</strong> to ensure accessibility and boost academic productivity.</li>
              <li><strong>Designing advanced, context-sensitive question-answer modules</strong> and a robust peer review system for dynamic scholarly interaction.</li>
            </ul>
          `,
          url: '', // Add a URL if available
          attachments: [], // Add attachments if available
          id: 'ai-research-companion',
        },
      ],
    },
    {
      name: 'Education',
      items: [
        {
          heading: 'B.Tech in Computer Science (Data Science and Analytics)',
          year: '2021 - 2025',
          location: 'JECRC University',
          description: `
            <p><strong>GPA:</strong> 8.5</p>
          `,
          url: '', // Add a URL if available
          attachments: [],
          id: 'jecrc-university',
        },
      ],
    },
  ],
};

export default cv;
