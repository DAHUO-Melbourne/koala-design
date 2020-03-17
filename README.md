# KOALA-DESIGN
[![Version](https://img.shields.io/badge/npm-v1.0.21-519dd9.svg)](https://www.npmjs.com/package/@da-huo/koala-design)
![Language](https://img.shields.io/badge/language-ReactJS-orange.svg)
![Licience](https://img.shields.io/badge/licience-MIT-green.svg)
--- 
A Component Library for React
---

# installation
--- 
Using [npm](https://www.npmjs.com/)
`npm i @da-huo/koala-design`

# instruction
1. import:
```
import {PrimaryButton, 
        DangerButton, 
        AlertButton, 
        SuccessButton, 
        BasicButton, 
        FillingColorCheckBox,
        CircleCheckbox, 
        BorderedCheckBox, 
        DropdownList} from '@da-huo/koala-design';
```
2. Grammar in JSX:
```
<PrimaryButton title='PrimaryButton'/>
      <DangerButton title='Danger Click!' />
      <BasicButton title='BasicButton'/>
      <AlertButton title='alert' />
      <SuccessButton title='Success' />
      <DropdownList list={[1,2,3,4,5]} />
      <FillingColorCheckBox title="Agree the terms" className="Promice" />
      <CircleCheckbox />
      <BorderedCheckBox/>
```