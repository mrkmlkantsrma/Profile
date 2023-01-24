import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Backend from "./backend.component";
import Frontend from "./frontend.component";


const Projects = () => {
  return (
    <div id="projects">
      <Tabs>
        <TabList>
          <h2>Projects</h2>
          <div>
            <Tab default={true}>Backend</Tab>
            <Tab disabled >Frontend</Tab>
          </div>
        </TabList>

        <TabPanel>
          <Backend />
        </TabPanel>
        <TabPanel>
          <Frontend />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Projects;
