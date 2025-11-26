import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [activeIndex, setActiveIndex] = useState(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setLetterClass('text-animate-hover'), 2500);
    const timer2 = setTimeout(() => setShowContent(true), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const experience = [
    { title: 'M.Sc. in Computer Science and Engineering with a Specialization in AI and Machine Learning', subtitle: 'Linköping University', description: '08/2021 - 06/2026' },
    { title: 'Master in Applied Artificial Intelligence and Interactive Systems', subtitle: 'Grenoble INP - Ensimag, UGA, France', description: 'Erasmus exchange during 08/2024 - 02/2025' },
    { title: 'Software Developer Summer Intern', subtitle: 'Ida Infront, Linköping', description: 'Developed a GDPR compliance tool using LLMs to automatically flag sensitive content in documents. Designed and implemented the core NLP pipeline and fine-tuned the models. Built a React-based user interface for the users to review flagged documents.' },
    { title: 'Student Brand Ambassador', subtitle: 'Ida Infront, Linköping', description: 'Planned and coordinated with the company and student organizations ahead of expos and events. Represented the company during student events and career fairs.' },
    { title: 'Retail sales representative', subtitle: 'Telia, Stockholm', description: 'Worked in a Telia store with B2B and B2C sales of mobile subscriptions, broadband, and related services. Assisted customers in finding tailored solutions while building long-term relationships.' },
  ];

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="container about-page">
      <div className="about-content">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <p className={`about-paragraph ${showContent ? 'visible' : 'hidden'}`}>
            Final-year Master’s student specializing in AI and Machine Learning, driven by
            challenges and solving interesting and complex problems. I like to see myself as a
            collaborative team player, seeking to contribute to projects while continuously
            learning and developing. Outside of my studies, I enjoy working out, skiing and
            spending time with friends.
          </p>
        </div>

        <div className={`accordion-zone ${showContent ? 'visible' : 'hidden'}`}>
          {experience.map((job, index) => (
            <div
              key={job.title}
              className={`accordion-item ${activeIndex === index ? 'open' : ''}`}
            >
              <button
                type="button"
                className="accordion-header"
                onClick={() => handleToggle(index)}
              >
                <div className="accordion-text">
                  <span className="accordion-title">{job.title}</span>
                  <span className="accordion-subtitle">{job.subtitle}</span>
                </div>
                <span className="accordion-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <div className="accordion-body">
                <p>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
