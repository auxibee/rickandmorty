

import Accordion from './accordion';

export default {
    title : 'Components/Accordion',
    component: Accordion
}

const items = [{title: 'hello', buttons:['alive','dead','unknown']},
{title: 'header', buttons:['casio','gifhgad']}]

const filter = () => console.log('testing');

export const DefaultAccordion = () => <Accordion items={items} onFilter={filter}/>