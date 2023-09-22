import React from "react"
import "../styles/Contact.scss"
import Data from "../assets/data"

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="contact_container">
          <span className="contact_title">Get In Touch</span>

          <p className="contact_description">
            Actively looking for new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>

          <a
            title="Email"
            href={`mailto:${Data.email}`}
            className="say_hello_button"
          >
            Say Hello!
          </a>

          <div className="link_container">
            <a
              title={Data.social.id1.name}
              href={Data.social.id1.link}
              target="_blank"
            >
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="social_icon"
              >
                <path
                  d="M35.625 0H9.375C4.19813 0 0 4.19813 0 9.375V35.625C0 40.8019 4.19813 45 9.375 45H35.625C40.8038 45 45 40.8019 45 35.625V9.375C45 4.19813 40.8038 0 35.625 0ZM27.2513 36.7313C26.4919 36.8775 26.25 36.4106 26.25 36.0112V31.8956C26.25 30.495 25.7587 29.5837 25.2187 29.1187C28.56 28.7475 32.07 27.4781 32.07 21.7181C32.07 20.0794 31.485 18.7406 30.5269 17.6925C30.6806 17.3137 31.1944 15.7875 30.3787 13.7231C30.3787 13.7231 29.1206 13.32 26.2575 15.2606C25.0575 14.9231 23.775 14.76 22.5 14.7525C21.225 14.7581 19.9425 14.9231 18.7444 15.2569C15.8794 13.3163 14.6194 13.7194 14.6194 13.7194C13.8056 15.7856 14.3194 17.31 14.475 17.6906C13.515 18.7406 12.93 20.0775 12.93 21.7162C12.93 27.4612 16.4306 28.7494 19.7644 29.13C19.335 29.505 18.9469 30.165 18.8119 31.1363C17.955 31.5188 15.7856 32.1806 14.4469 29.8875C14.4469 29.8875 13.6538 28.4475 12.1463 28.3406C12.1463 28.3406 10.6837 28.3219 12.0431 29.2538C12.0431 29.2538 13.0275 29.715 13.71 31.4475C13.71 31.4475 14.5781 34.125 18.75 33.2175V36.0094C18.75 36.405 18.5081 36.87 17.76 36.7313C11.7975 34.7494 7.5 29.1262 7.5 22.5C7.5 14.2144 14.2162 7.5 22.5 7.5C30.7838 7.5 37.5 14.2144 37.5 22.5C37.5 29.1244 33.2081 34.7456 27.2513 36.7313V36.7313Z"
                  fill="black"
                />
              </svg>
            </a>

            <a
              title={Data.social.id3.name}
              href={Data.social.id3.link}
              target="_blank"
            >
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="social_icon"
              >
                <rect width="45" height="45" rx="8" fill="black" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.2593 24.7576L15.4838 21.8109L14.8333 24.8666L29.5155 28.2532L30.0554 25.7199L30.7757 26.1058L32.0833 22.882L18.0577 15.3686L16.75 18.5915L28.2593 24.7576ZM34 26.1058V35.7692H11V26.1058H13.875V32.5481H31.125V26.1058H34ZM14.8333 28.2532H30.1667V31.4744H14.8333V28.2532ZM34 20.0584L32.0868 22.8846L19.625 12.0427L21.0089 10H22.4375L34 20.0584Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              title={Data.social.id2.name}
              href={Data.social.id2.link}
              target="_blank"
            >
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="social_icon"
              >
                <path
                  d="M35.625 0H9.375C4.19813 0 0 4.19813 0 9.375V35.625C0 40.8019 4.19813 45 9.375 45H35.625C40.8038 45 45 40.8019 45 35.625V9.375C45 4.19813 40.8038 0 35.625 0ZM15 35.625H9.375V15H15V35.625ZM12.1875 12.6225C10.3762 12.6225 8.90625 11.1412 8.90625 9.315C8.90625 7.48875 10.3762 6.0075 12.1875 6.0075C13.9988 6.0075 15.4688 7.48875 15.4688 9.315C15.4688 11.1412 14.0006 12.6225 12.1875 12.6225ZM37.5 35.625H31.875V25.1175C31.875 18.8025 24.375 19.2806 24.375 25.1175V35.625H18.75V15H24.375V18.3094C26.9925 13.4606 37.5 13.1025 37.5 22.9519V35.625Z"
                  fill="black"
                />
              </svg>
            </a>

            <a
              title={Data.social.id4.name}
              href={Data.social.id4.link}
              target="_blank"
            >
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="social_icon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.625 45H9.375C4.19813 45 0 40.8019 0 35.625V9.375C0 4.19813 4.19813 0 9.375 0H35.625C40.8038 0 45 4.19813 45 9.375V35.625C45 40.8019 40.8056 44.9981 35.625 45ZM37.4437 34.4081V33.9038L35.1056 31.6087C34.8994 31.4512 34.7962 31.1925 34.8394 30.9356V14.0644C34.7962 13.8075 34.8994 13.5488 35.1056 13.3913L37.5 11.0963V10.5919H29.2088L23.2987 25.335L16.575 10.5919H7.87875V11.0963L10.68 14.4694C10.9538 14.7188 11.0944 15.0825 11.0569 15.45V28.71C11.1394 29.1881 10.9875 29.6775 10.6519 30.0262L7.5 33.8475V34.3519H16.4362V33.8475L13.2844 30.0262C12.945 29.6775 12.7856 29.1919 12.8494 28.71V17.2425L20.6925 34.3519H21.6038L28.3406 17.2425V30.8794C28.3406 31.2431 28.3406 31.3144 28.1025 31.5525L25.68 33.9038V34.4081H37.4437V34.4081Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
