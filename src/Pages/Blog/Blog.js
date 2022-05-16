import React from 'react';
import { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import './Blog.css';

const Blog = () => {
    const [openQuestion1, setOpenQuestion1] = useState(false);
    const [openQuestion2, setOpenQuestion2] = useState(false);
    const [openQuestion3, setOpenQuestion3] = useState(false);
    return (
        <div className='blog-container'>
            <Button
                onClick={() => setOpenQuestion1(!openQuestion1)}
                aria-controls="collapse-text"
                aria-expanded={openQuestion1}
            >
                Difference between  Authentication and Authorization
            </Button>

            <div>
                <Collapse in={openQuestion1} dimension="width">
                    <div id="collapse-text">
                        <table>
                            <thead>
                                <tr>
                                    <td>
                                        Authentication
                                    </td>
                                    <td>
                                        Authorization
                                    </td>
                                </tr>
                            </thead>
                            <tr>
                                <td>
                                    1. Authentication verifies who the user is.
                                </td>
                                <td>
                                    1. Authorization determines what resources a user can access.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2. Authentication works through passwords,
                                    one-time pins, biometric information, and
                                    other information provided or entered by the user.
                                </td>
                                <td>
                                    2. Authorization works through settings that are implemented and
                                    maintained by the organization.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    3. Authentication is the first step of a good identity and
                                    access management process.
                                </td>
                                <td>
                                    3. Authorization always takes place after authentication.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    4. Authentication is visible to and partially changeable
                                    by the user.
                                </td>
                                <td>
                                    4. Authorization isn’t visible to or changeable by the user.
                                </td>
                            </tr>
                        </table>
                    </div>
                </Collapse>
            </div>
            <Button
                onClick={() => setOpenQuestion2(!openQuestion2)}
                aria-controls="collapse-text"
                aria-expanded={openQuestion2}
            >
                Why are you using `firebase`? What other options do you have to implement authentication?
            </Button>
            <div>
                <Collapse in={openQuestion2} dimension="width">
                    <div id="collapse-text">
                        <table>
                            <tr>
                                <td>
                                    Firebase is an app development platform that helps us to build and grow apps and games that users choise. It manages all data real-time in the database. So, the exchange of data to and from the database is easy and quick.

                                    Firebase is a set of tools offered by Google to build excellent scalable applications in the cloud. It is a powerful service that helps in building applications quickly without reinventing the components or modules. Services like analytics, authentication, databases, configuration, file storage, push messaging are provided by firebase thereby making it easy for the developers to focus on the user experience of the application.

                                    That is why we are using Firebase.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                                </td>
                            </tr>
                        </table>
                    </div>
                </Collapse>
            </div>
            <Button
                onClick={() => setOpenQuestion3(!openQuestion3)}
                aria-controls="collapse-text"
                aria-expanded={openQuestion3}
            >
                What other services does `firebase` provide other than authentication?
            </Button>
            <div>
                <Collapse in={openQuestion3} dimension="width">
                    <div id="collapse-text">
                        <table>
                            <tr>
                                <td>
                                    Firebase is a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google's infrastructure. Firebase is categorized as a NoSQL database program, which stores data in JSON-like documents.
                                    <br />
                                    Firebase provides the following services other than authentication
                                    <ol>
                                        <li>Emulator Suite</li>
                                        <li>Realtime Database</li>
                                        <li>Cloud Firestore</li>
                                        <li>Storage</li>
                                        <li>Machine Learning</li>
                                        <li>Hosting</li>
                                        <li>Cloud Functions</li>
                                        <li>Google Analytics</li>
                                        <li>Predictions</li>
                                        <li>Cloud Messaging</li>
                                    </ol>
                                </td>
                            </tr>
                        </table>
                    </div>
                </Collapse>
            </div>
        </div>
    );
};

export default Blog;