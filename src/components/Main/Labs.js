// src/pages/Labs.js
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const labs = [
  {
    id: 1,
    title: 'Using GitHub and its various products (GitHub Pages, and Codespaces), create and publish a simple microsite that demonstrates the fundamental skills in version control and repo management.',
    description: 'Public URL of the GitHub repository or the published microsite and Accompanying discussion (approximately 50 to 100 words) detailing your experience: what was challenging? what did you find fascinating? where else would you apply these techniques?',
  },
  {
    id: 2,
    title: 'Based on an existing GitHub repo, extend and modify the React website by using various third-party packages found using npm.',
    description: 'Public URL of the GitHub repository. No GitHub Pages link is expected or required for this submission: just the repo URL. and Accompanying discussion (approximately 50 to 100 words) detailing your experience: what was challenging? what did you find fascinating? where else would you apply these techniques?',
  },
  {
    id: 3,
    title: 'After forking an existing GitHub repo, integrate an external database via Supabase and submit a formal pull request back into the original repo.',
    description: 'Public URL of the GitHub repository or the Pull Request URL. No GitHub Pages link is expected or required for this submission. Accompanying discussion (approximately 50 to 100 words) detailing your experience: what was challenging? what did you find fascinating? where else would you apply these techniques?',
  },
  {
    id: 4,
    title: 'Using the provided HTML page as a starting point, experiment with 1) spinning up a brand new Next.js page from scratch, 2) modularizing the page into reusable components, and 3) deploying to live via GitHub Pages.',
    description: 'Public URL of the GitHub Pages website or the GitHub repository. And Accompanying discussion (approximately 50 to 100 words) detailing your experience: what was challenging? what did you find fascinating? where else would you apply these techniques?',
  },
  {
    id: 5,
    title: 'Exercise #5: Browser automation and report generation via GitHub Actions',
    description: 'Using the provided GitHub repo as a starting point, experiment with 1) browser automation with Puppeteer and Lighthouse and 2) GitHub Actions pipeline with a brand new workflow file.',
  },
  {
    id: 6,
    title: 'Using the provided GitHub repo as a starting point, 1) experiment with Markdown syntax and automatic PDF export and 2) establish an automatic release pipeline via GitHub Actions.',
    description: 'Public URL of the GitHub repository and Accompanying discussion (approximately 50 to 100 words) detailing your experience: what was challenging? what did you find fascinating? where else would you apply these techniques?',
  },
];

const Labs = () => (
  <div>
    <h1>Labs</h1>
    <Accordion>
      {labs.map((lab) => (
        <AccordionItem key={lab.id}>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h2>{lab.title}</h2>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <article>
              <p>{lab.description}</p>
            </article>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default Labs;