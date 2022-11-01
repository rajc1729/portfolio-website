import React from "react"
import "../../styles/Projects.scss"

export const ProjectCardLeft = ({
  title,
  technologies_text,
  code_link,
  description,
}) => {
  return (
    <>
      <div className="projectCardContainer">
        <div className="title_container">
          <div>
            <h4 className="title">{title}</h4>
            <h5 className="technology">{technologies_text}</h5>
          </div>

          <a
            title="github"
            href={code_link}
            target="_blank"
            className="code_link_container"
          >
            <div className="link_left">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 0C10.0763 0 0 10.0744 0 22.5C0 32.4412 6.44625 40.875 15.3881 43.8506C16.5112 44.0588 16.875 43.3612 16.875 42.7687V38.58C10.6163 39.9412 9.31312 35.925 9.31312 35.925C8.28938 33.3244 6.81375 32.6325 6.81375 32.6325C4.77188 31.2356 6.96938 31.2656 6.96938 31.2656C9.22875 31.4231 10.4175 33.585 10.4175 33.585C12.4238 37.0238 15.6806 36.03 16.965 35.4544C17.1656 34.0013 17.7488 33.0075 18.3938 32.4469C13.3969 31.875 8.14312 29.9456 8.14312 21.3263C8.14312 18.8681 9.0225 16.8619 10.4606 15.2869C10.2281 14.7188 9.4575 12.4294 10.68 9.33188C10.68 9.33188 12.57 8.72812 16.8694 11.6381C18.6637 11.1394 20.5875 10.89 22.5 10.8806C24.4125 10.89 26.3381 11.1394 28.1362 11.6381C32.4319 8.72812 34.3181 9.33188 34.3181 9.33188C35.5425 12.4313 34.7719 14.7206 34.5394 15.2869C35.9831 16.8619 36.855 18.87 36.855 21.3263C36.855 29.9681 31.5919 31.8713 26.5819 32.4281C27.3881 33.1256 28.125 34.4944 28.125 36.5944V42.7687C28.125 43.3669 28.485 44.07 29.6269 43.8488C38.5612 40.8694 45 32.4375 45 22.5C45 10.0744 34.9256 0 22.5 0Z"
                  fill="black"
                />
              </svg>
              <p>Code</p>
            </div>
          </a>
        </div>

        <div className="project_description_container">
          <ul className="project_description">
            <li>{description}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export const ProjectCardRight = ({
  title,
  technologies_text,
  code_link,
  description,
}) => {
  return (
    <>
      <div className="projectCardContainer">
        <div className="title_container">
          <a
            title="github"
            href={code_link}
            target="_blank"
            className="code_link_container"
          >
            <div className="link_right">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 0C10.0763 0 0 10.0744 0 22.5C0 32.4412 6.44625 40.875 15.3881 43.8506C16.5112 44.0588 16.875 43.3612 16.875 42.7687V38.58C10.6163 39.9412 9.31312 35.925 9.31312 35.925C8.28938 33.3244 6.81375 32.6325 6.81375 32.6325C4.77188 31.2356 6.96938 31.2656 6.96938 31.2656C9.22875 31.4231 10.4175 33.585 10.4175 33.585C12.4238 37.0238 15.6806 36.03 16.965 35.4544C17.1656 34.0013 17.7488 33.0075 18.3938 32.4469C13.3969 31.875 8.14312 29.9456 8.14312 21.3263C8.14312 18.8681 9.0225 16.8619 10.4606 15.2869C10.2281 14.7188 9.4575 12.4294 10.68 9.33188C10.68 9.33188 12.57 8.72812 16.8694 11.6381C18.6637 11.1394 20.5875 10.89 22.5 10.8806C24.4125 10.89 26.3381 11.1394 28.1362 11.6381C32.4319 8.72812 34.3181 9.33188 34.3181 9.33188C35.5425 12.4313 34.7719 14.7206 34.5394 15.2869C35.9831 16.8619 36.855 18.87 36.855 21.3263C36.855 29.9681 31.5919 31.8713 26.5819 32.4281C27.3881 33.1256 28.125 34.4944 28.125 36.5944V42.7687C28.125 43.3669 28.485 44.07 29.6269 43.8488C38.5612 40.8694 45 32.4375 45 22.5C45 10.0744 34.9256 0 22.5 0Z"
                  fill="black"
                />
              </svg>
              <p>Code</p>
            </div>
          </a>

          <div>
            <h4 className="title">{title}</h4>
            <h5 className="technology_right">{technologies_text}</h5>
          </div>
        </div>

        <div className="project_description_container">
          <ul className="project_description">
            <li>{description}</li>
          </ul>
        </div>
      </div>
    </>
  )
}
