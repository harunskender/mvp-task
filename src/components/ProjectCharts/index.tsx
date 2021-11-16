import { bgColors, borderColors } from 'consts'
import React from 'react'
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
  console.log(Object.values(projects.projectNames))

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
