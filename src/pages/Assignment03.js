import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const Assignment03 = ({ title }) => (
    <section>

        <h1>{title}</h1>
        <Tabs>
            <TabList>
                <Tab>Problem3</Tab>
                <Tab>Requirement3</Tab>
                <Tab>Solutions3</Tab>
            </TabList>

            <TabPanel>


                <h2>Assignment 3: Complex framework-based website via React</h2>
                <p>Building upon our experience with React / Next.JS and npm, students will be asked to develop and deploy a React-based website using GitHub Pages. You are encouraged to reuse assets from your past submissions in and out of this course.</p>

            </TabPanel>

            <TabPanel>


                <h2>Requirement</h2>
                <p>Public URL of the corresponding GitHub repository
<br/><br/>
Additional Notes

25% assigned per valid submission

This assignment is designed for open-ended exploration and experimentation, but will be subject to potential penalty based on submission timing and validity of submitted entry.</p>

            </TabPanel>

            <TabPanel>


                <h2>Solutions</h2>
                <p>Project documentation (5%)
README: Clear, concise instructions on
 setting up, running, and deploying the 
 project; details about required 
 dependencies, how to install them, and 
 any configurations necessary for local
  development

Functionality and feature 
completeness (5%)
Core feature: Essential features 
implemented and functional; core user flows are smooth and error-free
User experience and visual design (5%)
UI consistency: Consistent design, 
adhering to a defined color scheme, typography, and layout; adapts well to different viewports, from mobile to desktop; easy to navigate, with clear labeling and placement of menus, buttons, and links. 
Code quality and maintainability (5%)
Modularity and reusability: Code 
is well-organized into modular, reusable 
components; focusing on a specific task and avoiding duplication
Deployment workflow and automation pipeline (5%)
Continuous Integration (CI): 
CI pipeline (e.g., GitHub Actions) to automate testing and code linting on every pull request or code push; automated workflow to build and deploy the app on each commit to the main branch
Deadline

December 10, 2024 at 11:59PM (tentative)
(Fixed penalty of 10%, equivalent to 2.5% of the final grade, for late submission</p>

            </TabPanel>

        </Tabs>

    </section>
);

export default Assignment03;