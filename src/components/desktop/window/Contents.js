import React, { useState, useEffect } from 'react';
import { CONTENTS_FACTS, PROJECTS } from '../../../constants';
import axios from 'axios';
const Contents = ({ activeTab }) => {
    // console.log(CONTENTS_FACTS[activeTab]['Name']);
    const [ repos, setRepos ] = useState(null);
    useEffect(
        () => {
            (async () => {
                const { data } = await axios.get('https://api.github.com/users/sushantbaskota2/repos');
                console.log(data);
                setRepos(data);
            })();
            return () => {};
        },
        [ activeTab ]
    );
    if (activeTab === 'Github') {
        return (
            repos && (
                <div className='body-info'>
                    <div className='info' />
                    <div className='quick-facts'>
                        <span className='title'>Github Repositories</span>
                        <div className='github'>
                            {repos.map(({ name, html_url }) => (
                                <div className='repo'>
                                    <i class='fas fa-code' />
                                    <a href={html_url}>{name}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        );
    } else if (activeTab === 'Education') {
        return (
            <div className='body-info'>
                <div className='info' />
                <div className='quick-facts'>
                    <span className='title'>Education</span>
                    <div className='card'>
                        <div className='header'>
                            <img src='./icons/UM.png' alt='UM-LOGO' />
                            <span>The University of Mississippi</span>
                        </div>

                        <div className='facts'>
                            <div className='fact'>
                                <span className='head'>Degree: </span>
                                <span className='tbody'>Bachelors of Science</span>
                            </div>
                            <div className='fact'>
                                <span className='head'>Major: </span>
                                <span className='tbody'>Computer Science</span>
                            </div>
                            <div className='fact'>
                                <span className='head'>Minor: </span>
                                <span className='tbody'>Mathematics</span>
                            </div>
                            <div className='fact'>
                                <span className='head'>GPA: </span>
                                <span className='tbody'>3.90</span>
                            </div>
                            <div className='fact'>
                                <span className='head'>Relevant Courses: </span>
                                <ul>
                                    <li>Web Development</li>
                                    <li>Software Design and Development</li>
                                    <li>Algorithm and Data Structures</li>
                                    <li>Data Science and Visualization</li>
                                    <li>Organization of Programming Languages</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (activeTab === 'Project') {
        return (
            <div className='body-info'>
                <div className='info' />
                <div className='quick-facts'>
                    <span className='title'>Projects</span>
                    <div className='projects'>
                        {PROJECTS.map((p) => (
                            <div className='project'>
                                <div className='icon'>
                                    <img src='./icons/projects/recipe.png' />
                                </div>
                                <div className='desc'>
                                    <div className='project-name'>{p.name}</div>
                                    <div className='project-link'>
                                        <a href={p.link}>(Demo) {p.link}> </a>
                                    </div>
                                    <div className='project-desc'>{p.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } else if (activeTab === 'Experiences') {
        return (
            <div className='body-info'>
                <div className='info' />
                <div className='quick-facts'>
                    <span className='title'>Experiences</span>
                    <div className='experiences' />
                </div>
            </div>
        );
    } else if (activeTab === 'Skills') {
        return (
            <div className='body-info'>
                <div className='info' />
                <div className='quick-facts'>
                    <span className='title'>Skills</span>
                    <div className='skills'>
                        <div className='top'>
                            <div className='left'>
                                <span className='header'>I am proficient in</span>
                                <ul>
                                    <li>
                                        <div>
                                            <i class='fab fa-react' style={{ color: 'lightblue' }} />{' '}
                                            <span>React (Redux, Hooks, Provider)</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <i class='fab fa-node' style={{ color: 'green' }} />
                                            <span>Node.js (Express)</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div>
                                            <img src='https://img.icons8.com/color/48/000000/mongodb.png' />
                                            <span>MongoDB</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <img src='https://img.icons8.com/dotty/80/000000/sql.png' />
                                            <span>MySQL</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <i class='fab fa-css3-alt' style={{ color: 'red' }} />
                                            <span>HTML5, CSS3, SASS</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <i class='fab fa-java' style={{ color: 'brown' }} />
                                            <span>Java</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='right'>
                                <span className='header'>I am skilled in</span>
                                <ul>
                                    <li>
                                        <div>
                                            <i class='fab fa-python' />
                                            <span>Python</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <i class='fab fa-php' style={{ color: ' blue' }} />
                                            <span>PHP</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <img src='https://img.icons8.com/color/48/000000/flutter.png' />
                                            <span>Flutter</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='bottom'>
                            <div className='left'>
                                <span className='header'>Skills I am learning</span>
                                <ul>
                                    <li>
                                        <div>
                                            <img src='https://img.icons8.com/color/48/000000/graphql.png' />
                                            <span>GraphQL</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <img src='https://yahya-gilany.com/img/stack/d3.png' />
                                            <span>D3.js</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div>
                                            <img src='https://img.icons8.com/cute-clipart/64/000000/react-native.png' />
                                            <span>React Native</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='right'>
                                <span className='header'>Skills I want to learn</span>
                                <ul>
                                    <li>
                                        <div>
                                            <img src='https://img.icons8.com/color/48/000000/angularjs.png' />
                                            <span>Angular</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <img src='https://img.icons8.com/color/48/000000/typescript.png' />
                                            <span>TypeScript</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <img src='https://miro.medium.com/max/449/1*Bh_B98GcAHTzYq21D79GLg.png' />
                                            <span>TensorFlow</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='body-info'>
                <div className='info' />
                <div className='quick-facts'>
                    <span className='title'>Sushant Baskota</span>
                    <div className='facts'>
                        {Object.keys(CONTENTS_FACTS[activeTab]).map((key, i) => (
                            <div className='fact'>
                                <span>{key} </span>
                                <span>:</span>
                                <span> {CONTENTS_FACTS[activeTab][key]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};

export default Contents;
