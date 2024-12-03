import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Assignment1 from "./Assignment1";
import Assignment2 from "./Assignment2";
import Assignment3 from "./Assignment3";
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
              <Assignment1 />

            </TabPanel>

            <TabPanel>
                <Assignment2 />
            </TabPanel>

            <TabPanel>
                <Assignment3 />
            </TabPanel>

        </Tabs>

    </section>
);

export default Assignment;