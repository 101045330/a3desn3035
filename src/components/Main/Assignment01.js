import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const Assignment01 = ({ title }) => (
    <section>

        <h1>{title}</h1>

        <Tabs>
            <TabList>
                <Tab>Problem</Tab>
                <Tab>Requirement</Tab>
                <Tab>Solutions</Tab>
            </TabList>

            <TabPanel>

                <h2>Assignment 1: Simple HTML/CSS website via GitHub Pages</h2>
                <hr noshades />

                <h4>Instructions &  Objectives </h4>

                <blockquote>
                Students will be asked to develop and deploy
                    a simple HTML and CSS based website
                    (featuring at least three pages) using GitHub Pages,
                    building upon their experience with Exercise #1.
                    You are welcome to use third-party design software
                    such as Webflow.
                </blockquote>

                <p>
              
                    *Addendum: <br />
                    
                    You should NOT use React or npm as
                    part of this assignment, as those should be
                    reserved for Assignment 3. Please focus on
                    simple HTML and CSS, as well as the materials
                    covered during Exercise 1.

                </p>

            </TabPanel>

            <TabPanel>

                <h2>Requirement</h2>
                <hr noshades />

                <h4>Deliverable</h4>
                <ul>

                    <li>- Public URL of the completed website hosted by GitHub Pages</li>
                    <li>- Public URL of the corresponding GitHub repository</li>
                </ul>

            </TabPanel>

            <TabPanel>

                <h2>Solutions</h2>
                <hr noshades />

                <h4>Experience (5%)</h4>

                <p>
                    Each page must include its own title
                    and its own description
                    Technical formatting of the page must
                    adhere to best practices of prototype
                    design
                    <br /> <br />
                    Images must be sized appropriately
                    Proper use of images, links, and
                    other media elements
                    Writing skills, grammar, spelling,
                    style etc.
                    <br /> <br />
                    The content is well written and
                    does not have spelling or grammatical
                    errors
                    The content is well formatted and
                    considers punctuation, readability,
                    typography, etc.
                </p>

                <h4>Functionality (5%)</h4>

                <ol>
                    <li>
                        All links work as expected and lead
                        to the appropriate screen
                    </li>

                    <li>
                        There are no "screen-not-found"
                        errors
                    </li>

                    <li>
                        Links click to the page they are
                        referring to
                    </li>

                    <li>
                        Forms, search, music playing or
                        other special functionality works as expected
                    </li>

                    <li>
                        Images load fast
                    </li>
                </ol>

                <h4>Design (5%)</h4>
                <p>
                    Orientation: Users will always know
                    where they are in the prototype
                    Interaction: Users will always know
                    how to navigate through the prototype
                    Target market and demographic
                    Screen size and resolution
                    Visual balance, composition, colour
                    theory and artistic expression
                    Consideration of visual hierarchy,
                    elements and principles of design.
                </p>

            </TabPanel>

        </Tabs>

    </section>
);

export default Assignment01;