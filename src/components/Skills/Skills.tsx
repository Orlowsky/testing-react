import React from 'react'
import { SkillsProps } from './Skills.types'

export const Skills = (props: SkillsProps) => {
    const { skills } = props
  return (
    <>
    <ul>
        {skills.map((skill, index) => (
            <li key={index+'-'+skill
            }>{skill}</li>
        ))}
    </ul>
    </>
  )
}
