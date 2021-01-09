const  Data= {
        "name": "Raj Chhatbar",
        "email": "rajc1729@outlook.com",
        "title": "Full-stack Software Engineer",
        "heroDescription": "I am a software engineer based on southern california, specializing in building full-stack cloud-based solutions.",

        "introductionPara1": "Hello! I'm Raj, a software engineer based in Los Angles, CA. Currently a master student studying Computer Science at California State University, Fullerton.",
        "introductionPara2": "There are no secrets to success. It's the result of preparation, hard work, and learning from failure. I enjoy creating, innovating, and testing new Ideas some work and others doesn't; however, I consider experience as the true wisdom",

        "social": {
            "id1": {
                "name": "github",
                "link": "https://github.com/rajc1729",
            },

            "id2": {
                "name": "linkedin",
                "link": "https://www.linkedin.com/in/raj-chhatbar1729/",
            },

            "id3": {
                "name": "stackoverflow",
                "link": "https://stackoverflow.com/users/11543330/rajc1729",
            },

            "id4": {
                "name": "medium",
                "link": "https://medium.com/",
            },
        },

        "language": {
            "id1": {
                "name": "Python(sync and async)",
                "rating": 90,
            },

            "id3": {
                "name": "JavaScript",
                "rating": 90,
            },

            "id4": {
                "name": "TypeScript",
                "rating": 80,
            },

            "id5": {
                "name": "SQL",
                "rating": 70,
            },

            "id6": {
                "name": "C/C++",
                "rating": 70,
            },

            "id7": {
                "name": "JAVA",
                "rating": 60,
            },

            "id8": {
                "name": "GO",
                "rating": 50,
            },
        },

        "technologies": {

            "Frameworks": {

                "id1": {
                    "name": "Django",
                },
    
                "id3": {
                    "name": "Django-REST",
                },
    
                "id4": {
                    "name": "React",
                },

                "id5": {
                    "name": "Gatsby",
                },

                "id6": {
                    "name": "Django-Channels",
                },

                "id7": {
                    "name": "Express-JS",
                },

                "id8": {
                    "name": "Flask",
                },
                
            },

            "Databases": {
                "id1": {
                    "name": "PostgreSQL",
                },
    
                "id3": {
                    "name": "MongoDB",
                },
    
                "id4": {
                    "name": "Firebase (Cloud Firestore and Realtime)",
                },

                "id5": {
                    "name": "Redis",
                },
            },

            "Tools": {
                "id1": {
                    "name": "Docker",
                },
    
                "id3": {
                    "name": "Git & GitHub",
                },
    
                "id4": {
                    "name": "OAuth",
                },

                "id5": {
                    "name": "Unix/Bash",
                },

                "id6": {
                    "name": "AWS (EC2, S3, Lambda)",
                },

                "id7": {
                    "name": "GCP",
                },
            },

        },


        "education": {
            "id1": {
                "institution": "California State University, Fullerton",
                "degree": "Masters of Science - Computer Science",
                "date": "August 2018 - Expected May 2021"
            },

            "id2": {
                "institution": "GLS University",
                "degree": "Post Graduate Diploma - Computer Science",
                "date": "March 2017 - March 2018"
            },

            "id3": {
                "institution": "St. Xavier's College, Ahmedabad",
                "degree": "Bachlors of Science - Physics",
                "date": "June 2014 - March 2017"
            },
        },

        "myIntrest": {
            "CantLiveWithout": {
                "items": [
                    "google/youtube(funny yeah but learned a lot from it)",
                    "Dark Chocolates",
                    "Indian Food"
                ]
            }
        },


        "experience":{
            "id1": {
                "title": "Graduate Research Assistant",
                "name": "California state university Fullerton",
                "startDate": "January 2020",
                "endDate": "July 2020",
                "description": [
                    "Conducted research to understand impacts on cancer, based on gender, ethnicity and geographic region",
                    "Analyzed the subset of data using statistical methods such as multi-comparisons, conducting meta-analysis with prior\
                    studies related to mortality and morbidity for a different type of cancer",
                    "Identified importance of various features through domain expert and removed irrelevant features",
                ],
            },

            "id2": {
                "title": "Software Developer Intern",
                "name": "Techmicra IT solutions",
                "startDate": "January 2018",
                "endDate": "June 2018",
                "description": [
                    "Created a unit testing framework on all backend modules using Python which reduced 20% bugs in the overall system",
                    "Designed and optimized SQL queries and stored procedures for faster execution; retrieval of data to the database",
                    "Managed and co-founded the committee to organize various events among employees",
                ],
            },

        },


        "projects": {
            "id1": {
                "title": "IMDB movie review data's sentiment analysis",
                "technologies": "Python, XGBoost, RNN",
                "link": "https://github.com/rac1729",
                "description": "Devised a sentiment analysis model to find out movie review sentiment by utilizing \
                XGBoost & deep learning RNN's on Amazon sage maker and deployed it over AWS"
            },

            "id2": {
                "title": "Virtual memory manager in operating system",
                "technologies": "C++, Singleton design, OOP, Page replacement algorithm",
                "link": "https://github.com/rac1729",
                "description": " Implemented a virtual memory management system, included support for paging, Virtual Memory and page\
                replacement to and from the backing store by utilizing LRU and FIFO page replacement algorithm"
            },

            "id3": {
                "title": "Text search using Docker and Elastic Search",
                "technologies": "NodeJS, Docker, Elastic search, ReactJS, Nginx",
                "link": "https://github.com/rac1729",
                "description": "Populated Elasticsearch with 100 books (230,000 paragraphs) to prepare a search API by leveraging Nginx and NodeJS\
                backend client along with ReactJS as frontend client"
            },

            "id4": {
                "title": "Real-Time Taxi App with Django Channels and React",
                "technologies": "Django- Channels, Redis, PY-test, ReactJS, Nginx",
                "link": "https://github.com/rac1729",
                "description": "Used asynchronous Django-channels to create WebSocket hooked with React-JS to visualize the current location using\
                Google Maps. Leveraged Cypress for creating end-to-end testing"
            },
        },

    }


export default Data