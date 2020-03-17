import React from 'react';
import './global.css';
export const BasicButton = ({title}) => (
    <button className='BasicButton'>{title}</button>
);

export const PrimaryButton = ({title}) => (
    <button className='PrimaryButton'>{title}</button>
);

export const DangerButton = ({title}) => (
    <button className='DangerButton'>{title}</button>
);

export const AlertButton = ({title}) => (
    <button className='AlertButton'>{title}</button>
);

export const SuccessButton = ({title}) => (
    <button className='SuccessButton'>{title}</button>
);

export const FillingColorCheckBox = ({title, className}) => (
    <label className={className}>
      <input type='checkbox' class="hidden" />
      <span class=""></span>
      <span class="txt">{title}</span>
    </label>
);

export const CircleCheckbox = () => (
    <span>
         <input type="checkbox"class="CircleCheckbox" id="check1" />
         <label for="check1"></label>
    </span>
);

export const BorderedCheckBox = ({title}) => (
    <label className='bordered'>
      <input type='checkbox' className="hidden customized" />
      <span class="bordered" />
      <span class="txt">{title}</span>
    </label>
);

export const DropdownList = ({list}) => (
    <div className="ShadowedDropdown">
      <select>{
        list.map(item => {
        return <option value={item}>{item}</option>
        })
      }
      </select>
    </div>
);