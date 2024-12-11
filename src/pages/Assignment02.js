import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const Assignment02 = ({ title }) => (
    <section>

        <h1>{title}</h1>
        <Tabs>
            <TabList>
                <Tab>Problem</Tab>
                <Tab>Requirement</Tab>
                <Tab>Solutions</Tab>
            </TabList>

            <TabPanel>


                <h2>Assignment 2: Open-source project contribution via GitHub Issue / Pull Request</h2>
                <p>
                    <blockquote>
                        Students will be asked to browse existing open source projects on GitHub / npm and  demonstrate their ability to interact with the wider community. One can contribute to a select project by either 1) reporting an apparent issue and/or 2) submitting a pull request that improves upon the project or fixes an apparent bug.
                    </blockquote>

                    Thereafter, students will individually write a short (~500 words or longer as applicable) report that provides a critical and reflective analysis of their experience in contributing to open source projects. Descriptive and reflective in nature, this report may also explain the student's original intent and relevant inspirations, while examining the open source contribution in relation to the current state of the industry.
                </p>

            </TabPanel>

            <TabPanel>


                <h2>Requirement</h2>

                <h4>Deliverable</h4>

                <ol>
                    <li>Public URL of the open source contribution(s)</li>
                    <li>Text document (ex. PDF)</li>
                </ol>

                <h5>Additional Notes</h5>
                <ol>
                    <li>
                        15% assigned per valid submission

                    </li>

                    <li>
                        This assignment is designed for open-ended
                        exploration and experimentation, but will be
                        subject to potential penalty based on submission
                        timing and validity of submitted entry.
                    </li>
                </ol>




            </TabPanel>

            <TabPanel>


                <h2>Solutions</h2>
                <p>

                    Completeness and relevance of the open source contribution (5%)
                    Insights, strategies, and reflections derived from the experience (5%)
                    Rigour, style, and etiquette evident in contribution and reflection (5%)
                    Reference

                    Examples of Reflective Writing: https://student.unsw.edu.au/examples-reflective-writing
                    Tips in Writing a Reflective Statement: https://www.examples.com/business/tips-in-writing-reflective-statement.html

                    Deadline

                    November 5, 2024 at 11:59PM (tentative)
                    (Fixed penalty of 10%, equivalent to 1.5% of the final grade, for late submission
                </p>

            </TabPanel>

        </Tabs>

    </section>
);

export default Assignment02;