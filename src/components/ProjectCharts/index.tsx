import React from 'react'
import { bgColors, borderColors } from 'consts'
import { Doughnut } from 'react-chartjs-2'
import classes from './styles.module.scss'

interface ProjectProps {
  projectNames: string[]
  projectAmounts: number[]
}

interface ProjectChartsProps {
  projects: ProjectProps
}

export default function ProjectCharts({ projects }: ProjectChartsProps) {
  return (
    <div className={classes.projectChartsContainer}>
      <Doughnut
        data={{
          labels: Object.values(projects.projectAmounts),
          datasets: [
            {
              data: Object.values(projects.projectNames),
              backgroundColor: bgColors,
              borderColor: borderColors,
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  )
}
