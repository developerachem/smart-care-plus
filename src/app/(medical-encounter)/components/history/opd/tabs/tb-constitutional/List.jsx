import Select from '@/components/ui/form-element/Select';
import React, { useState } from 'react';
import { FaArrowLeft , FaArrowRight } from 'react-icons/fa';

const List = ({selectDisabled , title}) => {
const [availableItems, setAvailableItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
]);
const [selectedItems, setSelectedItems] = useState([]);

const handleAddClick = () => {
    const selected = availableItems.filter(item =>
    document.getElementById(item).checked
    );

    setAvailableItems(availableItems.filter(item =>
    !selected.includes(item)
    ));
    setSelectedItems([...selectedItems, ...selected]);
};

const handleRemoveClick = () => {
    const deselected = selectedItems.filter(item =>
    document.getElementById(item).checked
    );

    setSelectedItems(selectedItems.filter(item =>
    !deselected.includes(item)
    ));
    setAvailableItems([...availableItems, ...deselected]);
};

return (
    <div className='bg-white dark:bg-whiteDark shadow-md rounded-md'>
        <h1 className='text-xl px-4 py-3 border-b font-normal'>{title}</h1>
        <div className={`${selectDisabled ? 'hidden' : 'mt-5 mx-6 md:grid md:grid-cols-5'}`}>
        <div className={`col-span-2 pr-2`}>
            <Select label="Constitutional Symptom" required >
                <option value="">Select</option>
                <option value="">Positive</option>
                <option value="">Negative</option>
            </Select>
        </div>
        </div>
        <div className="md:grid md:grid-cols-5 gap-4 p-6">
            <div className="col-span-2 border dark:border-gray-200 rounded-md p-3 h-60  overflow-y-auto">
                {availableItems.map(item => (
                    <div key={item}>
                    <input type="radio" name='radio' id={item} />
                    <label className='ms-2' htmlFor={item}>{item}</label>
                    </div>
                ))}
            </div>

            <div className='col-span-1 flex flex-col justify-center items-center'>
                <div className="flex flex-col ">
                    <button className='flex items-center w-fit px-8 py-2 text-xl rounded-lg my-4 bg-buttonColor hover:bg-buttonColorHover text-white transition duration-300' onClick={handleAddClick}> <FaArrowRight/> </button>
                    <button className='flex items-center w-fit px-8 py-2 text-xl rounded-lg my-4 bg-gray-600 hover:bg-gray-700 text-white transition duration-300' onClick={handleRemoveClick}> <FaArrowLeft/> </button>
                </div>
            </div>

            <div className="col-span-2 border rounded-md p-3 h-60  overflow-y-auto">
            {selectedItems.map(item => (
                <div key={item}>
                <input type="radio" name='radio' id={item} />
                <label className='ms-2' htmlFor={item}>{item}</label>
                </div>
            ))}
            </div>
        </div>
    </div>
);
};

export default List;
