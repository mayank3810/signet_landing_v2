import React, { useState } from 'react';

function Accordion({ title, children, index, sections, setSections }) {
	const isOpen = sections[index].isOpen;

	const toggleAccordion = () => {
		const newSections = sections.map((section, i) => {
			if (i === index) {
				return { ...section, isOpen: !isOpen };
			} else {
				return { ...section, isOpen: false };
			}
		});
		setSections(newSections);
	};

	return (
		<div className="accordion">
			<div className="accordion-header" onClick={toggleAccordion}>
				{title}
				<img src={isOpen ? '/images/png-icons/upArrow.png' : '/images/png-icons/downArrow.png'}></img>
			</div>
			{isOpen && <div className="accordion-body">{children}</div>}
		</div>
	);
}

export default Accordion;
