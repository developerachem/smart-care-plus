import Input from '@/components/ui/form-element/Input';
import React from 'react';
import { FaFolderOpen } from 'react-icons/fa';

const Dropdown = () => {

    
    return (
        <div>
            <div className="border p-4 mt-3">
                <Input required label="Search..." />
                <ul className="menu menu-sm p-0 bg-white dark:bg-whiteDark rounded-lg mt-2">
                <li>
                    <details close>
                    <summary>
                        <FaFolderOpen/>
                        My Files
                    </summary>
                    <ul>
                        <li>
                        <details close>
                            <summary>
                                <FaFolderOpen/>
                                Images
                            </summary>
                            <ul>
                            <li><a>
                                <FaFolderOpen/>
                                Screenshot1.png
                            </a></li>
                            <li><a>
                                <FaFolderOpen/>
                                Screenshot2.png
                            </a></li>
                            <li>
                                <details close>
                                <summary>
                                    <FaFolderOpen/>
                                    Others
                                </summary>
                                <ul>
                                    <li><a>
                                    <FaFolderOpen/>
                                    Screenshot3.png
                                    </a></li>
                                </ul>
                                </details>
                            </li>
                            </ul>
                        </details>
                        </li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;



