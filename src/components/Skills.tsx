import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/app/lib/data'

export default function Skills() {
  return (
    <section>
        <SectionHeading>My Skills</SectionHeading>
        <ul>
            {skillsData.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>
    </section>
  )
}
