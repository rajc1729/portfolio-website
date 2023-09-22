import React from "react"
import { useEffect, useState } from "react"
import "../styles/Work.scss"

const Work = () => {
  const [windowWidth, setWindowWidth] = useState(null)
  const [currentExperience, setCurrentExperience] = useState<string>("amazon")

  const updateWindowSize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize)
    updateWindowSize()
  }, [])

  return (
    <>
      <section id="experience">
        <div className="work_container">
          <h3 className="title">My Experience</h3>
          <div className="tab_container">
            {windowWidth < 768 && (
              <div className="work_list_flex">
                <div>
                  <button
                    onClick={() => setCurrentExperience("amazon")}
                    className={
                      currentExperience === "amazon"
                        ? "work_flex_name_button_highlight"
                        : "work_flex_name_button"
                    }
                  >
                    Amazon
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => setCurrentExperience("collabcafe")}
                    className={
                      currentExperience === "collabcafe"
                        ? "work_flex_name_button_highlight"
                        : "work_flex_name_button"
                    }
                  >
                    CollabCafe
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => setCurrentExperience("csuf")}
                    className={
                      currentExperience === "csuf"
                        ? "work_flex_name_button_highlight"
                        : "work_flex_name_button"
                    }
                  >
                    CSUF
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => setCurrentExperience("techmicra")}
                    className={
                      currentExperience === "techmicra"
                        ? "work_flex_name_button_highlight"
                        : "work_flex_name_button"
                    }
                  >
                    Techmicra
                  </button>
                </div>
              </div>
            )}

            {windowWidth > 768 && (
              <div className="work_list">
                <div>
                  <button
                    onClick={() => setCurrentExperience("amazon")}
                    className={
                      currentExperience === "amazon"
                        ? "work_name_button_highlight"
                        : "work_name_button"
                    }
                  >
                    Amazon
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => setCurrentExperience("collabcafe")}
                    className={
                      currentExperience === "collabcafe"
                        ? "work_name_button_highlight"
                        : "work_name_button"
                    }
                  >
                    CollabCafe
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => setCurrentExperience("csuf")}
                    className={
                      currentExperience === "csuf"
                        ? "work_name_button_highlight"
                        : "work_name_button"
                    }
                  >
                    CSUF
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => setCurrentExperience("techmicra")}
                    className={
                      currentExperience === "techmicra"
                        ? "work_name_button_highlight"
                        : "work_name_button"
                    }
                  >
                    Techmicra
                  </button>
                </div>
              </div>
            )}

            <div className="work_tab_container">
              {currentExperience === "amazon" && (
                <div>
                  <h4 className="experience_title">
                    Software Development Engineer
                  </h4>
                  <h4 className="company">
                    Amazon.com, Inc. and its affiliates and subsidiaries.
                  </h4>
                  <h5>August 2021 - Present</h5>

                  <ul className="experience_description">
                    <li>
                      Successfully developed and integrated services with 
                      third-party sellers, making financial offers eligible for 
                      third-party products and leading to a remarkable 30% increase 
                      in business Gross Merchandise Sales (GMS).
                    </li>

                    <li>
                      Led a successful migration of the Service Provider Interface 
                      (SPI) to ensure consistent data sharing across services, 
                      resulting in a remarkable improvement of overall system cohesion by 50%.
                    </li>

                    <li>
                      Enhanced integrations with other services by evaluating and 
                      collFeMaboratively addressing each edge case with upstream clients, 
                      ensuring the provision of accurate financial offers to customers during 
                      single-page checkout. This initiative resulted in a substantial 25% 
                      reduction in the manual reconciliation process.
                    </li>

                     <li>
                      Collaborated on the resolution of failing integration tests and contributed 
                       to the optimization of the CICD pipeline for seamless automatic code deployment, 
                       resulting in a significant 25% reduction in manual deployment time, equivalent 
                       to saving 8 SDE hours weekly.
                    </li>

                    <li>
                      Built and fixed the data pipeline in close collaboration with data engineers to 
                      generate financial offer usage reporting, resulting in a substantial 15% increase 
                      in the business's ability to identify customer trends for different products.
                    </li>

                    <li>
                      Led initiatives to enhance Tier-1 development environment availability, resulting in an 
                      impressive 80% increase in uptime and accessibility by identifying and resolving 
                      'maxConnectionPerHost' issues. 
                    </li>

                    <li>
                    Developed and enhanced the reliability of internal dashboards by systematically addressing front-end 
                    issues related to forms, implementing robust API exception handling, and mitigating race conditions 
                    to ensure seamless performance.  
                    </li>

                    <li>
                      Implemented scripts for data backfilling and addressing ad-hoc data requests, 
                      resulting in streamlined operations and a significant reduction in the 
                      number of services required, achieving an efficiency improvement of approximately 20%.
                    </li>

                     <li>
                      Implemented and integrated shadow mode testing to mitigate the risk of 
                      customer-impacting issues, ensuring a smoother and more reliable user experience. 
                    </li>

                    <li>
                      Enhanced internal search integration, achieving a 20% improvement in performance of widgets
                      <br />
                      <a href="https://www.amazon.com/pcb" className="link">
                        https://www.amazon.com/pcb
                      </a>
                    </li>
                  </ul>
                </div>
              )}

              {currentExperience === "collabcafe" && (
                <div>
                  <h4 className="experience_title">
                    Full-stack software engineer Intern
                  </h4>
                  <h4 className="company">CollabCafe, Inc.</h4>
                  <h5>Febuary 2021 - May 2021</h5>

                  <ul className="experience_description">
                    <li>
                      Implementing 35 reusable components using Next.js,
                      Typescript, and 30 REST APIs using Django REST Framework
                    </li>

                    <li>
                      Expedited APIs response time by utilizing asynchronous
                      task queue using Celery for running background task
                    </li>

                    <li>
                      Building a video chat application using Kubernetes cluster
                      and opensource WebRTC Jits framework to serve 1000 users
                    </li>
                  </ul>
                </div>
              )}

              {currentExperience === "csuf" && (
                <div>
                  <div>
                    <h4 className="experience_title">
                      Student Assistant at University Data Center
                    </h4>
                    <h4 className="company">
                      California state university Fullerton
                    </h4>
                    <h5>August 2020 - Present</h5>

                    <ul className="experience_description">
                      <li>
                        Configured Nginx to setup reverse proxy and using
                        telnet, grep Linux tools for testing, debugging, and
                        troubleshooting
                      </li>

                      <li>
                        Reduced deployment time by developing bash scripts to
                        automate build and deployment on Ubuntu servers
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="experience_title">
                      Graduate Research Assistant
                    </h4>
                    <h4 className="company">
                      California state university Fullerton
                    </h4>
                    <h5>January 2020 - July 2020</h5>

                    <ul className="experience_description">
                      <li>
                        Conducted research to understand impacts on cancer,
                        based on gender, ethnicity and geographic region
                      </li>

                      <li>
                        Analyzed the subset of data using statistical methods
                        such as multi-comparisons, conducting meta-analysis with
                        prior studies related to mortality and morbidity for a
                        different type of cancer
                      </li>

                      <li>
                        Identified importance of various features through domain
                        expert and removed irrelevant features
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {currentExperience === "techmicra" && (
                <div>
                  <h4 className="experience_title">
                    Software Developer Intern
                  </h4>
                  <h4 className="company">Techmicra IT solutions</h4>
                  <h5>January 2018 - June 2018</h5>

                  <ul className="experience_description">
                    <li>
                      Created a unit testing framework on all backend modules
                      using Python which reduced 20% bugs in the overall system
                    </li>

                    <li>
                      Designed and optimized SQL queries and stored procedures
                      for faster execution; retrieval of data to the database
                    </li>

                    <li>
                      Managed and co-founded the committee to organize various
                      events among employees
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Work
