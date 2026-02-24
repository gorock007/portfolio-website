
import dbsImg from '../images/dbs.png';
import aiImg from '../images/imagegenerator.png';
import cryptoImg from '../images/crypto.png';
import scorekeeperImg from '../images/scorekeeper.png';
import summaizeImg from '../images/summaize.png';
import podcastImg from '../images/podcast.jpeg';

export const projectsData = [
    {
        id:1,
        title: 'Podcast Summarizer',
        img: podcastImg,
        description:"Podcast Summarizer powered by OpenAI GPT-4. Transforms your top podcast picks into concise newsletter summaries for each episode using function calling.",
        tags: ['Python', 'Streamlit', 'OpenAI', 'Modal'],
        demoUrl:"https://corise-podcast-sumarizer.streamlit.app/",
        githubUrl: "https://github.com/gorock007/podcast-summarizer/",
    },
    {
        id:2,
        title: 'SummAIze',
        img: summaizeImg,
        description:"Article summarizing tool powered by OpenAI GPT-4. Makes reading and research easier by condensing long articles into short and concise summaries.",
        tags: ['React', 'Redux', 'Tailwind', 'OpenAI'],
        demoUrl:"https://summaize.vercel.app/",
        githubUrl: "https://github.com/gorock007/summAIze",
    },
    {
        id: 3,
        title: "DBS Consulting",
        img: dbsImg,
        description: "A consulting company website with contact form, team member section, and service descriptions. Built with modern web development tools for optimal performance.",
        tags: ['React', 'Webpack', 'Babel', 'CSS'],
        demoUrl: "https://dbsnepal.com/",
        githubUrl: "https://github.com/gorock007/dbs-consulting",
    },
    {
        id: 4,
        title: "AI Image Generator",
        img: aiImg,
        description: "Text-to-image generation app leveraging OpenAI's DALL-E API. Users can choose up to 3 different sizes to display and download generated images.",
        tags: ['JavaScript', 'DALL-E API', 'CSS'],
        demoUrl: "https://ai-image.netlify.app/",
        githubUrl: "https://github.com/gorock007/ai-image-generator",
    },
    {
        id: 5,
        title: "Crypto News",
        img: cryptoImg,
        description: "Live cryptocurrency price updates with searchable and filterable news articles. Real-time data fetched from RapidAPI with Redux state management.",
        tags: ['React', 'Redux', 'Ant Design', 'RapidAPI'],
        demoUrl: "https://gorock007.github.io/crypto-app/",
        githubUrl: "https://github.com/gorock007/crypto-app",
    },
    {
        id: 6,
        title: "PingPong ScoreKeeper",
        img: scorekeeperImg,
        description: "Score tracking app for PingPong matches. Players add names and track points with full game history displayed on a live scoreboard.",
        tags: ['JavaScript', 'Bulma', 'HTML'],
        demoUrl: "https://gorock007.github.io/PingPong-ScoreKeeper/",
        githubUrl: "https://github.com/gorock007/PingPong-ScoreKeeper",
    },

];
