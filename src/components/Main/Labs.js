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
    title: 'Lab 1',
    description: 'Description for Lab 1',
  },
  {
    id: 2,
    title: 'Lab 2',
    description: 'Description for Lab 2',
  },
  {
    id: 3,
    title: 'Lab 3',
    description: 'Description for Lab 3',
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