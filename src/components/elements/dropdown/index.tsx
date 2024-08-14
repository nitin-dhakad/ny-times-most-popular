import React from "react";

interface DropdownProps {
    selectedValue: string
    dayList: Array<string>
    onDropdownChangeValue: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
const Dropdown = ({ selectedValue, dayList, onDropdownChangeValue }: DropdownProps) => {
    return (
        <div className='flex justify-end mr-1'>
            <div className="text-base font-bold text-gray-600 pr-1">
                Select Day(s):
                <select value={selectedValue} onChange={onDropdownChangeValue} className="text-base font-bold text-gray-600 ml-4 px-3 text-center border-solid border-2 border-gray-800 rounded">
                    {dayList?.map((day: string) => (
                        <option className="text-base text-gray-500 text-left" key={day} value={day}>
                            {`${day} ${parseInt(day) > 1 ? 'days' : 'day'}`}
                        </option>
                    ))}
                </select>
            </div>
        </div>

    )
};

export default Dropdown;
