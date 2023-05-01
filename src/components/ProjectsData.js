
import dbsImg from '../images/dbs.png';
import aiImg from '../images/imagegenerator.png';
import cryptoImg from '../images/crypto.png';
import scorekeeperImg from '../images/scorekeeper.png'

export const projectsData = [
    {
        id: 1,
        title: "DBS Consulting",
        img: dbsImg,
        description: "Develop using ReactJs, a website for consulting company that provides services in various fields with features such as contact form, team member section, and service descriptions. Utilized modern web development tools such as Webpack and Babel to bundle and convert code more effectively.",
        demoUrl: "https://dbsnepal.com/",
        githubUrl: "https://github.com/gorock007/dbs-consulting",
    },
    {
        id: 2,
        title: "AI Image Generator",
        img: aiImg,
        description: "Develop using Vanilla Javascript that leverages OpenAI's DALLE-E API for text-to-image generation. The user inputs a prompt of an image, and the application generate a corresponding image. User can choose upto 3 different sizes to display and download a generated image.",
        demoUrl: "https://github.com/gorock007/ai-image-generator",
        githubUrl: "https://github.com/gorock007/ai-image-generator",
    },
    {
        id: 3,
        title: "Crypto News",
        img: cryptoImg,
        description: "Develop using React and Ant Design library, and includes features such as live price updates and ability to search and filter news articles by keyword. The appliction displays news articles and real-time data on cryptocurrencies. Data is fetched from RapidAPI using Axios library and with the implementation of Redux and React Router.",
        demoUrl: "https://gorock007.github.io/crypto-app/",
        githubUrl: "https://github.com/gorock007/crypto-app",
    },
    {
        id: 4,
        title: "PingPong ScoreKeeper",
        img: scorekeeperImg,
        description: "Simple PingPong ScoreKeeper build with vanilla JS and BULMA css framework. Players can add their name and keep track of the each players points. All the game history will be displayed in the score board.",
        demoUrl: "https://gorock007.github.io/PingPong-ScoreKeeper/",
        githubUrl: "https://github.com/gorock007/PingPong-ScoreKeeper",
    },
    
];
