import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const Assignment = ({ title }) => (
    <section>

        <h1>{title}</h1>
        <Tabs>
            <TabList>
                <Tab>Problem</Tab>
                <Tab>Requirement</Tab>
                <Tab>Solutions</Tab>
            </TabList>

            <TabPanel>


                <h2>Problem1</h2>
                <p>Describe the problem here.1</p>

            </TabPanel>

            <TabPanel>


                <h2>Requirement1</h2>
                <p>Describe the Requirement here.1</p>

            </TabPanel>

            <TabPanel>

                <h2>Solutions1</h2>
                <p>Describe the Solutions here.1</p>

            </TabPanel>

        </Tabs>

    </section>
);

export default Assignment;